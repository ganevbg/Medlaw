import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, FileCheck, GraduationCap, AlertCircle, Scale } from "lucide-react"

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight text-balance">
              Правна защита за лекари и преподаватели
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Експертна защита на Вашата кариера и репутация. Съдействие при академични конкурси, защита при претенции
              за медицински грешки и правна превенция.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                <a href="#services">Вижте услугите</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Консултация</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Предизвикателствата, пред които сте изправени
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Разбираме спецификата на медицинската и академичната среда и сложността на правните въпроси.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Обвинения в медицински грешки</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Претенции от пациенти или техни близки, дори когато сте действали по протокол и добросъвестно.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Академични конкурси</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Сложни процедури по ЗРАСРБ за придобиване на научни звания (доцент, професор) с множество формални
                  изисквания.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Репутационни рискове</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Публични обвинения, медийно отразяване и заплахи към професионалната репутация, която сте изграждали
                  години.
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
              Как Ви защитавам и подкрепям
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексни правни услуги, адаптирани към нуждите на медицинските и академични специалисти.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Scale className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Защита при претенции за медицински грешки</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Анализ на медицинската документация и експертни заключения</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Процесуална защита пред съд и досъдебни производства</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Управление на репутационни рискове и медийна комуникация</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Координация с медицински експерти и изготвяне на становища</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Съдействие при академични конкурси</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултации при подготовка на документи по ЗРАСРБ</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Правна оценка на конкурсни процедури за доцент/професор</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Защита при оспорване на академични решения</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Представителство пред академични съвети и комисии</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Трудово-правни въпроси</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Преглед и договаряне на трудови договори с болници и университети</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Защита при дисциплинарни производства</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултации при уволнение или промени в условията на труд</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Превантивни правни консултации</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Обучения за управление на правни рискове в медицинската практика</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Одит на медицинска документация и процедури</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Разработване на протоколи за съгласие и комуникация с пациенти</span>
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
                Защо лекарите и преподавателите ми се доверяват
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Дълбоко разбиране на медицинската среда</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Над 15 години опит в болничния мениджмънт и правни консултации на медицински институции. Познавам от
                    практиката как работи системата, какви са протоколите и как да защитя Вашите действия.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Експертиза в академичното право</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Специализирани познания по ЗРАСРБ и практиката на Висшата атестационна комисия. Съдействие на
                    десетки преподаватели при конкурси за научни степени и звания.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Дискретност и защита на репутацията</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Разбирам, че Вашата професионална репутация е изключително важна. Работя с максимална
                    конфиденциалност и стратегия за защита на публичния образ при необходимост.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Мрежа от медицински експерти</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    При необходимост работя с доказани медицински експерти, които могат да изготвят обективни становища
                    и да подкрепят Вашата защита с професионални аргументи.
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
              Защитете Вашата кариера и репутация професионално
            </h2>
            <p className="text-lg opacity-90">
              Свържете се за конфиденциална консултация. Ще обсъдим ситуацията и възможностите за защита.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <a href="#contact">Запишете консултация сега</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
