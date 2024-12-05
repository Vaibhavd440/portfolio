import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award } from 'lucide-react'

export function Achievements() {
  const achievements = [
    {
      title: 'Good Cloud Facilitator Program',
      period: 'May 2022 - July 2022',
      description: 'Completed training to gain proficiency in cloud-based technologies and learned to apply cloud solutions to solve real-world problems.'
    },
    {
      title: '30 Days of Google Cloud Program',
      period: 'September 2021 - October 2021',
      description: 'Completed hands-on labs and projects using Google Cloud Platform (GCP), including deploying applications and analyzing data with BigQuery.'
    },
    {
      title: 'Blockchain Certification',
      description: 'Gained expertise in blockchain development, smart contracts, and Ethereum. Led team projects and integrated decentralized solutions.'
    },
    {
      title: 'Java Certification',
      description: 'Mastered Java fundamentals with a focus on object-oriented programming and scalable applications.'
    }
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Achievements
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </div>
                {achievement.period && (
                  <p className="text-sm text-muted-foreground">{achievement.period}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

