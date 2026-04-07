import { Zap, Wifi, Server, Cable, Lock, Flame } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Engenharia Elétrica',
    description:
      'Projetos e instalações de baixa e média tensão, laudos técnicos, adequações normativas e soluções completas de eficiência energética.',
    icon: Zap,
  },
  {
    title: 'Infraestrutura de Redes',
    description:
      'Projetos de cabeamento estruturado, montagem de data centers, racks e certificação avançada de redes de dados e voz.',
    icon: Server,
  },
  {
    title: 'Redes Ópticas (FTTx)',
    description:
      'Lançamento, fusão e certificação de redes em fibra óptica para alta performance, garantindo estabilidade e velocidade na transmissão.',
    icon: Cable,
  },
  {
    title: 'Telecomunicações',
    description:
      'Instalação, comissionamento e manutenção preventiva e corretiva de torres, antenas e equipamentos de rádio transmissão.',
    icon: Wifi,
  },
  {
    title: 'Controle de Acesso',
    description:
      'Gerenciamento eficiente e seguro para entrada e saída de pessoas em áreas restritas.',
    icon: Lock,
  },
  {
    title: 'Sistemas de Detecção e Alarme de Incêndio',
    description:
      'Sensores avançados que identificam sinais precoces de incêndio, como fumaça, calor e gases, protegendo vidas e patrimônios.',
    icon: Flame,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-semibold text-sm mb-6">
            Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-slate-600 text-lg">
            Oferecemos um portfólio completo e integrado em engenharia e telecomunicações,
            desenvolvendo soluções sob medida para garantir o sucesso do seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-slate-100 hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-xl group bg-slate-50/50 hover:bg-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />

              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
