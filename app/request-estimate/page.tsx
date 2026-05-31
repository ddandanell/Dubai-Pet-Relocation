import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { QuoteFormSection } from "@/components/quote-form-section"
import { Section, CheckList } from "@/components/page-blocks"

export const metadata: Metadata = {
  title: "Request a Free Pet Travel Estimate | Pet Relocation Dubai",
  description:
    "Get a free, no-obligation estimate for relocating your dog or cat to or from Dubai. Tell us your route and timeline and receive a clear, itemised quote — usually within one business day.",
}

export default function RequestEstimatePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Request Estimate"
          title="Get a free, no-obligation estimate"
          description="Answer a few quick questions about your pet and your move. We'll reply with a clear, itemised estimate — no hidden fees, no pressure, usually within one business day."
          breadcrumb="Request Estimate"
        />

        <QuoteFormSection />

        <Section alt title="What your estimate includes">
          <CheckList
            columns={2}
            items={[
              "A line-by-line breakdown of every cost",
              "The exact documents and permits your route needs",
              "A realistic timeline from today to arrival",
              "Travel kennel sizing for your pet",
              "Airline and routing recommendations",
              "Clearly flagged optional add-ons",
            ]}
          />
        </Section>
      </main>
      <Footer />
    </>
  )
}
