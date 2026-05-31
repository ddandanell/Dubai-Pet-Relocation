import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, FeatureCards, Callout } from "@/components/page-blocks"
import { FileText, Syringe, Plane, Package, ShieldAlert, Globe, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pet Travel Resources | Pet Relocation Dubai",
  description:
    "Free guides on pet travel from Dubai — documentation, vaccinations and titre testing, airline rules, IATA travel kennels, avoiding pet transport scams, and country import requirements.",
}

const topics = [
  { icon: FileText, title: "Documentation & permits", body: "What import/export permits, health certificates, and microchip records you need — and how long each stays valid." },
  { icon: Syringe, title: "Vaccinations & titre tests", body: "How rabies vaccination and titre (blood) testing work, and the waiting periods certain countries enforce." },
  { icon: Plane, title: "Flying with pets", body: "In-cabin vs. checked vs. cargo, breed restrictions, and how airlines handle pets in heat and on long-haul routes." },
  { icon: Package, title: "Travel kennels", body: "How to choose an IATA-compliant crate and help your pet feel comfortable inside it before travel day." },
  { icon: ShieldAlert, title: "Avoiding scams", body: "The warning signs of fake pet shippers and fraudulent 'free pet' adoption schemes — and how to verify a real provider." },
  { icon: Globe, title: "Country requirements", body: "Destination-specific rules for the EU, UK, US, Australia, Singapore, and more, including long-lead-time routes." },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pet Travel Resources"
          title="Plain-English guides to moving your pet"
          description="Pet relocation is full of rules, timelines, and jargon. These guides break it down so you understand what's involved before you commit to anything."
        />

        <Section title="Browse by topic" intro="Start with the area you're least sure about — or read them in order if you're at the very beginning of planning a move.">
          <FeatureCards items={topics} />
        </Section>

        <Section alt>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: "/travel-kennels", label: "Travel Kennels Guide" },
              { href: "/pet-transport-scams", label: "Pet Transport Scams" },
              { href: "/military-pet-relocation", label: "Military Pet Relocation" },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-2xl border border-border bg-card p-5 flex items-center justify-between hover:border-accent/60 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <P>
            Rules change often and vary by airline, country, and even season. These resources are a starting point, not a
            substitute for route-specific advice. When you're ready, we'll confirm exactly what your move requires.
          </P>
          <Callout tone="info" title="Not sure where to begin?">
            Send us your origin, destination, and pet details and we'll point you to the right guides — and tell you
            honestly how complex your particular move is likely to be.
          </Callout>
        </Section>

        <PageCTA
          title="Have a question we didn't cover?"
          description="Ask us anything about your pet's journey. Straight answers, no sales pressure."
          primaryLabel="Request a Free Estimate"
          secondaryLabel="Ask on WhatsApp"
        />
      </main>
      <Footer />
    </>
  )
}
