import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  services: [
    { label: "Pet Travel Services", href: "/services" },
    { label: "Domestic Pet Travel", href: "/domestic-pet-travel" },
    { label: "International Pet Travel", href: "/international-pet-travel" },
    { label: "Travel Kennels", href: "/travel-kennels" },
    { label: "Request Estimate", href: "/request-estimate" },
  ],
  resources: [
    { label: "Pet Travel Resources", href: "/resources" },
    { label: "Military Pet Relocation", href: "/military-pet-relocation" },
    { label: "Pet Transport Scams", href: "/pet-transport-scams" },
    { label: "Client Portal", href: "/client-portal" },
    { label: "About Us", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.02_255)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-flex mb-4" aria-label="Pet Relocation Dubai — home">
              <Logo variant="dark" />
            </Link>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-xs">
              Expert pet relocation services for Dubai. We help families stay together by making international pet
              transport safe, simple, and transparent.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3">
              <a href="mailto:hello@petrelocationdubai.com" className="flex items-center gap-2 md:gap-3 text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                hello@petrelocationdubai.com
              </a>
              <a href="tel:+971501234567" className="flex items-center gap-2 md:gap-3 text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                +971 50 123 4567
              </a>
              <div className="flex items-center gap-2 md:gap-3 text-white/60 text-xs md:text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Dubai, UAE
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-xs md:text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-white text-sm md:text-base">Trust & Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-white/60 text-xs md:text-sm">
              <li>500+ pets relocated safely</li>
              <li>Licensed & insured</li>
              <li>Vet-approved processes</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 hover:text-white text-xs md:text-sm transition-colors mb-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/40 text-xs md:text-sm">
              © {new Date().getFullYear()} Pet Relocation Dubai. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <Link href="/privacy" className="text-white/40 hover:text-white text-xs md:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white text-xs md:text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
