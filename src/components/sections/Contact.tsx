import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Agradecemos o seu contato. Nossa equipe retornará em breve.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
              <p className="text-slate-300 mb-10 text-sm md:text-base leading-relaxed">
                Estamos prontos para entender as necessidades do seu projeto. Entre em contato
                conosco pelos canais abaixo ou preencha o formulário.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço Oficial</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <span>
                        Rua Aleixo Rodrigues de Queiroz, 1427 - Qd. 26 Lt. 19 - Jundiaí Industrial -
                        Anápolis-GO, 75.115-010
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      +55 (62) 3315-2469
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      vendas@mastectelecom.com.br
                      <br />
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Atendimento</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Segunda a Sexta-feira
                      <br />
                      08:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Envie uma Mensagem</h3>
              <p className="text-slate-500 text-sm">
                Preencha os campos abaixo e entraremos em contato o mais rápido possível.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder="Digite seu nome"
                    className="h-12 bg-slate-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    E-mail Corporativo
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="h-12 bg-slate-50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                  Assunto
                </label>
                <Input
                  id="subject"
                  required
                  placeholder="Ex: Orçamento para Infraestrutura de Rede"
                  className="h-12 bg-slate-50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                  Sua Mensagem
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Descreva os detalhes do seu projeto ou necessidade..."
                  rows={5}
                  className="resize-none bg-slate-50"
                />
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto px-8 h-12 bg-secondary hover:bg-secondary/90 text-white font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Processando envio...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
