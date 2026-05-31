"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/logo"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "International", href: "/international-pet-travel" },
  { label: "Domestic", href: "/domestic-pet-travel" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/client-portal"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Client Portal
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              <Link href="/request-estimate">Request Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors px-3 py-3 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/client-portal"
                className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors px-3 py-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Portal
              </Link>
              <div className="pt-3 px-3">
                <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-semibold w-full">
                  <Link href="/request-estimate" onClick={() => setMobileMenuOpen(false)}>Request Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
