import React from 'react'
import AboutHeroSection from '../components/About-Page/AboutHeroSection'
import OurStorySection from '../components/About-Page/OurStorySection'
import OurTeemSection from '../components/About-Page/OurTeemSection'
import ImpactSection from '../components/About-Page/ImpactSection'
import CoreValuesSection from '../components/About-Page/CoreValuesSection'

export default function About() {
  return (
    <div>
      <AboutHeroSection></AboutHeroSection>
      <OurStorySection></OurStorySection>
      <CoreValuesSection></CoreValuesSection>
      <OurTeemSection></OurTeemSection>
      <ImpactSection></ImpactSection>
    </div>
  )
}
