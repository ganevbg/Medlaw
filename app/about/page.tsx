import { Target, Users, Scale, BookOpen, Handshake, Globe } from "lucide-react"

export const metadata = {
  title: "За нас | СЮВМО",
  description: "Сдружение на юристите за медицинското образование, наука и практика - обединение на опитни юристи в областта на висшето образование и здравеопазването.",
}

export default function AboutPage() {
  const goals = [
    {
      icon: Scale,
      text: "Създаване на условия за насърчаване на интелектуалния потенциал на юристите и професионалистите от сферите на медицинското образование, наука и практика, за създаване на форми за достъп до позитивни практики.",
    },
    {
      icon: Users,
      text: "Създаване на контакти със сродни организации в страната и в чужбина за споделяне на опит и добри практики.",
    },
    {
      icon: Handshake,
      text: "Създаване на организация, подпомагаща членовете си в дейността им и защитаваща интересите им пред работодатели, държавни и общински органи.",
    },
    {
      icon: BookOpen,
      text: "Повишаване квалификацията на членовете чрез своевременно информиране и разясняване на съществуващи и нови нормативни изисквания.",
    },
    {
      icon: Target,
      text: "Разрешаване на колективни и индивидуални спорове, чрез предлагане на квалифицирано медиаторско съдействие.",
    },
    {
      icon: Globe,
      text: "Участие в процесите по усъвършенстване на нормативната уредба в образователната система и методите на обучение.",
    }  
  ]

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance mb-6">
              За нас
            </h1>
           
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                „Сдружение на юристите за медицинското образование, наука и практика“ (СЮМОНП) е неправителствена организация и обединение на опитни юристи, със специфични правни познания, в областта на висшето медицинско образование, развитието на академичния състав, здравеопазването, научната и изследователска дейност, акредитационни и други процедури за нуждите на висши училища и лечебни заведения.

Ние обединяваме усилия за повишаване качеството на правоприлагане във медицинското образование, наука и практика и сме готови да споделим широко опита си и да допринесем за насърчаването на позитивни практики в изграждането и развитието на кадрите в академичните и медицински среди.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Goals Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              Основни цели на сдружението
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {goals.map((goal, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <goal.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{goal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Goals */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Дейност и средства за постигане на целите:
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">1.</span>
                  <span>Изразяване на мнения и становища относно развитието и проблемите на медицинското образование, научно-изследователска и развойна дейност и медицинската практика в страната.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">2.</span>
                  <span>Публикационна активност и участие в медийни инициативи и формати, тематично свързани с проблемите на медицинското образование, кадровото развитие и здравеопазването.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">3.</span>
                  <span>Провеждане на тематични курсове, семинари и обучения.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">4.</span>
                  <span>Експертно подпомагане на организации, лечебни заведения, граждани, компании и държавни институции.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">5.</span>
                  <span>Консултантска дейност, изготвяне на анализи, становища.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">6.</span>
                  <span>Участия в национални и международни проекти.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
