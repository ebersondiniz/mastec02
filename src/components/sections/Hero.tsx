import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import heroImage from '@/assets/empresa-c9777.png'

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mastec Engenharia"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
            <span className="text-sm font-medium">Excelência em Engenharia & Telecom</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Soluções Integradas em{' '}
            <span className="text-secondary">Engenharia e Telecomunicações</span>
          </h1>

          <p
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Transformando desafios complexos em resultados eficientes com tecnologia de ponta e
            expertise técnica para impulsionar o seu negócio ao próximo nível.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white h-14 px-8 text-base shadow-lg shadow-secondary/25"
              asChild
            >
              <a href="#servicos" onClick={(e) => scrollToSection(e, '#servicos')}>
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white h-14 px-8 text-base"
              asChild
            >
              <a href="#contato" onClick={(e) => scrollToSection(e, '#contato')}>
                <Phone className="mr-2 h-5 w-5" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
