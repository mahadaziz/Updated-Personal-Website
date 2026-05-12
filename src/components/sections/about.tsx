import { SkillsCarousel } from '@/components/skills-carousel'
import { Typography } from '@/components/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { biography, education, experience } from '@/data'

export const About = () => {
    return (
        <section className="flex flex-col space-y-8 py-4">
            <Typography variant="h1" underline>
                📝 About Me
            </Typography>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Summary</Typography>
                <p className="text-lg text-muted-foreground">
                    Full-stack software engineer with experience shipping production tools for broadcast media,
                    real-time collaborative applications, and AI-driven products. At Evertz Microsystems, I built an
                    Adobe Premiere CEP extension from scratch now deployed at multiple customer sites, and drove
                    reliability and performance work across a 5-service broadcast multiviewer (React, Node.js, WAMP
                    messaging, hardware drivers). Outside of work I build with Next.js, TypeScript, Postgres, and AWS
                    via Terraform — most recently a real-time collaborative document editor backed by a custom Yjs
                    WebSocket sync server. I care about clean architecture, careful state management, and turning fuzzy
                    requirements into reliable, well-tested systems.
                </p>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Education</Typography>
                <div className="flex flex-col gap-3">
                    {education.map((item) => (
                        <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-md text-muted-foreground">{item.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Work Experience</Typography>
                <div className="flex flex-col gap-3">
                    {experience.map((item) => (
                        <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-md text-muted-foreground">{item.subtitle}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Extra-Curriculars</Typography>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {biography.map((item) => (
                        <Card key={item.year} className="w-full">
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{item.year}</p>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <Typography variant="h2">My Skills</Typography>
                <SkillsCarousel />
            </div>
        </section>
    )
}
