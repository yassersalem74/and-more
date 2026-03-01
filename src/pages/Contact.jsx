import React from 'react'
import ContactHeroSection from '../components/Contact-Page/ContactHeroSection'
import ContactUsSection from '../components/Home-Page/ContactUsSection'
import ContactInfoSection from '../components/Contact-Page/ContactInfoSection'

export default function Contact() {
  return (
    <div>
      <ContactHeroSection></ContactHeroSection>
      <ContactInfoSection></ContactInfoSection>
      <ContactUsSection></ContactUsSection>
    </div>
  )
}
