import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, Steps, CheckList, Callout, FeatureCards } from "@/components/page-blocks"
import { Car, Plane, Thermometer, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Domestic Pet Travel in the UAE | Pet Relocation Dubai",
  description:
    "Safe domestic pet transport across Dubai, Abu Dhabi, Sharjah, and the wider UAE and GCC. Climate-controlled ground transport, in-cabin and cargo flights, and full vet coordination.",
}

const features = [
  { icon: Car, title: "Climate-controlled ground transport", body: "Air-conditioned vehicles with secured crates for cross-emirate and GCC road moves — vital in UAE summer heat." },
  { icon: Plane, title: "Domestic & regional flights", body: "In-cabin, checked, or cargo travel arranged on carriers that accept pets within the region." },
  { icon: Thermometer, title: "Heat-safe scheduling", body: "We plan pickups and airport timing around temperature limits so your pet is never exposed to dangerous heat." },
  { icon: Clock, title: "Same-week availability", body: "Local moves can often be arranged quickly once your pet's basic health records are confirmed." },
]

export default function DomesticPetTravelPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Domestic Pet Travel"
          title="Moving your pet within the UAE or the GCC"
          description="Whether you're relocating across Dubai, moving to Abu Dhabi, or heading to a neighbouring Gulf country, we transport your dog or cat safely, comfortably, and with the heat fully managed."
        />

        <Section title="Local moves, handled with the same care as international ones">
          <P>
            A short distance does not mean a simple journey. UAE temperatures, airline crate rules, and emirate-specific
            requirements all matter. We take the same disciplined approach to a move across town as we do to a flight
            across the world.
          </P>
          <FeatureCards columns={2} items={features} />
        </Section>

        <Section alt title="How a domestic move works">
          <Steps
            steps={[
              { title: "Tell us the route and your pet", body: "Share where you're moving from and to, plus your pet's breed, age, weight, and any health needs." },
              { title: "We confirm requirements", body: "We check whether ground or air transport fits best and whether any health records or vaccinations are needed." },
              { title: "We schedule around the heat", body: "Pickup, transit, and any airport handling are timed to avoid dangerous temperatures." },
              { title: "Door-to-door delivery", body: "Your pet is collected from your home and delivered safely to the new address — or to the airport if you're flying together." },
            ]}
          />
        </Section>

        <Section>
          <Callout tone="info" title="Travelling on with an international leg?">
            Many domestic moves are the first step of a larger relocation. If you'll later fly your pet abroad, we can
            start the permit and vaccination timeline now so nothing has to be rushed or repeated. See our{" "}
            <a href="/international-pet-travel" className="text-accent font-medium underline underline-offset-2">
              international pet travel
            </a>{" "}
            service.
          </Callout>
        </Section>

        <Section alt title="What we'll need from you">
          <CheckList
            columns={2}
            items={[
              "Pickup and delivery addresses",
              "Your pet's breed, age, and weight",
              "Vaccination and microchip records",
              "Any medical conditions or medications",
              "Preferred travel dates",
              "Whether you're travelling with your pet",
            ]}
          />
        </Section>

        <PageCTA
          title="Get a domestic transport estimate"
          description="Tell us your route within the UAE or GCC and we'll send a clear, itemised price with heat-safe scheduling built in."
        />
      </main>
      <Footer />
    </>
  )
}
