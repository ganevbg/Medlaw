import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight text-balance">
              Експертна правна защита в медицината и науката.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Над 15 години опит в болничния мениджмънт, академичните процедури и съдебната практика по медицински
              деликти.
            </p>
            <div>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-base" asChild>
                <a href="#services">
                  Започнете оттук – Изберете Вашия казус
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img src="/professional-attorney-in-modern-office.jpg" alt="Професионална среда" className="w-full h-full object-cover" />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Години опит в медицинското право</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
