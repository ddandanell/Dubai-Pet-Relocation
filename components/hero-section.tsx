"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, Users, Star, Play, Pause } from "lucide-react"
import { useState, useRef } from "react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-dog.png"
        >
          <source src="https://videos.pexels.com/video-files/4836367/4836367-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
        ) : (
          <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
        )}
      </button>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
            <Badge className="bg-white/15 text-white border-white/20 font-medium px-3 py-1.5 text-xs backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1.5 fill-accent text-accent" />
              4.9 Trustpilot
            </Badge>
            <Badge className="bg-white/15 text-white border-white/20 font-medium px-3 py-1.5 text-xs backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1.5 fill-accent text-accent" />
              5.0 Google Reviews
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Pet Relocation Made Safe, Simple, and Transparent
          </h1>
          
          <p className="mt-5 md:mt-8 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
            We help dogs, cats, and their owners move safely into and out of Dubai with expert support for documents, permits, vets, airlines, airport handling, and full relocation planning.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-primary font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
            >
              <Link href="/request-estimate">Get a Relocation Plan</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-white/90 text-primary font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
            >
              <Link href="/pet-transport-scams">Ask for a Quote Review</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm">500+ pets relocated safely</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm">Dubai, Europe, Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm">24/7 Vet Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
