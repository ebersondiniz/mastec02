import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MapPin, Mail, Phone, Loader2 } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  service: z.string().min(1, { message: 'Selecione um serviço' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast({
        title: 'Mensagem Enviada!',
        description: 'Nossa equipe entrará em contato em breve.',
        variant: 'default',
      })
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Consulta Gratuita
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">
            Entre em Contato Conosco Hoje
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Tem uma dúvida, sugestão ou apenas quer dizer olá? Estamos aqui e felizes em ouvir de
            você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-primary rounded-3xl p-8 text-white flex flex-col justify-center space-y-8 shadow-xl shadow-primary/20">
            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-full shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Localização do Escritório</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  100 Av. Paulista, São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-full shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Envie uma Mensagem</h4>
                <a
                  href="mailto:contato@mastec.com.br"
                  className="text-blue-100 text-sm hover:underline"
                >
                  contato@mastec.com.br
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-full shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Faça uma Ligação</h4>
                <p className="text-blue-100 text-sm">+55 (11) 99999-9999</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu Nome"
                            className="h-12 bg-white rounded-lg border-slate-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu Email"
                            type="email"
                            className="h-12 bg-white rounded-lg border-slate-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Número de Telefone"
                            className="h-12 bg-white rounded-lg border-slate-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-white rounded-lg border-slate-200 text-slate-500">
                              <SelectValue placeholder="Selecione um Serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="infra">Infraestrutura de Rede</SelectItem>
                            <SelectItem value="eletrica">Engenharia Elétrica</SelectItem>
                            <SelectItem value="telecom">Soluções Telecom</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Escreva sua mensagem aqui..."
                          className="min-h-[150px] bg-white rounded-lg border-slate-200 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full px-12 h-14 text-base shadow-lg shadow-primary/25 w-full md:w-auto"
                  >
                    {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
