import { Header } from '@/components/header'
import { Intro } from '@/components/intro'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground gradient-bg">
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-secondary text-foreground text-center py-6">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Vaibhav Kumar Dubey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

