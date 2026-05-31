"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"

export function ClientPortalLogin() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
        <Lock className="w-5 h-5 text-accent" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Sign in to your portal</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Track your pet's relocation, view documents, and message your coordinator.
      </p>

      {submitted ? (
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-foreground">
          Thanks — if an account exists for that email, we'll send a secure sign-in link shortly. Need help?{" "}
          <a href="https://wa.me/971501234567" className="text-accent font-medium underline underline-offset-2">
            Message us on WhatsApp
          </a>
          .
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="portal-email">Email address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="portal-email"
                type="email"
                required
                placeholder="you@example.com"
                className="pl-9"
                autoComplete="email"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
            Send me a secure sign-in link
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We use passwordless sign-in — no password to remember or leak.
          </p>
        </form>
      )}
    </div>
  )
}
