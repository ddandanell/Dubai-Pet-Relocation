import { Info } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl md:rounded-3xl border border-border p-6 md:p-12">
          <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent/15 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Why We Don&apos;t Publish Fixed Prices
              </h2>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              Every pet relocation is unique. The cost depends on many factors that vary from case to case:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 my-6 md:my-8">
              {[
                "Route and destination country",
                "Airline and flight options",
                "Required vaccines and permits",
                "Current documentation status",
                "Timeline and urgency",
                "Crate size and type",
                "Level of service needed",
                "Government processing fees"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 bg-secondary/50 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
                  <span className="text-xs md:text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p>
              Instead of publishing misleading &ldquo;starting from&rdquo; prices, we provide a clear, detailed estimate after understanding your specific situation. Every cost is explained, and there are no hidden fees.
            </p>
            
            <p className="font-medium text-foreground">
              Our goal is transparency, not upselling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
