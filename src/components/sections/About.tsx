import { Check } from 'lucide-react'

export function About() {
  const points = [
    'Temos conhecimento especializado e experiência em otimização de infraestrutura.',
    'Como agência técnica respeitada, ajudamos a melhorar os resultados operacionais.',
    'Temos acesso a ferramentas profissionais de pesquisa, análise e execução.',
  ]

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 blur-3xl" />

            <div className="relative z-10 w-full max-w-[500px]">
              <img
                src="https://img.usecurling.com/ppl/large?gender=male&seed=8"
                alt="Especialista Mastec"
                className="w-full h-auto object-cover rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">99.9%</p>
                    <p className="text-sm text-slate-500 font-medium">Uptime Garantido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Sobre Nós
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-6">
              Eleve a Presença Online da Sua Marca com Especialistas para um Crescimento Sustentável
            </h2>

            <p className="text-slate-500 mb-8 leading-relaxed">
              Na Mastec, combinamos inovação técnica com visão estratégica para fornecer soluções de
              engenharia e telecomunicações que não apenas resolvem problemas imediatos, mas
              preparam seu negócio para o futuro.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-primary shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  alt="Membro"
                />
                <img
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=5"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  alt="Membro"
                />
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  +10
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Equipe de <br />{' '}
                <strong className="text-secondary">Engenheiros Certificados</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
