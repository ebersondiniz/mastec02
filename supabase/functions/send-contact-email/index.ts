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
        `[MOCK EMAIL] To: vendas@mastectelecom.com.br\nFrom: site@mastectelecom.com.br\nReply-To: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
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

    const data = await resend.emails.send({
      from: 'Contato Site <site@mastectelecom.com.br>',
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
    })

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
