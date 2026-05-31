import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { Check, AlertTriangle, Info } from "lucide-react"

/** Standard padded content section with a centered measure. */
export function Section({
  id,
  title,
  intro,
  alt = false,
  children,
}: {
  id?: string
  title?: string
  intro?: ReactNode
  alt?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={`py-14 md:py-20 ${alt ? "bg-card" : "bg-background"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance mb-4">{title}</h2>
        )}
        {intro && <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

/** Body copy paragraph tuned for readability. */
export function P({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">{children}</p>
}

/** Checklist with accent ticks. */
export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
            <Check className="w-3 h-3 text-accent" />
          </span>
          <span className="text-sm md:text-base text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Numbered step cards. */
export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4 md:gap-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 md:p-6">
          <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Icon feature cards in a responsive grid. */
export function FeatureCards({
  items,
  columns = 3,
}: {
  items: { icon: LucideIcon; title: string; body: string }[]
  columns?: 2 | 3
}) {
  return (
    <div className={`grid gap-4 md:gap-6 ${columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-accent/50 transition-colors">
          <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  )
}

/** Highlighted callout — "info" or "warning" tone. */
export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warning"
  title: string
  children: ReactNode
}) {
  const isWarning = tone === "warning"
  const Icon = isWarning ? AlertTriangle : Info
  return (
    <div
      className={`rounded-2xl border p-5 md:p-6 ${
        isWarning ? "border-destructive/30 bg-destructive/5" : "border-accent/30 bg-accent/5"
      }`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isWarning ? "text-destructive" : "text-accent"}`} />
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <div className="text-sm md:text-base text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

/** Compact stat strip. */
export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
          <div className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
          <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
