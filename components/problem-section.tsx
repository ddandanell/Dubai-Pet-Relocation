import { AlertTriangle, FileText, Plane, Clock, Box, Stethoscope, Building2, RefreshCw } from "lucide-react"

const challenges = [
  { icon: FileText, text: "Import and export permits" },
  { icon: Stethoscope, text: "Vaccine requirements" },
  { icon: Plane, text: "Airline-specific rules" },
  { icon: Clock, text: "Critical timing windows" },
  { icon: Box, text: "Crate specifications" },
  { icon: Building2, text: "Customs clearance" },
  { icon: RefreshCw, text: "Changing regulations" },
  { icon: AlertTriangle, text: "Risk of delays" },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Dubai Pet Relocation is More Complex Than You Think
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Moving your pet internationally involves navigating a maze of requirements that most owners only discover too late. Mistakes can delay your travel plans or create unnecessary stress for your animal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-background border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/15 flex items-center justify-center mb-3 md:mb-4">
                <challenge.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-foreground">{challenge.text}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 md:mt-12 text-center text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Without expert guidance, a simple oversight can result in your pet being denied boarding, quarantined, or stuck at the airport. We handle the complexity so you don&apos;t have to.
        </p>
      </div>
    </section>
  )
}
