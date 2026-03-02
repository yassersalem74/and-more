import React from 'react'
import ServiceHeroSection from '../components/Service-Page/ServiceHeroSection'
import Tools from '../components/Service-Page/Tools'
import StartYourProject from '../components/Service-Page/StartYourProject'
import OurServicesSection from '../components/Service-Page/OurServicesSection'

export default function Service() {
  return (
    <div>
      <ServiceHeroSection></ServiceHeroSection>
      <Tools></Tools>
      <OurServicesSection></OurServicesSection>
      <StartYourProject></StartYourProject>
    </div>
  )
}
