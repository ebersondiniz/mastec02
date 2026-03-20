import { Network, Zap, RadioReceiver, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const SERVICES = [
  {
    icon: Network,
    title: 'Infraestrutura de Rede',
    description:
      'Descubra arquiteturas de alto impacto para sua operação. Otimizamos o tráfego de dados para garantir escalabilidade e atrair tráfego qualificado de informações.',
  },
  {
    icon: Zap,
    title: 'Engenharia Elétrica',
    description:
      'Projetos elétricos eficientes, otimizando elementos cruciais para melhor performance, redução de custos e segurança para usuários e equipamentos.',
  },
  {
    icon: RadioReceiver,
    title: 'Soluções Telecom',
    description:
      'Construa autoridade operacional através de links dedicados, radiocomunicação e fibra óptica para impulsionar a comunicação da sua empresa.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Nossos Serviços
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
              Aumente a Performance &<br />
              Escale sua Operação
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
            Nós nos mantemos à frente com as mais recentes ferramentas do setor de telecom e
            melhores práticas para garantir que seu negócio permaneça competitivo na era digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-[24px]"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>

                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
