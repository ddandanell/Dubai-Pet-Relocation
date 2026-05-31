"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, MapPin, Calendar, Dog, Cat, MessageSquare, Check } from "lucide-react"

const countries = [
  "United Arab Emirates", "United Kingdom", "Germany", "France", "Netherlands", "Denmark", "Sweden", "Norway",
  "United States", "Canada", "Australia", "Singapore", "Japan", "South Korea", "India", "Thailand",
  "Switzerland", "Austria", "Belgium", "Italy", "Spain", "Portugal", "Ireland", "New Zealand", "Other"
]

const petTypes = [
  { id: "dog", label: "Dog", icon: Dog },
  { id: "cat", label: "Cat", icon: Cat },
]

const timelines = [
  "Within 2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Within 6 months",
  "Just planning ahead"
]

export function QuoteFormSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    currentCountry: "",
    destinationCountry: "",
    timeline: "",
    petType: "",
    petName: "",
    notes: "",
    email: "",
    name: ""
  })

  const totalSteps = 5

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const canProceed = () => {
    switch (step) {
      case 1: return formData.currentCountry && formData.destinationCountry
      case 2: return formData.timeline
      case 3: return formData.petType
      case 4: return true // Notes are optional
      case 5: return formData.email && formData.name
      default: return false
    }
  }

  return (
    <section id="get-started" className="py-16 md:py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance">
            Get Your Free Relocation Plan
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70">
            Answer a few questions and we&apos;ll create a personalized plan for your pet.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  i < step
                    ? "bg-accent text-primary"
                    : i === step
                    ? "bg-white text-primary"
                    : "bg-white/20 text-white/60"
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i}
              </div>
            ))}
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>

        <Card className="border-0 shadow-2xl">
          <CardContent className="p-6 md:p-10">
            {/* Step 1: Location */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Where are you relocating from and to?</h3>
                    <p className="text-sm text-muted-foreground">Tell us about your journey</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Location</label>
                    <select
                      value={formData.currentCountry}
                      onChange={(e) => updateFormData("currentCountry", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select country...</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Destination</label>
                    <select
                      value={formData.destinationCountry}
                      onChange={(e) => updateFormData("destinationCountry", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select country...</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Timeline */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">When do you need to relocate?</h3>
                    <p className="text-sm text-muted-foreground">This helps us plan the process</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {timelines.map((timeline) => (
                    <button
                      key={timeline}
                      onClick={() => updateFormData("timeline", timeline)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.timeline === timeline
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border hover:border-accent/50 text-foreground"
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Pet Type */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Dog className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tell us about your pet</h3>
                    <p className="text-sm text-muted-foreground">What kind of furry friend do you have?</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {petTypes.map((pet) => (
                    <button
                      key={pet.id}
                      onClick={() => updateFormData("petType", pet.id)}
                      className={`p-6 rounded-xl border text-center transition-all ${
                        formData.petType === pet.id
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <pet.icon className={`w-10 h-10 mx-auto mb-2 ${formData.petType === pet.id ? "text-accent" : "text-muted-foreground"}`} />
                      <span className="font-medium text-foreground">{pet.label}</span>
                    </button>
                  ))}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Pet&apos;s Name (optional)</label>
                  <Input
                    value={formData.petName}
                    onChange={(e) => updateFormData("petName", e.target.value)}
                    placeholder="e.g., Max, Bella, Charlie..."
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Notes */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Anything else we should know?</h3>
                    <p className="text-sm text-muted-foreground">Share any details, concerns, or questions</p>
                  </div>
                </div>
                
                <textarea
                  value={formData.notes}
                  onChange={(e) => updateFormData("notes", e.target.value)}
                  placeholder="e.g., My dog has anxiety during travel, I've already received a quote from another company, I need help with specific documents..."
                  className="w-full h-40 p-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>
            )}

            {/* Step 5: Contact */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Almost done!</h3>
                    <p className="text-sm text-muted-foreground">Where should we send your relocation plan?</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="John Smith"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="john@example.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="text-muted-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              
              <Button
                onClick={step === totalSteps ? () => alert("Form submitted!") : nextStep}
                disabled={!canProceed()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {step === totalSteps ? "Get My Free Plan" : "Continue"}
                {step !== totalSteps && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
