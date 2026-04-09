import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { Resend } from 'resend'

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
        `[MOCK EMAIL AUTO-REPLY] To: ${email}\nSubject: Recebemos seu contato - Mastec Engenharia\nMessage: Recebemos sua mensagem e em breve retornaremos o seu contato!`,
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
        from: 'Mastec Engenharia <onboarding@resend.dev>',
        to: [email],
        subject: 'Recebemos seu contato - Mastec Engenharia',
        html: `
          <h2>Olá, ${name}!</h2>
          <p>Recebemos sua mensagem e em breve retornaremos o seu contato!</p>
          <br/>
          <p><strong>Sua mensagem:</strong></p>
          <p><em>${message.replace(/\n/g, '<br/>')}</em></p>
          <br/>
          <p>Atenciosamente,<br/>Equipe Mastec Engenharia e Telecom</p>
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
