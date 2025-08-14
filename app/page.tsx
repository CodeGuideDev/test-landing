"use client"

import { Hero } from '@/components/ui/animated-hero'
import { FeaturesSection } from '@/components/ui/features-section'
import { UserFlowSection } from '@/components/ui/user-flow-section'
import { CTAAuthSection } from '@/components/ui/cta-auth-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <UserFlowSection />
      <CTAAuthSection />
    </main>
  )
}
