import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/mastec1-da19d.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5',
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 z-50"
            >
              <img
                src={logoImg}
                alt="Mastec Engenharia e Telecom"
                className="h-10 md:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm font-medium text-slate-700 hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-sm"
              >
                <a href="https://wa.me/556233152469" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  FALE CONOSCO
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden z-50 p-2 text-primary hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col items-center gap-8 w-full px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-2xl font-bold text-primary hover:text-secondary transition-colors w-full text-center py-2 border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white mt-4 w-full max-w-xs"
              size="lg"
            >
              <a href="https://wa.me/556233152469" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                FALE CONOSCO
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-sm">
                <img
                  src={logoImg}
                  alt="Mastec Engenharia e Telecom"
                  className="h-10 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Soluções completas e inovadoras em engenharia civil, elétrica e telecomunicações
                para transformar desafios complexos em resultados eficientes.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                Links Rápidos
              </h4>
              <ul className="space-y-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-slate-400 hover:text-white hover:pl-2 transition-all"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                Serviços
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>Engenharia Elétrica</li>
                <li>Infraestrutura de Redes</li>
                <li>Controle de Acesso</li>
                <li>Detecção de Incêndio</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                Contato
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  <span>
                    Rua Aleixo Rodrigues de Queiroz, 1427 - Qd. 26 Lt. 19&nbsp; - Jundiaí Industrial
                    - Anápolis-GO, 75.115-010
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  <span>+55 (62) 3315-2469</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  <span>vendas@mastectelecom.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-slate-500">
              <p>
                &copy; {new Date().getFullYear()} Mastec Engenharia e Telecom. Todos os direitos
                reservados.
              </p>
              <span className="hidden md:inline text-slate-700">•</span>
              <p>
                Desenvolvido por{' '}
                <a
                  href="https://www.acheisistemas.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  Achei Sistemas
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/556233152469"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a]"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-6 w-6 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="hidden md:inline font-medium pr-1">Fale conosco</span>
      </a>
    </div>
  )
}
