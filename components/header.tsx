import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('home')
      if (introSection) {
        const introBottom = introSection.offsetTop + introSection.offsetHeight
        setIsScrolled(window.scrollY > introBottom - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-primary transition-opacity duration-300 ease-in-out">
          &lt;Welcome to my digital realm, where code meets creativity/&gt;
        </h2>
        <div className={`flex items-center space-x-4 transition-opacity duration-300 ease-in-out ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241124_171130653.jpg-QxjX0Gz7dLBkoD1JYlQNt2tf2avfDJ.jpeg"
            alt="Vaibhav Kumar Dubey"
            width={40}
            height={40}
            className="rounded-full border-2 border-primary"
          />
          <span className="text-lg font-semibold hidden md:inline">Vaibhav Kumar Dubey</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/lucifer2026" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:Vaibhavd440@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/Vaibhavd440" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

