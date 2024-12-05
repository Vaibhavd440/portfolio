import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Work Experience
          <span className="text-primary">/&gt;</span>
        </h2>
        <Card className="max-w-3xl mx-auto bg-card">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Representative, Operations</CardTitle>
                <p className="text-sm text-muted-foreground">Concentrix Daksh Services India Private Limited</p>
                <p className="text-sm text-muted-foreground">June 2023 - January 2024 | Gurgaon</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Achieved a consistently high customer satisfaction rating of 95% or above by providing exceptional chat support and addressing customer inquiries promptly and effectively.</li>
              <li>Recognized with 6 Rewards and Recognition (RNR) for exemplary performance and high-quality service.</li>
              <li>Collaborated with the product development team to identify and report recurring technical issues, leading to a 30% decrease in system-related problems.</li>
              <li>Enhanced customer retention through professional and empathetic issue resolution.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

