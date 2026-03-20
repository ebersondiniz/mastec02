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
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 shadow-sm">
                <Phone className="mr-2 h-4 w-4" />
                (62) 3315-2469
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
              className="bg-secondary hover:bg-secondary/90 text-white mt-4 w-full max-w-xs"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 3456-7890
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
              <div className="bg-white/10 p-4 rounded-xl inline-block mb-6 backdrop-blur-sm">
                <img
                  src={logoImg}
                  alt="Mastec Engenharia"
                  className="h-10 object-contain brightness-0 invert"
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
                <li>Engenharia Civil</li>
                <li>Engenharia Elétrica</li>
                <li>Infraestrutura de Redes</li>
                <li>Telecomunicações</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                Contato
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="h-5 w-5 text-secondary shrink-0" />
                  <span>Rua 9, Qd. 15 Lt. 15-A , Vila Industrial Jundiaí - Anápolis-GO</span>
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
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Mastec Engenharia e Telecom. Todos os direitos
              reservados.
            </p>
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
    </div>
  )
}
