import { Check } from "lucide-react"

const advantages = [
  {
    title: "15+ години опит",
    description: "Комбинация от практика в лечебни заведения и съдебната зала.",
  },
  {
    title: "Академичен поглед",
    description: 'Задълбочено познаване на университетските процедури „отвътре".',
  },
  {
    title: "Двустранна перспектива",
    description:
      "Опитът в защитата и на лекари, и на пациенти ми позволява да предвиждам ходовете на отсрещната страна.",
  },
  {
    title: "Дискретност и Етика",
    description: "Безупречна репутация в медицинската общност.",
  },
]

export default function WhyChooseSection() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Защо да изберете мен?</h2>
            <p className="text-lg text-muted-foreground">
              Уникално предимство, основано на дългогодишен опит и специализирани познания.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
