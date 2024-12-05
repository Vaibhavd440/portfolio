import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Contact Me
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p>+91-9716682026</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:Vaibhavd440@gmail.com" className="hover:text-primary">
                  Vaibhavd440@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p>South Delhi, India</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required className="bg-background" />
                <Input type="email" placeholder="Your Email" required className="bg-background" />
                <Textarea placeholder="Your Message" required className="min-h-[120px] bg-background" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

