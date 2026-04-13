import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Projects } from '@/components/sections/Projects'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
    </div>
  )
}
