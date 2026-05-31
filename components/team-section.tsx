import Image from "next/image"
import { MapPin, Clock, Heart, Globe, Stethoscope, Phone, Users, Building2 } from "lucide-react"

const teamMembers = [
  {
    name: "Marcus & Sarah",
    role: "Founders & Operations",
    description: "Husband and wife team, passionate dog lovers with 15+ years in international logistics. They started this company because they believe pets are family.",
    specialty: "Full relocation management"
  },
  {
    name: "Dr. Elena Schmidt",
    role: "Veterinary Advisor",
    description: "Based in Germany, Dr. Schmidt is our 24/7 on-call veterinarian. She ensures all health requirements are met and provides emergency support.",
    specialty: "24/7 vet support"
  },
  {
    name: "Thomas",
    role: "Airport Operations",
    description: "20+ years of airport and cargo logistics experience. Thomas knows every airport in the region and has contacts at all major carriers.",
    specialty: "Airport handling & cargo"
  },
  {
    name: "Aisha & Fatima",
    role: "Client Relations",
    description: "Our dedicated client support team handles all communications, documentation, and ensures you're never left wondering about your pet's status.",
    specialty: "Admin & client support"
  },
]

const airports = [
  "Dubai International (DXB)",
  "Abu Dhabi International (AUH)",
  "Frankfurt Airport (FRA)",
  "London Heathrow (LHR)",
  "Singapore Changi (SIN)",
  "Amsterdam Schiphol (AMS)",
  "Copenhagen (CPH)",
  "JFK New York (JFK)",
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Meet the People Behind Your Pet&apos;s Journey
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re not a faceless company. We&apos;re pet lovers, logistics experts, and veterinary professionals who genuinely care about reuniting families.
          </p>
        </div>

        {/* Team Photo */}
        <div className="relative mb-12 md:mb-16">
          <div className="relative h-64 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden">
            <Image
              src="/team-photo.png"
              alt="Pet Relocation Dubai team with their office pets"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
              <p className="text-white text-lg md:text-2xl font-semibold text-balance">
                &ldquo;Pets are family. That&apos;s why we treat every relocation like it&apos;s our own.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-xl md:rounded-2xl border border-border p-5 md:p-6">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                {index === 0 && <Heart className="w-6 h-6 text-accent" />}
                {index === 1 && <Stethoscope className="w-6 h-6 text-accent" />}
                {index === 2 && <Building2 className="w-6 h-6 text-accent" />}
                {index === 3 && <Phone className="w-6 h-6 text-accent" />}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.description}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {member.specialty}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">20+</div>
            <div className="text-xs md:text-sm text-white/70">Years logistics experience</div>
          </div>
          
          <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-xs md:text-sm text-white/70">Pets safely relocated</div>
          </div>
          
          <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">4</div>
            <div className="text-xs md:text-sm text-white/70">Countries with team</div>
          </div>
          
          <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-6 text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs md:text-sm text-white/70">Vet support available</div>
          </div>
        </div>

        {/* Airports */}
        <div className="bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <MapPin className="w-6 h-6 text-accent" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground">Airports We Work With</h3>
          </div>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Our team has direct contacts and experience with major international airports. We know the procedures, the people, and the best routes for your pet.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {airports.map((airport, index) => (
              <span 
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-background rounded-lg text-xs md:text-sm font-medium text-foreground border border-border"
              >
                {airport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
