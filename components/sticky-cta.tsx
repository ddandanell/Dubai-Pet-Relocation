"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all hover:scale-105"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </a>
      
      {/* Mobile CTA */}
      <div className="md:hidden">
        <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg px-4 text-sm">
          <Link href="/request-estimate">Get Quote</Link>
        </Button>
      </div>
    </div>
  )
}
