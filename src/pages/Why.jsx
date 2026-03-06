import React from "react";
import WhyHeroSection from "../components/Why-Page/WhyHeroSection";
import GrowthSystemSection from "../components/Why-Page/GrowthSystemSection";
import ImpactSection from "../components/Why-Page/ImpactSection";

export default function Why() {
  return (
    <div>
      <WhyHeroSection></WhyHeroSection>
      <div className="bg-gradient-to-r from-[#7B2CBF] to-[#2C3DBF]">
        <GrowthSystemSection></GrowthSystemSection>
        <ImpactSection></ImpactSection>
      </div>
    </div>
  );
}
