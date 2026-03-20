import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-50/50 to-white"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" /> Plataforma Líder em Engenharia
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] mb-6 tracking-tight">
              Inovação e Precisão em <span className="text-gradient">Engenharia e Telecom</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Entregamos soluções sob medida em infraestrutura que melhoram a performance da sua
              rede, garantem segurança e convertem desafios técnicos em resultados sólidos para o
              seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/25"
              >
                Ver Portfólio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base h-14 px-8 border-2"
              >
                Falar com Especialista
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-200/60">
              <div>
                <p className="text-3xl font-bold text-secondary mb-1">15+</p>
                <p className="text-sm text-slate-500 font-medium">Anos de Experiência</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-secondary mb-1">500+</p>
                <p className="text-sm text-slate-500 font-medium">Projetos Concluídos</p>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="relative animate-fade-in-up delay-200 hidden lg:block">
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              {/* Decorative dashed circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_60s_linear_infinite]" />

              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-100">
                <img
                  src="https://img.usecurling.com/p/800/800?q=engineering%20professional&color=blue"
                  alt="Engenheiro Profissional"
                  className="w-full h-full object-cover animate-float"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 animate-float delay-100 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Avatar"
                  />
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Avatar"
                  />
                  <img
                    src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Avatar"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Clientes Satisfeitos</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-green-500" /> Verificado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
