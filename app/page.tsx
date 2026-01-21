import HeroSection from "@/components/hero-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
     
      {/*<BlogSection />*/}
      <ContactSection />
    </main>
  )
}
