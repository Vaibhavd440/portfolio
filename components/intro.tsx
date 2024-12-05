import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Intro() {
  return (
    <section id="home" className="pt-28 pb-20 text-center">
      <div className="container mx-auto px-6">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241124_171130653.jpg-QxjX0Gz7dLBkoD1JYlQNt2tf2avfDJ.jpeg" 
          alt="Vaibhav Kumar Dubey" 
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold mb-2">Vaibhav Kumar Dubey</h1>
        <p className="text-xl text-muted-foreground mb-4">
          <span className="text-primary">&lt;</span>
          Engineering Graduate | Cloud Enthusiast | Chat Support Specialist
          <span className="text-primary">/&gt;</span>
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          Result-driven engineering graduate with strong technical skills and a proven track record in exceptional chat support. Passionate about innovative problem-solving.
        </p>
        <div className="flex justify-center space-x-4">
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
    </section>
  )
}

