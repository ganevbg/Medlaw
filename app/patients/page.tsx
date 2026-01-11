import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Heart, FileText, Phone, Clock, AlertTriangle, Stethoscope } from "lucide-react"

export default function PatientsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight text-balance">
              Правна защита при медицински спорове
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Специализирана помощ за пациенти и техни семейства при сложни медицински случаи, неблагоприятни изходи и
              медицински грешки. Защита на Вашите права с разбиране и експертност.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                <a href="#help">Как мога да помогна</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Безплатна първична консултация</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Кога да потърсите правна помощ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ако сте изправени пред някоя от тези ситуации, имате право на професионална правна защита.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Неблагоприятен изход от лечение</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Влошаване на състоянието, неочаквани усложнения или трайни увреждания след медицинска намеса, които
                  могат да са избегнати.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Съмнения за медицинска грешка</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Погрешна диагноза, закъснение в диагностицирането, грешки при операция или неправилно лечение, които
                  са довели до вреди.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Липса на информирано съгласие</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Не сте били информирани адекватно за рисковете на процедурата или не сте давали съгласие за извършени
                  манипулации.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-background border-2 border-primary/20 rounded-lg p-8">
            <div className="flex gap-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Вашето здраве и права са важни</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Разбирам, че периодът след медицински проблем е изключително труден за Вас и Вашето семейство. Работя
                  с емпатия, дискретност и професионализъм, за да получите справедливост и обезщетение за претърпените
                  вреди.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can I Help Section */}
      <section id="help" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Как мога да Ви помогна</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Пълна правна подкрепа от анализ на случая до получаване на обезщетение.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Анализ и оценка на случая</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Безплатна първична консултация за оценка на случая</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Събиране и анализ на медицинска документация</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Консултации с независими медицински експерти</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Реалистична оценка на шансовете и очакваните обезщетения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Правна защита и представителство</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Изготвяне на искови молби и процесуални документи</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Пълно представителство пред съд и досъдебни органи</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Участие в съдебно-медицински експертизи</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Защита на интересите Ви на всеки етап от процеса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Преговори и споразумения</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Водене на преговори със застрахователни компании</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Постигане на извънсъдебни споразумения при възможност</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Оптимизиране на сроковете и разходите</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Подкрепа и съпровождане</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Разбиране и емпатия към емоционалното Ви състояние</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Редовна комуникация и информиране за хода на делото</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Достъпност и бързи отговори на Вашите въпроси</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Как протича процесът</h2>
              <p className="text-lg text-muted-foreground">
                Ясна и прозрачна стъпка по стъпка подкрепа от първата консултация до финалното решение.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">Първична консултация (безплатна)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Разговор за случая, преглед на документи и първоначална оценка на правните възможности. Без
                    ангажимент от Ваша страна.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">Анализ и стратегия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Задълбочен анализ на медицинската документация, консултации с експерти и изготвяне на правна
                    стратегия с реалистични очаквания.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">Досъдебна фаза</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Преговори със застрахователи и медицинската институция. При възможност се стремим към бързо и
                    справедливо извънсъдебно решение.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">Съдебно производство (ако е необходимо)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Изготвяне на искова молба, събиране на доказателства, участие в съдебни заседания и експертизи.
                    Пълна защита на Вашите интереси.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-2">Изпълнение на решението</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Съдействие при получаване на присъдените обезщетения и следене изпълнението на съдебното решение.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
              <div className="flex gap-4 items-start">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Важно за сроковете</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Исковете за медицински грешки имат давностни срокове. Колкото по-рано потърсите правна помощ,
                    толкова по-добре можем да защитим правата Ви. Не чакайте - свържете се за консултация днес.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Защо да ми се доверите</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Специализация в медицинското право</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Над 15 години опит в правни казуси, свързани със здравеопазването. Познавам медицинските процедури,
                    стандарти и как да докажа нарушения.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Достъп до медицински експерти</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работя с мрежа от независими и авторитетни медицински експерти, които могат да предоставят обективни
                    становища за подкрепа на Вашия случай.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Индивидуален и човешки подход</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Разбирам, че всеки случай е уникален и емоционално натоварващ. Работя с емпатия, търпение и уважение
                    към Вашата ситуация.
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
                  <h3 className="text-xl font-bold text-foreground mb-2">Прозрачност и комуникация</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Винаги ще знаете какво се случва с Вашето дело. Ясна комуникация за очакваните резултати, срокове и
                    разходи. Без скрити такси или обещания.
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Не оставайте сами с Вашия медицински спор</h2>
            <p className="text-lg opacity-90">
              Първата консултация е безплатна и без ангажимент. Свържете се днес, за да обсъдим как мога да Ви помогна.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <a href="#contact">Безплатна консултация</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Обадете се сега
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
