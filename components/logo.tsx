type LogoSize = "small" | "default" | "large"

const SIZES: Record<LogoSize, { mark: string; name: string; eyebrow: string }> = {
  small: { mark: "w-8 h-8", name: "text-sm", eyebrow: "text-[9px]" },
  default: { mark: "w-9 h-9 md:w-11 md:h-11", name: "text-sm md:text-base", eyebrow: "text-[10px] md:text-[11px]" },
  large: { mark: "w-12 h-12 md:w-14 md:h-14", name: "text-lg md:text-xl", eyebrow: "text-[11px] md:text-xs" },
}

/**
 * The brand mark: a paw that doubles as a journey — a dashed flight arc
 * sweeps over the paw print and lands in a small plane, signalling
 * "pet travel" at a glance. Self-contained SVG so it scales crisply.
 */
function PawJourneyMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-[30%] overflow-hidden ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(140deg, oklch(0.30 0.05 262) 0%, oklch(0.20 0.03 255) 55%, oklch(0.16 0.03 258) 100%)",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.12), 0 6px 16px -6px rgba(15,20,40,0.55)",
      }}
    >
      <svg viewBox="0 0 40 40" fill="none" className="w-[72%] h-[72%]" aria-hidden="true">
        {/* dashed flight arc */}
        <path
          d="M5 27 C 12 13, 28 13, 35 7"
          stroke="white"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="0.2 3.4"
        />
        {/* plane at the end of the arc */}
        <path
          d="M35 7 l-4.6 1.1 1.7 1.5 -0.3 2.4 2.1 -2.5 z"
          fill="white"
          fillOpacity="0.9"
        />
        {/* paw — main pad */}
        <ellipse cx="19" cy="27.5" rx="5.4" ry="4.6" fill="var(--color-accent)" />
        {/* paw — toe beans */}
        <ellipse cx="12.4" cy="21.2" rx="2.2" ry="2.7" fill="var(--color-accent)" />
        <ellipse cx="19" cy="18.6" rx="2.3" ry="2.9" fill="var(--color-accent)" />
        <ellipse cx="25.6" cy="21.2" rx="2.2" ry="2.7" fill="var(--color-accent)" />
        <ellipse cx="29.4" cy="26.4" rx="1.7" ry="2.1" fill="var(--color-accent)" fillOpacity="0.85" />
      </svg>
    </div>
  )
}

interface LogoProps {
  className?: string
  size?: LogoSize
  /** "dark" inverts the wordmark for use on dark backgrounds (e.g. footer). */
  variant?: "light" | "dark"
}

export function Logo({ className = "", size = "default", variant = "light" }: LogoProps) {
  const s = SIZES[size]
  const nameColor = variant === "dark" ? "text-white" : "text-foreground"

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <PawJourneyMark className={s.mark} />
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight ${nameColor} ${s.name}`}>
          Pet Relocation
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-px w-3 bg-accent" />
          <span className={`font-semibold uppercase tracking-[0.22em] text-accent ${s.eyebrow}`}>
            Dubai
          </span>
        </span>
      </div>
    </div>
  )
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return <PawJourneyMark className={`w-10 h-10 ${className}`} />
}
