import HeroSection from "@/components/hero-section"
import SpecializationsSection from "@/components/specializations-section"
import WhyChooseSection from "@/components/why-choose-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SpecializationsSection />
      <WhyChooseSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
