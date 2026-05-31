import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: January 2024
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you use our pet relocation services, we collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your name, email address, phone number, and postal address</li>
                <li>Information about your pet (name, breed, age, health records)</li>
                <li>Travel details and destination information</li>
                <li>Veterinary records and health certificates</li>
                <li>Payment information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and manage our pet relocation services</li>
                <li>Coordinate with airlines, veterinarians, and government agencies</li>
                <li>Communicate with you about your relocation</li>
                <li>Process payments and send invoices</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We share your information only as necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>With airlines for flight bookings and cargo arrangements</li>
                <li>With veterinary clinics for required health examinations</li>
                <li>With government agencies for import/export permits</li>
                <li>With customs authorities as required by law</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We strive to protect your data but cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:<br />
                Email: privacy@petrelocationdubai.com<br />
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
