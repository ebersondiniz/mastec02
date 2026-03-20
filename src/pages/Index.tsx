import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Services />
      <About />
      <Features />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  )
}
