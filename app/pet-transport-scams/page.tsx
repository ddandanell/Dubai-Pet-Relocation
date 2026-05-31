import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { PageCTA } from "@/components/page-cta"
import { Section, P, CheckList, Callout, FeatureCards } from "@/components/page-blocks"
import { BadgeDollarSign, MailWarning, FileQuestion, Clock3 } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Avoid Pet Transport Scams | Pet Relocation Dubai",
  description:
    "Pet shipping and 'free pet' adoption scams are common. Learn the warning signs of fraudulent pet transporters, how to verify a real provider, and how to protect yourself and your money.",
}

const redFlags = [
  { icon: BadgeDollarSign, title: "Upfront wire transfers", body: "Scammers demand full payment by wire, crypto, or gift cards before any service — then invent new 'fees' to extract more." },
  { icon: FileQuestion, title: "No real business details", body: "No physical address, no licence, no verifiable reviews, and a website created only weeks ago are major warning signs." },
  { icon: MailWarning, title: "Pressure and emotion", body: "Fake urgency ('your pet is in distress, pay now') is designed to stop you thinking clearly. Real providers don't operate this way." },
  { icon: Clock3, title: "Surprise 'emergency' fees", body: "Sudden charges for insurance, a 'special crate', vaccines, or customs after you've paid are a classic escalation scam." },
]

export default function PetTransportScamsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Stay Safe"
          title="How to avoid pet transport scams"
          description="Two scams are especially common: fake pet shippers who take your money and disappear, and 'free pet' adoption fraud where a non-existent animal needs 'shipping fees'. Here's how to spot and avoid them."
        />

        <Section title="The most common warning signs">
          <FeatureCards columns={2} items={redFlags} />
        </Section>

        <Section alt title="The two scams to watch for">
          <P>
            <strong className="text-foreground">Fake pet shippers</strong> advertise unrealistically low relocation
            prices, then demand escalating wire payments for invented problems — a stuck crate, emergency insurance, extra
            customs fees — until you stop paying.
          </P>
          <P>
            <strong className="text-foreground">"Free pet" adoption scams</strong> offer an adorable puppy or kitten for
            free, asking only that you cover "shipping". The animal doesn't exist; the fees are the entire scheme.
          </P>
          <Callout tone="warning" title="If money is requested by wire, crypto, or gift card — stop.">
            Legitimate relocation companies invoice properly, accept traceable payment, and never rely on untraceable
            transfers or emotional pressure to rush you.
          </Callout>
        </Section>

        <Section title="How to verify a real provider">
          <CheckList
            columns={2}
            items={[
              "A registered business with a verifiable physical address",
              "Independent reviews on Google and Trustpilot over time",
              "A clear, itemised quote — not one vague lump sum",
              "Willingness to answer detailed questions by phone or video",
              "Membership of industry bodies such as IPATA where applicable",
              "Traceable, invoiced payment methods",
              "No demand for full payment by wire before any work begins",
              "Honest timelines — including when a move genuinely takes months",
            ]}
          />
        </Section>

        <Section alt>
          <Callout tone="info" title="Already received a quote you're unsure about?">
            Send it to us. As part of our quote-review service we'll give you an honest second opinion — flagging missing
            services, unrealistic pricing, and anything that looks like a scam — with no obligation to book with us.
          </Callout>
        </Section>

        <PageCTA
          title="Want a second opinion on a quote?"
          description="Forward us any pet transport quote and we'll tell you honestly whether it's fair, complete, and safe."
          primaryLabel="Get a Free Quote Review"
          secondaryLabel="Ask on WhatsApp"
        />
      </main>
      <Footer />
    </>
  )
}
