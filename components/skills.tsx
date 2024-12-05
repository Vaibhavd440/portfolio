import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'C', 'Java', 'Python', 'Solidity']
    },
    {
      title: 'Technologies',
      skills: ['Blockchain', 'Machine Learning', 'DevOps', 'Git', 'MySQL']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['GCP', 'AWS', 'Azure']
    },
    {
      title: 'Core Concepts',
      skills: ['DSA', 'Computer Networks', 'DBMS', 'Manual and Automation Testing']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">&lt;</span>
          Skills
          <span className="text-primary">/&gt;</span>
        </h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-sm py-1 px-3 bg-card">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

