import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, StatStrip, FeatureCards } from "@/components/page-blocks"
import { Heart, Eye, ShieldCheck, Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Pet Relocation Dubai",
  description:
    "Pet Relocation Dubai is a team of pet-travel specialists who make moving dogs and cats into and out of the UAE safe, simple, and transparent — with honest pricing and 24/7 support.",
}

const values = [
  { icon: Heart, title: "Pets first, always", body: "Every decision is measured against one question: is this safest and least stressful for the animal?" },
  { icon: Eye, title: "Radical transparency", body: "Itemised quotes, plain-English timelines, and honest advice — even when it means telling you to wait or spend less." },
  { icon: ShieldCheck, title: "Done properly", body: "We follow IATA standards and each country's rules exactly, so your pet travels legally and arrives without delay." },
  { icon: Compass, title: "We own the journey", body: "One coordinator manages your move end to end, so you never have to chase airlines, vets, or government offices." },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="We help families stay together — across borders"
          description="Pet Relocation Dubai exists because moving a pet shouldn't mean leaving one behind. We turn a confusing, high-stakes process into a calm, well-managed journey for dogs, cats, and the people who love them."
        />

        <Section title="Our story">
          <P>
            We started after seeing too many families overwhelmed by the cost, paperwork, and risk of moving a pet to or
            from Dubai — and too many pets put in danger by people who cut corners. We knew it could be done better:
            safer, clearer, and without the hidden fees that plague the industry.
          </P>
          <P>
            Today we coordinate relocations between the UAE and dozens of countries, handling everything from a single
            health certificate to complete door-to-door moves. The constant across all of them is care: for the animal,
            and for the family trusting us with them.
          </P>
          <div className="mt-8">
            <StatStrip
              stats={[
                { value: "500+", label: "Pets relocated safely" },
                { value: "40+", label: "Countries served" },
                { value: "4.9★", label: "Average client rating" },
                { value: "24/7", label: "Support on travel days" },
              ]}
            />
          </div>
        </Section>

        <Section alt title="What we stand for">
          <FeatureCards columns={2} items={values} />
        </Section>

        <Section title="How we work">
          <P>
            We're deliberately hands-on. When you work with us you get a named coordinator who knows your pet's case, a
            transparent quote you can actually understand, and a single point of contact from your first question to the
            moment your pet arrives home. No call-centre handoffs, no surprise invoices, no jargon.
          </P>
          <P>
            And if we're not the right fit for your move — too far out, or simpler than you feared — we'll tell you that
            too. Honest advice is the whole point.
          </P>
        </Section>

        <PageCTA
          title="Let's get your pet home"
          description="Wherever you're moving to or from, we'll make the journey safe, simple, and transparent. Start with a free estimate."
        />
      </main>
      <Footer />
    </>
  )
}
