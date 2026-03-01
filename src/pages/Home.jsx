import React from "react";
import HeroSection from "../components/Home-Page/HeroSection";
import AboutSection from "../components/Home-Page/AboutSection";
import SolutionsSection from "../components/Home-Page/SolutionsSection";
import WhyChooseSection from "../components/Home-Page/WhyChooseSection";
import ProcessSection from "../components/Home-Page/ProcessSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="bg-gradient-to-r from-[#7B2CBF] to-[#2C3DBF]">
        <AboutSection></AboutSection>
        <SolutionsSection></SolutionsSection>
        <WhyChooseSection></WhyChooseSection>
        <ProcessSection></ProcessSection>
      </div>
    </div>
  );
}
