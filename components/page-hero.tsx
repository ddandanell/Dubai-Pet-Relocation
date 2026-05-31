import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  /** Optional breadcrumb label shown after "Home /". Defaults to the title. */
  breadcrumb?: string
}

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 md:pt-40 pb-14 md:pb-20">
      {/* atmospheric paw glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, oklch(0.75 0.12 75) 0, transparent 38%), radial-gradient(circle at 10% 90%, white 0, transparent 40%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs md:text-sm text-white/55">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/80">{breadcrumb ?? title}</span>
        </nav>
        <span className="inline-block text-accent font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance max-w-3xl">
          {title}
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  )
}
