import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PawPrint } from "lucide-react"

interface PageCTAProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

/** Reusable closing call-to-action band for inner pages. */
export function PageCTA({
  title = "Ready to plan your pet's journey?",
  description = "Tell us where your pet is travelling from and to. We'll map out the safest, most transparent route — and give you a clear, itemised estimate with no surprises.",
  primaryLabel = "Request a Free Estimate",
  primaryHref = "/request-estimate",
  secondaryLabel = "Talk to a Pet Travel Expert",
  secondaryHref = "https://wa.me/971501234567",
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-white" />
        <div className="absolute bottom-16 right-16 w-32 md:w-48 h-32 md:h-48 rounded-full bg-white" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <PawPrint className="w-7 h-7 md:w-8 md:h-8 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance mb-4">{title}</h2>
        <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold px-6 md:px-8 py-5 md:py-6 text-base">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-5 md:py-6 text-base">
            <a href={secondaryHref} target={secondaryHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {secondaryLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
