import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { Features } from "@/components/features"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <LogoCloud />
      <Features />
      <CTASection />
      <SiteFooter />
    </main>
  )
}
