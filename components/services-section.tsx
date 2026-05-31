import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Full Door-to-Door",
    description: "We handle everything from your home to your pet's new destination.",
    features: ["Document preparation", "Vet coordination", "Airport handling", "Pickup & delivery", "Flight booking", "Customs clearance"],
    highlighted: true,
    image: "/service-delivery.png"
  },
  {
    title: "Partial Support",
    description: "We assist with the complex parts while you manage the rest.",
    features: ["Document review", "Permit guidance", "Timeline planning", "Airline consultation", "Problem solving"],
    highlighted: false,
    image: "/service-planning.png"
  },
  {
    title: "Documentation Only",
    description: "Expert help with permits, paperwork, and compliance requirements.",
    features: ["Import/export permits", "Health certificates", "Vaccine records", "Microchip verification", "Compliance check"],
    highlighted: false,
    image: "/service-documents.png"
  },
  {
    title: "Vet Coordination",
    description: "We schedule and coordinate all required veterinary appointments.",
    features: ["Vet appointments", "Required vaccinations", "Health examinations", "Certificate timing", "Lab work coordination"],
    highlighted: false,
    image: "/service-vet.png"
  },
  {
    title: "Airport & Cargo",
    description: "Professional handling of airport logistics and cargo requirements.",
    features: ["Airline selection", "Crate requirements", "Cargo booking", "Airport delivery", "Check-in support"],
    highlighted: false,
    image: "/service-airport.png"
  },
  {
    title: "Quote Review",
    description: "Get an honest second opinion on quotes you've already received.",
    features: ["Fair price assessment", "Risk identification", "Missing services check", "Question guidance", "Alternative options"],
    highlighted: false,
    image: "/second-opinion-dog.png"
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Choose Your Level of Support
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground">
            Every relocation is different. Some clients want complete door-to-door service. Others prefer to manage parts themselves to reduce costs. We support both approaches.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`rounded-xl md:rounded-2xl transition-all overflow-hidden ${
                service.highlighted 
                  ? "border-2 border-accent shadow-lg" 
                  : "border-border hover:border-accent/50"
              }`}
            >
              {/* Service Image */}
              <div className="relative h-36 md:h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {service.highlighted && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-primary rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
