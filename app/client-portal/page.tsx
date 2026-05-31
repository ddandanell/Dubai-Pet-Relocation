import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ClientPortalLogin } from "@/components/client-portal-login"
import { Section } from "@/components/page-blocks"
import { FileText, MessageSquare, MapPinned, CalendarCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Portal | Pet Relocation Dubai",
  description:
    "Sign in to the Pet Relocation Dubai client portal to track your pet's relocation status, view and upload documents, and message your dedicated coordinator.",
}

const features = [
  { icon: MapPinned, title: "Live journey tracking", body: "See exactly where your pet is in the process — from documents to delivery." },
  { icon: FileText, title: "Document vault", body: "View, download, and upload permits, certificates, and vet records in one place." },
  { icon: MessageSquare, title: "Direct messaging", body: "Reach your dedicated coordinator without chasing emails or phone lines." },
  { icon: CalendarCheck, title: "Milestone reminders", body: "Get notified before vet visits, titre tests, and travel dates so nothing slips." },
]

export default function ClientPortalPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Client Portal"
          title="Your relocation, all in one place"
          description="Existing clients can sign in to track progress, manage documents, and stay in direct contact with their coordinator throughout the move."
          breadcrumb="Client Portal"
        />

        <Section>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What's inside the portal</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Once your relocation is booked, you get a secure account so you always know what's happening and what
                comes next — no guesswork, no waiting for an update.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map(({ icon: Icon, title, body }) => (
                  <div key={title}>
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:max-w-md w-full lg:justify-self-end">
              <ClientPortalLogin />
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Not a client yet?{" "}
                <a href="/request-estimate" className="text-accent font-medium underline underline-offset-2">
                  Request a free estimate
                </a>{" "}
                to get started.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
