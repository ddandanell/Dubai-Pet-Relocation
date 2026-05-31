"use client"

import { Building2, Stethoscope, Plane, Users, Truck, GraduationCap, Handshake, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  {
    icon: Stethoscope,
    title: "Veterinary Clinics",
    description: "Partner agreements for health certificates, vaccinations, and required examinations. We can refer clients to you and vice versa.",
    benefits: ["Client referrals", "Streamlined documentation", "Priority scheduling"]
  },
  {
    icon: Plane,
    title: "Airlines & Cargo",
    description: "Direct relationships with pet-approved carriers and cargo handling teams. We help optimize your pet transport operations.",
    benefits: ["Volume partnerships", "Process optimization", "Training support"]
  },
  {
    icon: Building2,
    title: "Corporate HR Teams",
    description: "Relocation support for companies moving employees and their pets. White-label solutions available.",
    benefits: ["Employee benefits", "White-label service", "Dedicated account manager"]
  },
  {
    icon: Users,
    title: "Relocation Agencies",
    description: "B2B partnerships for agencies needing pet logistics expertise. Add pet relocation to your service offering.",
    benefits: ["Revenue share", "Full support", "Your branding"]
  },
  {
    icon: Truck,
    title: "Moving Companies",
    description: "Expand your services with professional pet relocation. We handle the complexity while you maintain the client relationship.",
    benefits: ["Service expansion", "Expert handling", "Client retention"]
  },
  {
    icon: GraduationCap,
    title: "Training & Consulting",
    description: "We offer training programs for companies wanting to develop in-house pet relocation capabilities.",
    benefits: ["Custom training", "Process documentation", "Ongoing support"]
  },
]

export function B2BSection() {
  return (
    <section className="py-16 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-semibold bg-primary text-accent rounded-full mb-4 md:mb-6">
            For Business Partners
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            B2B Partnerships & Cooperation
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground">
            We work with vets, relocation companies, airlines, corporate HR teams, moving companies, and animal-related businesses. Expand your services with our expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
          {partners.map((partner, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-5 md:p-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <partner.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{partner.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                
                <ul className="space-y-1.5">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                      <Handshake className="w-3.5 h-3.5 text-accent shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl md:rounded-3xl p-6 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Interested in Partnering With Us?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto text-sm md:text-base">
            Whether you&apos;re a vet clinic, moving company, or corporate HR team, we&apos;d love to explore how we can work together.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 md:px-8 py-5 md:py-6 text-base">
            Discuss Partnership
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
