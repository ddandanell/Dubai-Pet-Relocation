import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: January 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By using Pet Relocation Dubai services, you agree to these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                Pet Relocation Dubai provides pet transportation and relocation services including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Documentation preparation and permit applications</li>
                <li>Veterinary coordination and health certificate management</li>
                <li>Airline booking and cargo arrangements</li>
                <li>Airport handling and customs clearance</li>
                <li>Door-to-door pickup and delivery</li>
                <li>Consultation and quote review services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a client, you are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Providing accurate information about your pet</li>
                <li>Ensuring your pet is healthy and fit for travel</li>
                <li>Obtaining necessary vaccinations and treatments on time</li>
                <li>Providing appropriate travel crates when required</li>
                <li>Timely payment for services rendered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
              <p className="text-muted-foreground mb-4">
                All quotes provided are estimates based on information available at the time. Final pricing may vary due to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Changes in airline rates or fuel surcharges</li>
                <li>Additional veterinary requirements discovered during the process</li>
                <li>Changes to travel dates or destinations</li>
                <li>Unforeseen regulatory requirements</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                A deposit is required to begin services. Balance is due before the pet&apos;s travel date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Cancellation Policy</h2>
              <p className="text-muted-foreground mb-4">
                Cancellation fees apply based on timing:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>More than 30 days before travel: Full refund minus administrative fees</li>
                <li>14-30 days before travel: 50% refund</li>
                <li>Less than 14 days before travel: No refund</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Non-refundable expenses (airline tickets, permits, etc.) are not included in refunds.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                While we take every precaution to ensure your pet&apos;s safety, we cannot be held liable for circumstances beyond our control, including airline delays, government processing times, or natural disasters. We recommend pet travel insurance for all relocations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service are governed by the laws of the United Arab Emirates. Any disputes will be resolved through arbitration in Dubai.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at:<br />
                Email: legal@petrelocationdubai.com<br />
                Phone: +971 50 123 4567
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
