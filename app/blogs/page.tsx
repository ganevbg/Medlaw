import { prisma } from "@/src/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
              Анализи и коментари
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Експертни статии по актуални теми в медицинското и академичното право, съдебна практика и правни анализи.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">Все още няма публикувани статии.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-border/60">
                  <CardContent className="p-6 space-y-5 h-full flex flex-col">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.createdAt.toISOString()}>
                        {new Intl.DateTimeFormat("bg-BG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }).format(post.createdAt)}
                      </time>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-muted-foreground leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    )}

                    {/* Read More Link */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                    >
                      Прочетете повече
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Имате правен въпрос?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Свържете се с мен за професионална консултация по вашия случай в областта на медицинското и академичното
              право.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/#contact">
                  Запишете консултация
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
