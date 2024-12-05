import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'NFT Card Game - Liminal Floor',
      description: 'Created a blockchain-powered environment to track real-time cryptocurrency transactions. Developed a two-player card game with smart contract integration, enabling secure, decentralized gameplay through blockchain technology.',
      link: 'https://github.com/Vaibhavd440/liminal_floor'
    },
    {
      title: 'Snake Game',
      description: 'Developed a console-based Snake game with dynamic gameplay, including snake movement, fruit spawning, and collision detection. Implemented real-time user input handling and dynamic border wrapping.',
      link: 'https://github.com/Vaibhavd440/Snake-game'
    },
    {
      title: 'Krypt 3.0',
      description: 'Blockchain-based website for viewing and tracking cryptocurrency transactions in real-time. Integrated with GOERLI FAUCET based on Ethereum blockchain network.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Projects
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col bg-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  {project.link !== '#' && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

