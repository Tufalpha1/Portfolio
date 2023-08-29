import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Designs from '@/components/Designs'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Designs />
      <Contact />
    </main>
  )
}
