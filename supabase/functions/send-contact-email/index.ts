import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { Resend } from 'npm:resend'

const resendApiKey = Deno.env.get('RESEND_API_KEY')
const resend = resendApiKey ? new Resend(resendApiKey) : null

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      })
    }

    if (!resend) {
      console.warn('RESEND_API_KEY not set. Mocking email send for development.')
      console.log(
        `[MOCK EMAIL] To: vendas@mastectelecom.com.br\nFrom: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
      )
      console.log(
        `[MOCK EMAIL AUTO-REPLY] To: ${email}\nFrom: onboarding@resend.dev\nSubject: Confirmação de Contato\nMessage: Recebemos sua mensagem e em breve retornaremos o seu contato!`,
      )

      return new Response(
        JSON.stringify({
          success: true,
          mocked: true,
          message:
            'Email mock executado (Defina a variável RESEND_API_KEY no Supabase para enviar emails reais).',
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 },
      )
    }

    const data = await resend.batch.send([
      {
        from: 'Contato Site <onboarding@resend.dev>', // Usando e-mail de teste do resend. Substitua por domínio verificado quando em produção
        to: ['vendas@mastectelecom.com.br'],
        reply_to: email,
        subject: `Novo Contato Site: ${subject}`,
        html: `
          <h2>Novo contato recebido pelo site</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <br/>
          <p><strong>Mensagem:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      },
      {
        from: 'Contato Site <onboarding@resend.dev>',
        to: [email],
        subject: `Confirmação de Contato: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Olá, ${name}!</h2>
            <p>Recebemos sua mensagem e em breve retornaremos o seu contato!</p>
            <br/>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            <p style="color: #666; font-size: 14px;"><strong>Cópia da sua mensagem:</strong></p>
            <p style="color: #666; font-size: 14px; background: #f9f9f9; padding: 12px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br/>')}
            </p>
            <br/>
            <p>Atenciosamente,<br/><strong>Equipe Mastec Engenharia</strong></p>
          </div>
        `,
      },
    ])

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Email sending error:', error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 },
    )
  }
})
