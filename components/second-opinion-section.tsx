"use client"

import { Button } from "@/components/ui/button"
import { FileSearch, ArrowRight } from "lucide-react"
import Image from "next/image"

export function SecondOpinionSection() {
  return (
    <section className="py-16 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image first on mobile for visual engagement */}
            <div className="w-full md:w-auto md:flex-1 md:order-2 max-w-sm md:max-w-md">
              <Image
                src="/second-opinion-dog.png"
                alt="Happy dog ready for travel"
                width={400}
                height={500}
                className="rounded-2xl md:rounded-3xl shadow-xl object-cover w-full aspect-[4/5]"
              />
            </div>
            
            <div className="flex-1 md:order-1">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-4 md:mb-6">
                <FileSearch className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-balance">
                Already Got a Quote? Send It to Us.
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  If you already received a quote and something feels unclear, too expensive, or not quite right, we can review it and give you an honest opinion.
                </p>
                <p>
                  We&apos;ll tell you:
                </p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-2 md:gap-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                    <span>What looks fair and reasonable</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                    <span>What looks risky or incomplete</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-3">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                    <span>What questions you should ask before committing</span>
                  </li>
                </ul>
                <p>
                  No pressure. No sales pitch. Just honest advice.
                </p>
              </div>
              
              <Button className="mt-6 md:mt-8 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg">
                Request a Quote Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
