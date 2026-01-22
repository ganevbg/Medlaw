import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = await prisma.post.findUnique({ where: { slug } })
    if (!post || !post.published) return notFound()

    return (
        <div className="min-h-screen bg-background">
            {/* Header spacing */}
            <div className="h-20" />

            {/* Back button */}
            <div className="border-b border-border/40 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/blogs">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Обратно към публикациите
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Article */}
            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mx-auto max-w-3xl">
                    {/* Title section */}
                    <header className="mb-12 space-y-6">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>
                        )}

                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/40">
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

                            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>адв. [Вашето име]</span>
              </div> */}
                        </div>
                    </header>

                    {/* Article content */}
                    <div
                        className="prose prose-slate prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-primary prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-foreground prose-li:my-2
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-6
              prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg prose-pre:my-6
              prose-hr:border-border prose-hr:my-12"
                        dangerouslySetInnerHTML={{ __html: post.contentMd }}
                    />
                </div>
            </article>

            {/* CTA section */}
            <section className="border-t border-border/40 bg-muted/30 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link href="/#contact">
                                <Button size="lg" className="gap-2">
                                    Направи запитване
                                </Button>
                            </Link>
                            <Link href="/blogs">
                                <Button size="lg" variant="outline">
                                    Прочетете още публикации
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
