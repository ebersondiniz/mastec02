import { Check, Search, BarChart2, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const PLANS = [
  {
    name: 'Básico',
    price: 'Sob Consulta',
    description: 'Teste nossas ferramentas e serviços — sem compromisso, apenas resultados.',
    icon: Search,
    features: [
      'Auditoria Básica',
      'Sugestões de Melhoria',
      'Análise de Performance',
      'Suporte por Email',
      'Insights Limitados',
    ],
    cta: 'Começar Teste',
    popular: false,
    color: 'bg-blue-500',
  },
  {
    name: 'Business',
    price: 'R$ 2.500/mês',
    description: 'Perfeito para pequenas e médias empresas que buscam impulsionar visibilidade.',
    icon: BarChart2,
    features: [
      'Estratégia Completa',
      'Manutenção Mensal',
      'Design Técnico de Projetos',
      'Relatórios Mensais',
      'Suporte Prioritário',
    ],
    cta: 'Começar Agora',
    popular: true,
    color: 'bg-primary',
  },
  {
    name: 'Ultimate',
    price: 'R$ 5.900/mês',
    description: 'Potência total em infraestrutura — ideal para grandes operações e expansões.',
    icon: Rocket,
    features: [
      'Estratégia Avançada',
      'Otimização Técnica e Velocidade',
      'Projetos Personalizados',
      'Gestão de Crises 24/7',
      'Consultoria Dedicada',
    ],
    cta: 'Falar com Especialista',
    popular: false,
    color: 'bg-blue-600',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Planos e Preços
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-4">
            Planos para Cada Negócio
          </h2>
          <p className="text-slate-500">
            Escolha um plano que se adapte aos seus objetivos, esteja você apenas começando ou
            escalando sua presença digital e estrutural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <Card
              key={i}
              className={`relative overflow-hidden border-none text-white transition-transform hover:-translate-y-2 duration-300 ${plan.color} ${plan.popular ? 'shadow-2xl shadow-primary/30 scale-105 z-10' : 'shadow-lg mt-0 md:mt-4'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MAIS POPULAR
                </div>
              )}

              <CardHeader className="text-center pt-10 pb-6">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-blue-100 text-sm px-4">{plan.description}</p>
                <div className="mt-8 mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-slate-50 rounded-full font-semibold h-12 mt-4 transition-all">
                  {plan.cta}
                </Button>
              </CardHeader>

              <CardContent className="bg-black/5 p-8 mt-2">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium text-white/90"
                    >
                      <div className="bg-white/20 rounded-full p-1 shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
