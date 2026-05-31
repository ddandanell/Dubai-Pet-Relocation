import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, CheckList, Steps, Callout, FeatureCards } from "@/components/page-blocks"
import { Clock, FileCheck, Wallet, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Military & Diplomatic Pet Relocation | Pet Relocation Dubai",
  description:
    "Pet relocation support for military families, diplomats, and government personnel posted to or from the UAE. Fast-turnaround documentation, PCS-friendly timelines, and flexible coordination.",
}

const support = [
  { icon: Clock, title: "Short-notice moves", body: "PCS and posting orders rarely come with much warning. We compress timelines safely and prioritise time-critical steps." },
  { icon: FileCheck, title: "Orders-friendly paperwork", body: "We work around deployment dates, base requirements, and consular processes, and can liaise with relocation offices." },
  { icon: Wallet, title: "Transparent, itemised pricing", body: "Clear quotes you can submit for reimbursement, with no vague bundles or surprise fees." },
  { icon: Headphones, title: "Single point of contact", body: "One coordinator owns your case end to end, so you're never re-explaining your situation." },
]

export default function MilitaryPetRelocationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Military & Diplomatic"
          title="Pet relocation for military and government families"
          description="Postings move fast and families shouldn't have to leave a pet behind. We specialise in time-sensitive, orders-driven relocations for service members, diplomats, and government personnel moving to or from the UAE."
        />

        <Section title="Built around the realities of a posting">
          <P>
            A PCS or diplomatic reassignment compresses everything: documentation, vet visits, titre-test waiting periods,
            and flights all have to line up against a fixed report date. We've handled these moves before and know where
            time can safely be saved — and where it can't.
          </P>
          <FeatureCards columns={2} items={support} />
        </Section>

        <Section alt title="How we handle a military or diplomatic move">
          <Steps
            steps={[
              { title: "Share your orders & dates", body: "Give us your report/return date and current location. We immediately flag any step with a long lead time." },
              { title: "Priority eligibility check", body: "We confirm destination import rules and identify the critical path to your deadline." },
              { title: "Accelerated coordination", body: "Vet appointments, permits, and titre tests are scheduled in the tightest safe sequence." },
              { title: "Travel & arrival handling", body: "We book the flight, handle the airport and customs, and deliver your pet at the destination." },
            ]}
          />
        </Section>

        <Section title="Helpful resources for relocating families">
          <CheckList
            columns={2}
            items={[
              "Country-by-country import requirement checklists",
              "Rabies titre-test timing and waiting periods",
              "IATA travel kennel sizing guidance",
              "Documentation suitable for reimbursement claims",
              "Guidance on flying pets in extreme heat",
              "Support for onward moves after a posting ends",
            ]}
          />
        </Section>

        <Section alt>
          <Callout tone="warning" title="Posted to a rabies-free country?">
            Destinations like Australia, New Zealand, Singapore, and Japan can require months of advance preparation. If
            your orders send you to one of these, contact us the moment you know — even before the move is confirmed.
          </Callout>
        </Section>

        <PageCTA
          title="On orders? Let's move fast."
          description="Send us your report date and locations. We'll tell you honestly whether your timeline is achievable and exactly what it takes."
        />
      </main>
      <Footer />
    </>
  )
}
