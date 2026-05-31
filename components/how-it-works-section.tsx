import { Phone, FileSearch, ClipboardList, Settings, CheckCircle } from "lucide-react"

const stepsRow1 = [
  {
    icon: Phone,
    step: "01",
    title: "Call Us",
    description: "Tell us about your pet, destination, timeline, and goals. We listen first."
  },
  {
    icon: FileSearch,
    step: "02",
    title: "We Review Everything",
    description: "Documents, vaccines, permits, airline rules, and timeline—we check it all."
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Custom Relocation Plan",
    description: "We create a clear, detailed plan with realistic timelines and transparent costs."
  },
]

const stepsRow2 = [
  {
    icon: Settings,
    step: "04",
    title: "You Choose Your Level",
    description: "Full service or partial support? You decide how much we handle."
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "We Coordinate Everything",
    description: "Vets, approvals, flights, airport handling, pickup, and delivery—all managed."
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance">
            How It Works
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70">
            A simple, transparent process designed around your pet&apos;s safety and your peace of mind.
          </p>
        </div>

        {/* First Row - 3 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {stepsRow1.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center bg-white/5 rounded-2xl p-6 md:p-8">
              {/* Step Number Circle */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mb-4 md:mb-6">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              
              {/* Step Badge */}
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-wider mb-2">
                STEP {item.step}
              </span>
              
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Steps Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {stepsRow2.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center bg-white/5 rounded-2xl p-6 md:p-8">
              {/* Step Number Circle */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mb-4 md:mb-6">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              
              {/* Step Badge */}
              <span className="text-[10px] md:text-xs font-bold text-accent tracking-wider mb-2">
                STEP {item.step}
              </span>
              
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
