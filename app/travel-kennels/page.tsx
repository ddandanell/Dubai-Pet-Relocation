import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, CheckList, Steps, Callout } from "@/components/page-blocks"

export const metadata: Metadata = {
  title: "IATA Travel Kennels for Pets | Pet Relocation Dubai",
  description:
    "How to choose an IATA-compliant travel kennel for your dog or cat. Correct sizing, ventilation, door and fastener requirements, and acclimatisation tips for safe, legal air travel.",
}

export default function TravelKennelsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Travel Kennels"
          title="Choosing the right travel kennel"
          description="The crate is one of the most important — and most commonly mismeasured — parts of any pet flight. The right IATA-compliant kennel keeps your pet safe, comfortable, and accepted by the airline."
        />

        <Section title="Why the kennel matters so much">
          <P>
            Airlines enforce the IATA Live Animals Regulations strictly. A kennel that's too small, poorly ventilated, or
            missing the right fasteners can be refused at check-in — grounding your pet on travel day. Getting it right in
            advance removes one of the biggest avoidable risks in a relocation.
          </P>
        </Section>

        <Section alt title="How to size a kennel correctly">
          <P>Your pet must be able to stand, turn around, and lie down naturally. To find the right internal dimensions:</P>
          <Steps
            steps={[
              { title: "Measure your pet", body: "Length from nose to base of tail, height from floor to top of head (or ear tip for upright-eared breeds), width across the shoulders, and height at the shoulder." },
              { title: "Calculate the length", body: "Internal length should be roughly the nose-to-tail length plus half the leg length, so your pet can lie comfortably." },
              { title: "Calculate the height", body: "Internal height must clear the top of the head or ears with the pet standing fully upright." },
              { title: "Confirm with us", body: "Send your measurements and we'll confirm the exact IATA size — borderline cases often need the next size up." },
            ]}
          />
        </Section>

        <Section title="What makes a kennel IATA-compliant">
          <CheckList
            columns={2}
            items={[
              "Rigid, hard-sided construction (no collapsible or wire crates for cargo)",
              "Ventilation on all four sides for international travel",
              "A secure, spring-loaded metal door with proper locking pins",
              "Bolted top and bottom halves with metal — not plastic — fasteners",
              "A leak-proof floor with absorbent bedding",
              "Food and water dishes accessible from outside",
              "'Live Animal' labelling and directional arrows",
              "Sized so your pet can stand, turn, and lie down naturally",
            ]}
          />
        </Section>

        <Section alt title="Help your pet love the kennel before travel day">
          <CheckList
            items={[
              "Introduce the kennel weeks early with the door open at home",
              "Add familiar bedding and a favourite toy",
              "Feed meals inside it to build positive associations",
              "Take short practice trips so motion feels normal",
              "Never use it for punishment — it should feel like a safe den",
            ]}
          />
          <div className="mt-8">
            <Callout tone="info" title="We supply and fit kennels for you">
              As part of a relocation we source the correct IATA crate, verify the fit, and prepare it for your specific
              airline — so there's nothing to guess and nothing to get rejected at the airport.
            </Callout>
          </div>
        </Section>

        <PageCTA
          title="Not sure which crate your pet needs?"
          description="Send us your pet's measurements and destination. We'll confirm the right IATA kennel size and handle the rest."
        />
      </main>
      <Footer />
    </>
  )
}
