"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah M.",
    location: "Dubai to London",
    rating: 5,
    text: "They made relocating our two cats from Dubai to London completely stress-free. Every step was explained clearly, and our cats arrived safe and calm. Highly recommend!",
    source: "Trustpilot",
    pet: "2 cats"
  },
  {
    name: "Michael & Emma K.",
    location: "Germany to Dubai",
    rating: 5,
    text: "Moving our German Shepherd to Dubai seemed impossible until we found this team. They handled all the paperwork, vet visits, and even met us at the airport. Incredible service.",
    source: "Google",
    pet: "German Shepherd"
  },
  {
    name: "James R.",
    location: "Singapore to Dubai",
    rating: 5,
    text: "Professional, transparent, and genuinely caring. They even called to check on our dog a week after arrival. The pricing was fair and there were no hidden surprises.",
    source: "Trustpilot",
    pet: "Golden Retriever"
  },
  {
    name: "Fatima A.",
    location: "Dubai to USA",
    rating: 5,
    text: "I was quoted ridiculous prices by other companies. These folks gave me an honest assessment and saved me thousands. My cat is now happily in New York with me.",
    source: "Google",
    pet: "Persian cat"
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#00b67a]/10 rounded-full">
              <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" />
              <span className="text-sm font-semibold text-[#00b67a]">4.9 on Trustpilot</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#4285f4]/10 rounded-full">
              <Star className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
              <span className="text-sm font-semibold text-[#4285f4]">5.0 on Google</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from pet owners who trusted us with their family members.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-border hover:border-accent/30 transition-colors">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 text-accent/30 mb-2" />
                
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  {review.text}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location} • {review.pet}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    via <span className={review.source === "Trustpilot" ? "text-[#00b67a]" : "text-[#4285f4]"}>{review.source}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
