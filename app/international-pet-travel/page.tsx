import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, Steps, CheckList, Callout, StatStrip } from "@/components/page-blocks"

export const metadata: Metadata = {
  title: "International Pet Travel from Dubai | Pet Relocation Dubai",
  description:
    "Door-to-door international pet relocation to and from the UAE. Import/export permits, rabies titre testing, health certificates, airline booking, and customs clearance for dogs and cats.",
}

export default function InternationalPetTravelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="International Pet Travel"
          title="Relocating your pet to or from another country"
          description="International moves involve permits, vaccinations, titre tests, airline rules, and customs — each with strict timing. We manage the entire chain so your pet arrives safely and legally, without last-minute surprises."
        />

        <Section title="Why international relocation needs an expert">
          <P>
            Every country sets its own import rules, and they change. A single missed titre test, an expired certificate,
            or the wrong crate size can delay travel by weeks or trigger quarantine. We plan backwards from your arrival
            date so each step happens in the right order, on time.
          </P>
          <div className="mt-8">
            <StatStrip
              stats={[
                { value: "500+", label: "Pets relocated safely" },
                { value: "40+", label: "Destination countries" },
                { value: "1–6 mo", label: "Typical lead time" },
                { value: "24/7", label: "Travel-day support" },
              ]}
            />
          </div>
        </Section>

        <Section alt title="The international relocation timeline">
          <Steps
            steps={[
              { title: "Route & eligibility assessment", body: "We confirm your destination's exact import rules and build a country-specific checklist and timeline." },
              { title: "Microchip & vaccinations", body: "An ISO microchip is verified or implanted, and rabies and other required vaccines are scheduled in the correct sequence." },
              { title: "Rabies titre (blood) test", body: "Where required, blood is drawn and sent to an approved lab. Some countries enforce a waiting period after a passing result." },
              { title: "Permits & health certificate", body: "We file import/export permits and arrange the government-endorsed health certificate within its strict validity window." },
              { title: "Flight, crate & customs", body: "We book the airline, supply an IATA-compliant kennel, handle airport check-in, and clear customs at arrival." },
              { title: "Arrival & delivery", body: "Your pet is collected on arrival, cleared, and delivered to your new home — with us reachable throughout." },
            ]}
          />
        </Section>

        <Section title="Common destinations we handle">
          <CheckList
            columns={2}
            items={[
              "United Kingdom & Ireland",
              "European Union (Germany, France, Netherlands, Denmark, and more)",
              "United States & Canada",
              "Australia & New Zealand (extended quarantine routes)",
              "Singapore, Japan & South Korea",
              "GCC & wider Middle East",
            ]}
          />
        </Section>

        <Section alt>
          <Callout tone="warning" title="Some routes need 6 months of lead time">
            Rabies-free destinations such as Australia, New Zealand, Singapore, and Japan enforce long waiting periods
            after titre testing. The earlier you start, the cheaper and calmer the move. If you have a deadline, contact
            us before booking anything.
          </Callout>
        </Section>

        <PageCTA
          title="Plan your international move"
          description="Send us your origin, destination, and ideal travel date. We'll reply with a country-specific timeline and a transparent, itemised estimate."
        />
      </main>
      <Footer />
    </>
  )
}
