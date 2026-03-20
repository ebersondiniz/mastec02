import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Data Center Corporativo',
    category: 'Infraestrutura e Elétrica',
    image: 'https://img.usecurling.com/p/800/600?q=data%20center%20server%20room',
  },
  {
    title: 'Rede Óptica Metropolitana',
    category: 'Telecomunicações',
    image: 'https://img.usecurling.com/p/800/600?q=fiber%20optic%20installation',
  },
  {
    title: 'Galpão Logístico Integrado',
    category: 'Engenharia Civil e Redes',
    image: 'https://img.usecurling.com/p/800/600?q=industrial%20construction%20site',
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-secondary-foreground font-semibold text-sm mb-6 border border-white/20">
              Nosso Portfólio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-slate-300 text-lg">
              Conheça alguns dos projetos entregues pela Mastec, que demonstram nossa capacidade de
              execução, rigor técnico e compromisso com resultados de alta performance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 bg-white/5 backdrop-blur-sm group cursor-pointer h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col justify-center">
                <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
