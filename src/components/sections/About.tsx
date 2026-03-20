import { CheckCircle2, Shield, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.usecurling.com/p/800/800?q=engineers%20working%20telecom"
                alt="Equipe Mastec Engenharia"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>

            <Card className="absolute -bottom-8 -right-8 lg:-right-12 w-64 bg-white shadow-xl border-0 z-20 hidden md:block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">+15</div>
                    <div className="text-sm font-medium text-slate-500">Anos de Mercado</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
              Sobre a Mastec
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Construindo o futuro com <span className="text-secondary">inovação</span> e segurança
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              A Mastec Engenharia e Telecom é uma empresa dedicada a fornecer soluções completas e
              inovadoras nos setores de engenharia civil, elétrica e telecomunicações. Nossa equipe
              altamente qualificada está preparada para atender às demandas mais complexas,
              entregando projetos que superam expectativas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-secondary mb-4" />
                <h4 className="font-bold text-primary text-lg mb-2">Nossa Missão</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fornecer soluções de engenharia e telecomunicações com excelência, segurança e
                  inovação, gerando valor contínuo aos clientes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Lightbulb className="h-8 w-8 text-secondary mb-4" />
                <h4 className="font-bold text-primary text-lg mb-2">Nossa Visão</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ser referência nacional na prestação de serviços integrados, sendo reconhecida
                  pela qualidade, sustentabilidade e tecnologia aplicada.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h4 className="font-bold text-primary text-lg mb-4">Nossos Valores</h4>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  'Segurança em primeiro lugar',
                  'Qualidade técnica',
                  'Inovação constante',
                  'Ética e transparência',
                  'Compromisso com o cliente',
                  'Sustentabilidade',
                ].map((valor, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-600 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    {valor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
