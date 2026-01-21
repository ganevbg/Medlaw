import { Target, Users, Scale, BookOpen, Handshake, Globe } from "lucide-react"

export const metadata = {
  title: "За нас | СЮВМО",
  description: "Сдружение на юристите във висшето медицинско образование - обединение на опитни юристи в областта на висшето образование и здравеопазването.",
}

export default function AboutPage() {
  const goals = [
    {
      icon: Scale,
      text: "Участие в процесите на формирането на държавните политики в областта на развитието на медицинските кадри в лечебната и академични среди",
    },
    {
      icon: Users,
      text: "Утвърждаване и популяризиране, насърчаване и подпомагане развитието на медицинските кадри в лечебната и академични среди",
    },
    {
      icon: Handshake,
      text: "Създаване на организация, подпомагаща членовете си в дейността им и защитаваща интересите им пред държавни и общински органи",
    },
    {
      icon: BookOpen,
      text: "Повишаване квалификацията на членовете чрез своевременно информиране и разясняване на съществуващи и нови нормативни изисквания",
    },
    {
      icon: Target,
      text: "Участие в разрешаване на спорове чрез предлагане на медиаторско съдействие",
    },
    {
      icon: Globe,
      text: "Създаване на контакти със сродни организации в страната и в чужбина за споделяне на опит и добри практики",
    },
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
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Ние сме бивши и настоящи юристи на висши медицински училища в Република България, които обединяваме усилия за повишаване качеството на правоприлагане във висшето медицинско образование.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                „Сдружение на юристите във висшето медицинско образование" (СЮВМО) е неправителствена организация и обединение на опитни юристи, със специфични правни познания, в областта на висшето образование, здравеопазването, развитие на академичния състав, научната дейност, акредитацията и други, които са готови да споделят широко опита си и да допринесат за развитието на висшето медицинско образование.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Предмет на дейност
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Предметът на дейност на сдружението е организиране на съвместната работа между членовете, насочена към:
              </p>
              <ul className="space-y-4 list-disc list-inside">
                <li>Организиране и провеждане на законово предвидени обучения и създаване на обучителни материали</li>
                <li>Срещи, обучителни семинари, информационни мероприятия, консултации и изследвания</li>
                <li>Предоставяне на консултации</li>
                <li>Разработване, консултиране, управление и реализиране на проекти по национални и международни програми</li>
                <li>Участие самостоятелно и в партньорство с други организации в различни прояви</li>
                <li>Обмен на програми и идеи, свързани с реализиране целите на сдружението</li>
                <li>Съдействие за установяване на контакти, обмен на информация и сътрудничество със сродни организации в страната и чужбина</li>
              </ul>
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
              Допълнителни цели
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">7.</span>
                  <span>Да работи съвместно и да си сътрудничи с държавни институции, медии, неправителствени организации, както и да установява контакти и партньорство с други сродни организации от страната и чужбина.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">8.</span>
                  <span>Да насърчава връзката между действащите в системата на здравеопазването и висшето медицинско образование юристи, като привлича експертен и научен потенциал за решаване на краткосрочни и дългосрочни проблеми.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">9.</span>
                  <span>Да подпомага и съдейства за усъвършенстване на образователната система и методите на обучение в страната.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">10.</span>
                  <span>Да предоставя информация и указания относно правоприлагането в секторите на здравеопазването и нормативната уредба на висшето медицинско образование.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">11.</span>
                  <span>Да възпитава и подпомага разпространението на знания, образование и информация.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">12.</span>
                  <span>Да популяризира опита на други местни и чуждестранни организации със сходни дейности и да си сътрудничи с тях при решаване на общи проблеми.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">13.</span>
                  <span>Да посредничи между различни държавни и общински органи, неправителствени организации, физически и юридически лица и да координира техните усилия за решаване на сходни правни въпроси.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">14.</span>
                  <span>Да организира дейности или инициативи, чрез които да повиши правната култура и правната информираност на обществото.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-secondary font-bold">15.</span>
                  <span>Да създаде условия за насърчаване на интелектуалния потенциал на юристите и професионалисти от различни сфери.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
