import React from 'react'
import AboutHeroSection from '../components/About-Page/AboutHeroSection'
import OurStorySection from '../components/About-Page/OurStorySection'
import OurTeemSection from '../components/About-Page/OurTeemSection'
import ImpactSection from '../components/About-Page/ImpactSection'

export default function About() {
  return (
    <div>
      <AboutHeroSection></AboutHeroSection>
      <OurStorySection></OurStorySection>
      <OurTeemSection></OurTeemSection>
      <ImpactSection></ImpactSection>
    </div>
  )
}
