import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Users, Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Членство | СЮВМО",
  description: "Информация за членство в Сдружение на юристите във висшето медицинско образование",
}

export default function MembershipPage() {
  const memberRights = [
    "Да участва в дейността на сдружението и в работата на Общото събрание",
    "Да бъде избиран в неговите органи на управление",
    "Да осъществява контрол върху работата на сдружението и органите на управление",
    "Да бъде информиран за дейността на сдружението",
    "Да се ползва от имуществото на сдружението и от резултатите от дейността му",
  ]

  const memberDuties = [
    "Да внася ежегодно членския си внос",
    "Да спазва Устава на сдружението и да работи за постигане на неговите цели",
    "Да работи за издигане на неговия обществен авторитет и целесъобразно разходване на имуществото му",
  ]

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance mb-6">
              Членство
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Членуването в сдружението е доброволно. Членове могат да бъдат физически и юридически лица.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Be a Member */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              Кой може да бъде член?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">Физически лица</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Член на сдружението може да бъде всяко дееспособно физическо лице с юридическо образование, което споделя целите на сдружението и средствата за тяхното постигане, изпълнява неговия устав и плаща редовно членския си внос.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">Юридически лица</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Член на сдружението може да бъде юридическо лице, което споделя целите на сдружението и средствата за тяхното постигане, изпълнява неговия устав и плаща редовно членския си внос.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rights and Duties */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Rights */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8">
                  Права на членовете
                </h2>
                <ul className="space-y-4">
                  {memberRights.map((right, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-muted-foreground">{right}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Duties */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8">
                  Задължения на членовете
                </h2>
                <ul className="space-y-4">
                  {memberDuties.map((duty, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-secondary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
              Придобиване на членство
            </h2>
            
            <Card className="border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-primary">Процедура за кандидатстване</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Членовете на сдружението се приемат от Общото събрание. Кандидатите отправят писмена молба до Управителния съвет, придружена с писмена препоръка от поне един член на сдружението.
                </p>
                <p className="leading-relaxed">
                  Кандидатите прилагат към молбата и декларация, в която декларират, че приемат Устава на сдружението и посочват точния си адрес, факс и адрес на електронна поща за изпращане на покана за свикване на Общо събрание на сдружението, като конкретизират предпочитания начин за получаване на покана.
                </p>
                <p className="leading-relaxed">
                  Кандидатите юридически лица представят с молбата преписи от документите си за регистрация от решението на управителните си органи за членство в сдружението.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mt-6">
                  <p className="font-medium text-foreground mb-2">Важно:</p>
                  <p className="text-sm">
                    При депозиране на молба за членство в сдружението Управителният съвет е длъжен незабавно да свика Общото събрание по предвидения в закона и настоящия Устав ред. Приемането на членовете се извършва с явно гласуване и с пълно единодушие.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Прекратяване на членството
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">Членството се прекратява:</p>
              <ul className="space-y-3 list-decimal list-inside">
                <li>С едностранно писмено волеизявление до сдружението, отправено до Управителния съвет на сдружението</li>
                <li>С изключване, по реда на настоящия устав</li>
                <li>Закриване на юридическото лице - член на сдружението</li>
              </ul>
              <p className="leading-relaxed mt-6">
                При прекратяване на членството, имуществените отношения между бившия член или правоприемниците му и сдружението се уреждат след приемане на годишния финансов отчет от общото събрание. В случай на непогасени задължения на бившия член към сдружението се извършва прихващане от вземанията му от сдружението.
              </p>
              <p className="leading-relaxed">
                Решението за изключване се взема от Управителния съвет на Сдружението при наличието на виновно поведение, което прави по-нататъшното членство несъвместимо. Решението за изключване може да се обжалва пред Общото събрание на сдружението.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Искате да станете член?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Свържете се с нас за повече информация относно процедурата за членство.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/#contact">
                Свържете се с нас
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
