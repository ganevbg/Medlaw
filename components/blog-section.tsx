import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { prisma } from "@/src/lib/prisma"

export default async function BlogSection() {
  const articles = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
    select: {
      slug: true,
      title: true,
      excerpt: true,
      createdAt: true,
    },
  })

  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Позиции и публикации</h2>
          <p className="text-lg text-muted-foreground">
            Експертни публикации по актуални юридически теми във висшето медицинско образование.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.slug} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(article.createdAt).toLocaleDateString("bg-BG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">{article.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt || "Прочетете пълната публикаця за повече информация."}
                </p>
                <Link href={`/blogs/${article.slug}`} className="inline-block">
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Прочетете повече →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blogs">
            <Button variant="outline" size="lg">
              Виж всички публикации
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
