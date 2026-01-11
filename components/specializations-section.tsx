import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Building2, Users } from "lucide-react"

const specializations = [
  {
    icon: GraduationCap,
    title: "За медицински специалист и преподаватели",
    description:
      "Сигурност във Вашето кариерно развитие. Правно съдействие при конкурси по ЗРАСРБ (доцент/професор) и защита срещу претенции за медицински грешки.",
    href: "doctors",
  },
  {
    icon: Building2,
    title: "За лечебни заведения",
    description:
      "Управление на правния риск и превенция. Одит на документацията, внедряване на протоколи за безопасност и представителство при проверки от регулаторни органи.",
    href: "hospitals",
  },
  {
    icon: Users,
    title: "За пациенти",
    description:
      "Професионално представителство при сложни медицински инциденти. Анализ на фактическата обстановка и ефективна процесуална защита.",
    href: "patients",
  },
]

export default function SpecializationsSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Специализирани направления</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три основни стълба на експертизата, адаптирани към Вашите специфични нужди.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <a href={spec.href}>Научете повече →</a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
