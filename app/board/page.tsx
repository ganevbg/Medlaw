import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Управителен съвет | СЮВМО",
  description: "Управителен съвет на Сдружение на юристите във висшето медицинско образование",
}

const boardMembers = [
  {
    name: "Кристиан Пройчев",
    role: "Председател на Управителния съвет",
    image: "/placeholder-kristian.jpg",
    bio: `Кристиан Пройчев е завършил право в ЮЗУ „Неофит Рилски" – Благоевград и в същия университет бил редовен докторант и хоноруван асистент в катедра „Гражданскоправни науки".

Кариерата му на практикуващ юрист, започва през 2009г., като в продължение на 6 години работи като главен юрисконсулт в най-голямата акушеро-гинекологична болница в гр. София, а след това в продължение на 3 години е адвокат в сферата на медицинското право, обслужвайки някой от големите столични държавни и общински лечебни заведения. От 2018г., в продължение на 7 години, последователно заема длъжностите юрисконсулт, главен юрисконсулт и ръководител на юридически екип в Медицински университет – София.

През 2025г. придобива специалност по „Правно регулиране в здравеопазването" в Медицински университет – София.`,
    publications: [
      "Някой проблеми, които възникват след преобразуване на публичните лечебни заведения в търговски дружества",
      "Академичната длъжност асистент и нейните несъвършенства в нормативната уредба",
      "Законът за публичните предприятия и държавните и общински лечебни заведения",
      "Медицинската специалност като предпоставка за заемане на академична длъжност в областта на здравеопазването",
    ],
  },
  {
    name: "Берта Якова",
    role: "Член на Управителния съвет",
    image: "/placeholder-berta.jpg",
    bio: "Автобиографията ще бъде добавена скоро.",
    publications: [],
  },
  {
    name: "Диляна Йорданова",
    role: "Член на Управителния съвет",
    image: "/placeholder-dilyana.jpg",
    bio: "Автобиографията ще бъде добавена скоро.",
    publications: [],
  },
]

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance mb-6">
              Управителен съвет
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              "Сдружение на юристите във висшето медицинско образование" се управлява и представлява от Управителен съвет, състоящ се от 3-ма души. Членовете и председателят се избират за срок от 2 години.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {boardMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-border">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Photo */}
                    <div className="bg-muted aspect-square md:aspect-auto">
                      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl font-serif text-primary">
                              {member.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">Снимката ще бъде добавена</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-2 p-8">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                          {member.role}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                        {member.name}
                      </h2>
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        {member.bio.split("\n\n").map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4 leading-relaxed">{paragraph}</p>
                        ))}
                      </div>
                      
                      {member.publications.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-border">
                          <h3 className="text-lg font-semibold text-primary mb-4">Научни публикации</h3>
                          <ul className="space-y-2">
                            {member.publications.map((pub, pubIndex) => (
                              <li key={pubIndex} className="flex gap-2 text-muted-foreground">
                                <span className="text-secondary">•</span>
                                <span className="italic">{pub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
