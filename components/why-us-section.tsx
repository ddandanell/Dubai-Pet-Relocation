import { DollarSign, MapPin, Heart, Layers, Network, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "We explain exactly where every cost comes from. No hidden fees, no surprises."
  },
  {
    icon: MapPin,
    title: "Dubai Import/Export Expertise",
    description: "Deep knowledge of UAE regulations, government processes, and local requirements."
  },
  {
    icon: Heart,
    title: "Animal-First Handling",
    description: "Your pet&apos;s safety and comfort drive every decision we make throughout the journey."
  },
  {
    icon: Layers,
    title: "Flexible Packages",
    description: "From full door-to-door service to partial support—choose what works for you."
  },
  {
    icon: Network,
    title: "Vet & Airport Network",
    description: "Trusted partnerships with veterinary clinics, cargo handlers, and airline contacts."
  },
  {
    icon: Scale,
    title: "Fair Second Opinions",
    description: "Already have a quote? We&apos;ll review it honestly and tell you if it&apos;s fair."
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Pet Owners Choose Us
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground">
            We&apos;re not trying to sell the most expensive solution. We&apos;re trying to find the right solution for your pet and your budget.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-all hover:shadow-lg rounded-xl md:rounded-2xl">
              <CardContent className="p-5 md:p-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-4 md:mb-6">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
