import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ProblemSection } from "@/components/problem-section"
import { WhyUsSection } from "@/components/why-us-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { QuoteFormSection } from "@/components/quote-form-section"
import { SecondOpinionSection } from "@/components/second-opinion-section"
import { B2BSection } from "@/components/b2b-section"
import { TeamSection } from "@/components/team-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ReviewsSection />
        <ProblemSection />
        <WhyUsSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <PricingSection />
        <QuoteFormSection />
        <section id="second-opinion">
          <SecondOpinionSection />
        </section>
        <section id="b2b">
          <B2BSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
