import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight } from 'lucide-react'

const FAQS = [
  {
    q: 'Quais tipos de manutenção a Mastec oferece?',
    a: 'Oferecemos manutenção preventiva, corretiva e preditiva para infraestrutura de rede, sistemas elétricos e telecomunicações, garantindo máxima disponibilidade e segurança para a sua operação.',
  },
  {
    q: 'Como garantir as melhores soluções para minha empresa?',
    a: 'Iniciamos com uma auditoria técnica completa das suas instalações atuais. Com base nos dados coletados, desenvolvemos um projeto personalizado focado em eficiência, redução de custos e escalabilidade.',
  },
  {
    q: 'Quanto tempo demora para a implementação de um novo projeto?',
    a: 'O tempo de implementação varia de acordo com a complexidade e escopo do projeto. Projetos básicos podem levar algumas semanas, enquanto infraestruturas completas podem demandar meses. Fornecemos um cronograma detalhado antes do início.',
  },
  {
    q: 'Como escolher a estratégia certa para meu negócio?',
    a: 'Nossos consultores trabalham junto com sua equipe técnica para entender as demandas de negócios, gargalos operacionais e orçamento, recomendando as tecnologias mais adequadas ao seu cenário.',
  },
  {
    q: 'Que tipo de relatórios posso esperar receber?',
    a: 'Você receberá relatórios gerenciais e técnicos detalhados mensais, contendo métricas de uptime, consumo de banda/energia, incidentes resolvidos e recomendações de melhoria contínua.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <h4 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Você tem
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight mb-6">
              Alguma Dúvida?
            </h2>
            <p className="text-slate-500 mb-8">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços de engenharia e
              telecom.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
            >
              Mais perguntas <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border bg-white rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
