"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PawPrint } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white" />
        <div className="absolute bottom-20 right-20 w-32 md:w-48 h-32 md:h-48 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/3 w-16 md:w-24 h-16 md:h-24 rounded-full bg-white" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 md:mb-8">
          <PawPrint className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
          Moving Your Pet Into or Out of Dubai?
        </h2>
        
        <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Call us before you make expensive decisions. We&apos;ll help you understand the safest, fastest, and most transparent way to move your pet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg">
            <Link href="/request-estimate">Start Your Pet Relocation Plan</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg">
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">Contact Us on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
