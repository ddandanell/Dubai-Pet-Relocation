import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, FeatureCards, CheckList } from "@/components/page-blocks"
import { Plane, Home, FileText, Stethoscope, Package, ShieldCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pet Travel Services | Pet Relocation Dubai",
  description:
    "Full-service pet travel from Dubai and the UAE — door-to-door international relocation, domestic transport, documentation, vet coordination, IATA travel kennels, and airport handling for dogs and cats.",
}

const services = [
  { icon: Plane, title: "International Pet Travel", body: "Door-to-door relocation between the UAE and the rest of the world — permits, airlines, customs, and arrival handling managed end to end." },
  { icon: Home, title: "Domestic Pet Travel", body: "Safe ground and air transport within the UAE and the GCC, including Abu Dhabi, Sharjah, and cross-emirate moves." },
  { icon: FileText, title: "Documentation & Permits", body: "Import/export permits, health certificates, microchip and vaccine compliance, and titre-test scheduling handled correctly the first time." },
  { icon: Stethoscope, title: "Veterinary Coordination", body: "We schedule and sequence every required vet visit, vaccination, and certificate so nothing expires before travel." },
  { icon: Package, title: "IATA Travel Kennels", body: "Correctly sized, airline-compliant crates with acclimatisation guidance so your pet flies comfortably and legally." },
  { icon: ShieldCheck, title: "Quote Review", body: "Already have a quote elsewhere? We give an honest second opinion to spot missing services, risks, and inflated pricing." },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Pet Travel Services"
          title="Everything your pet needs to travel safely"
          description="From a single document review to complete door-to-door relocation, we handle the parts that are complex, stressful, or easy to get wrong — so your pet arrives safe and on schedule."
        />

        <Section
          title="Choose the level of support you need"
          intro="Every relocation is different. Some clients want us to handle everything; others manage parts themselves to reduce cost. We support both — with the same standard of care."
        >
          <FeatureCards items={services} />
        </Section>

        <Section alt title="What's included in a full relocation">
          <P>
            Our door-to-door service is built so you never have to coordinate airlines, vets, and government offices
            yourself. We own the timeline and keep you updated at every milestone.
          </P>
          <CheckList
            columns={2}
            items={[
              "Eligibility & route assessment for your destination",
              "Import and export permit applications",
              "Microchip verification and vaccination scheduling",
              "Rabies titre testing where required",
              "Government-endorsed health certificates",
              "IATA-compliant travel kennel sizing and supply",
              "Airline booking and cargo/manifest handling",
              "Airport check-in and customs clearance",
              "Home pickup and final delivery",
              "24/7 support before, during, and after travel",
            ]}
          />
        </Section>

        <Section>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/domestic-pet-travel"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                Domestic Pet Travel <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-muted-foreground">Moving within the UAE or the GCC region.</p>
            </Link>
            <Link
              href="/international-pet-travel"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/60 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                International Pet Travel <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-sm text-muted-foreground">Relocating to or from another country.</p>
            </Link>
          </div>
        </Section>

        <PageCTA />
      </main>
      <Footer />
    </>
  )
}
