import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Facebook, Instagram, Twitter, Youtube, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Activity className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-secondary">
              Mastec <span className="text-primary font-medium">Engenharia</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="rounded-full shadow-lg hover:shadow-primary/25 transition-all"
            >
              <a href="#contact">Solicitar Orçamento</a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left mb-6">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="text-lg font-medium py-2 border-b">
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <a href="#contact">Solicitar Orçamento</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-secondary">Mastec Engenharia</span>
              </a>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Desbloqueie o potencial da sua infraestrutura com a Mastec. Visibilidade, segurança
                e performance para o seu negócio.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#home" className="hover:text-primary">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-4">Nossos Serviços</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-primary">
                    Infraestrutura de Rede
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Engenharia Elétrica
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Soluções Telecom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Consultoria Técnica
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-700">Endereço:</span> Av. Paulista, 1000 -
                  São Paulo, SP
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-700">Email:</span> contato@mastec.com.br
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-slate-700">Telefone:</span> +55 (11) 99999-9999
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>Copyright 2026 - Mastec Engenharia e Telecom. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                Termos & Condições
              </a>
              <a href="#" className="hover:text-primary">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
