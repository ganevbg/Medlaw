import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, FileCheck, Building2, Users, Scale, BarChart3, FileText } from "lucide-react"

export default function HospitalsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight text-balance">
              Правна подкрепа за медицински институции
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Комплексни правни услуги за болници, клиники и медицински центрове. Превенция, защита и съответствие с
              регулациите за безопасна и законосъобразна дейност.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                <a href="#services">Нашите услуги</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Консултация</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Challenges Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Правни предизвикателства на медицинските институции
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Разбираме комплексността на управлението на болница и необходимостта от надеждна правна защита.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Искове от пациенти</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Претенции за неблагоприятни изходи, медицински грешки и обезщетения за вреди, които изискват
                  специализирана защита.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Регулаторно съответствие</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Спазване на ЗЗ, ЗБППМН, GDPR и множество здравни регулации при постоянни промени в законодателството.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Трудови спорове</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Управление на трудови отношения с медицински персонал, дисциплинарни производства и колективни
                  договаряния.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Пълен спектър правни услуги за Вашата институция
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Интегрирани правни решения за защита, превенция и развитие на медицинската практика.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Защита при искове и претенции</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Процесуално представителство при граждански и наказателни дела</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Координация с медицински експерти и застрахователи</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Стратегия за урегулиране на спорове и минимизиране на рискове</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Управление на репутационни кризи и медийна комуникация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Регулаторно съответствие</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Одит на съответствие със ЗЗ, ЗБППМН, GDPR и здравни стандарти</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Разработване на вътрешни политики и процедури</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Обучения на персонал по правни и етични въпроси</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Подготовка за проверки и акредитации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Трудово-правни услуги</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Разработване на трудови договори и вътрешни правилници</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Водене на дисциплинарни производства и процедури по уволнение</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Представителство при трудови спорове и инспекции</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултиране при реструктуриране и оптимизация на персонала</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Договорна работа</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Изготвяне и преглед на договори с НЗОК, застрахователи, доставчици</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Управление на договорни спорове и рекламации</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултиране при концесии и публично-частни партньорства</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Корпоративно управление</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Преобразуване и реорганизация на медицински дружества</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултации при сливания, придобивания и инвестиции</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Корпоративно управление и съответствие</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Превантивни програми</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Изграждане на системи за управление на правни рискове</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Редовни обучения на ръководство и медицински персонал</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Правни бюлетини и актуализации при промени в законодателството</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Защо медицинските институции ни избират
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Над 15 години опит в здравния сектор</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Дългогодишна практика в болничния мениджмънт и правни консултации на държавни и частни медицински
                    институции. Познаваме спецификата на сектора отвътре.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Комплексни правни решения</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Покриваме всички правни аспекти на болничната дейност - от защита при искове до регулаторно
                    съответствие и корпоративно управление. Един правен партньор за всички нужди.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Превантивен подход</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Не просто решаваме проблеми, но изграждаме системи за предотвратяване на правни рискове. Редовни
                    одити, обучения и актуализации за спокойствие и сигурност.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Гъвкави формати на сътрудничество</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Предлагаме както проектна работа при конкретни казуси, така и постоянно правно обслужване чрез
                    абонаментни програми, адаптирани към Вашите нужди и бюджет.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Защитете Вашата институция с надежден правен партньор
            </h2>
            <p className="text-lg opacity-90">
              Свържете се за оценка на правните рискове и персонализирано предложение за сътрудничество.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <a href="#contact">Заявете консултация</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
