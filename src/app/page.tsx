'use client';
import { Hero } from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Designs from '@/components/Designs'
import SecurityProjects from '@/components/SecurityProjects'



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <SecurityProjects />
      <Designs />
      <Contact />
    </main>
  );
}
