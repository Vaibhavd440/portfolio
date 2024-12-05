import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Global Institute of Technology and Management (MDU)",
      location: "India",
      period: "2019 - 2023",
      details: [
        "CGPA: 7.8"
      ]
    },
    {
      degree: "AISSCE (Class XII)",
      institution: "Balvantray Mehta Vidhya Bhawan",
      location: "India",
      period: "2017 - 2018",
      details: [
        "Aggregate: 57%"
      ]
    },
    {
      degree: "AISSE (Class X)",
      institution: "Balvantray Mehta Vidhya Bhawan",
      location: "India",
      period: "2015 - 2016",
      details: [
        "CGPA: 6"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Education
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{edu.institution}, {edu.location}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

