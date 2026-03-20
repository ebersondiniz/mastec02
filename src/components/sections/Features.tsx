import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Features() {
  const whyChooseUs = [
    'Temos conhecimento especializado e experiência em otimização de infraestrutura.',
    'Temos acesso a ferramentas profissionais de pesquisa, análise e execução.',
    'Como agência técnica respeitada, ajudamos a melhorar a confiabilidade do sistema.',
  ]

  const benefits = [
    'Atrai mais tráfego qualificado otimizando suas conexões.',
    'Aumenta visitas, reduz o tempo de inatividade e gera maior satisfação do cliente.',
    'Maior confiabilidade do sistema melhora a credibilidade da sua marca.',
  ]

  const partners = [
    { name: 'Cisco', logo: 'https://img.usecurling.com/i?q=network&shape=outline&color=blue' },
    { name: 'Intel', logo: 'https://img.usecurling.com/i?q=microchip&shape=outline&color=blue' },
    { name: 'Microsoft', logo: 'https://img.usecurling.com/i?q=windows&shape=outline&color=blue' },
    { name: 'AWS', logo: 'https://img.usecurling.com/i?q=cloud&shape=outline&color=blue' },
    { name: 'Dell', logo: 'https://img.usecurling.com/i?q=server&shape=outline&color=blue' },
  ]

  return (
    <section className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Por que nos escolher
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-6">
              Impulsione sua
              <br />
              Visibilidade
            </h2>
            <Button className="rounded-full px-8">
              Ver Proposta <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-secondary mb-6">Por que nós</h3>
            <ul className="space-y-6">
              {whyChooseUs.map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-secondary mb-6">Benefícios para você</h3>
            <ul className="space-y-6">
              {benefits.map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="relative w-full overflow-hidden border-t pt-12 opacity-70 hover:opacity-100 transition-opacity">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex w-[200%] animate-marquee">
            <div className="flex w-1/2 justify-around items-center">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all"
                >
                  <img src={p.logo} alt={p.name} className="h-8 object-contain opacity-60" />
                  <span className="text-xl font-bold text-slate-400">{p.name}</span>
                </div>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center">
              {partners.map((p, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all"
                >
                  <img src={p.logo} alt={p.name} className="h-8 object-contain opacity-60" />
                  <span className="text-xl font-bold text-slate-400">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
