
import React from 'react'
import HeroSection from '../components/Home-Page/HeroSection'
import AboutSection from '../components/Home-Page/AboutSection'
import SolutionsSection from '../components/Home-Page/SolutionsSection'
import WhyChooseSection from '../components/Home-Page/WhyChooseSection'

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SolutionsSection></SolutionsSection>
      <WhyChooseSection></WhyChooseSection>
    </div>
  )
}
