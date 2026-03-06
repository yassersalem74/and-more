import React from "react";
import ContactHeroSection from "../components/Contact-Page/ContactHeroSection";
import ContactUsSection from "../components/Home-Page/ContactUsSection";
import ContactInfoSection from "../components/Contact-Page/ContactInfoSection";

export default function Contact() {
  return (
    <div>
      <ContactHeroSection></ContactHeroSection>
      <div className="bg-gradient-to-r from-[#7B2CBF] to-[#2C3DBF]">
        <ContactInfoSection></ContactInfoSection>
        <ContactUsSection></ContactUsSection>
      </div>
    </div>
  );
}
