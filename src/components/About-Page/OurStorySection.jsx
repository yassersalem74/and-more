import React from "react";

export default function OurStorySection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-20 lg:py-28";

  const story = [
    {
      title: "The Beginning",
      desc: "And More was founded with one clear belief: growth should be structured, not accidental.",
    },
    {
      title: "The Problem",
      desc: "Businesses were investing in marketing without infrastructure, and building tech without clear strategy.",
    },
    {
      title: "The Insight",
      desc: "Effort without alignment leads to wasted potential and unsustainable growth.",
    },
  ];

  return (
    <section
      className={`relative w-full text-white overflow-hidden ${sectionSpace}`}
    >


      <div className={`relative z-10 ${container}`}>
        {/* ===== MAIN FLEX ===== */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* ===== LEFT TITLE ===== */}
          <div className="lg:w-[150px] flex-shrink-0">
            <span className="text-[#CAABE5] text-[16px]">
              How it started
            </span>

            <h2 className="font-bold text-[40px] lg:text-[56px] leading-tight mt-2">
              Our <br />
              <span className="bg-gradient-to-r from-[#CAABE5] to-white bg-clip-text text-transparent">
                Story
              </span>
            </h2>

            {/* Line */}
            <div className="hidden lg:block w-[2px] h-[250px] bg-gradient-to-b from-[#CAABE5] to-transparent mt-6 ml-2" />
          </div>

          {/* ===== RIGHT CARDS (FULL WIDTH) ===== */}
          <div className="flex-1 flex flex-col gap-8">
            {story.map((item, index) => (
              <div
                key={index}
                className={`
                  group relative
                  w-full
                  p-6 lg:p-8
                  rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                  transition duration-500
                   hover:bg-white/20
                  opacity-0 translate-y-10
                  animate-[fadeUp_0.7s_forwards]
                  ${index === 0 ? "delay-100" : ""}
                  ${index === 1 ? "delay-200" : ""}
                  ${index === 2 ? "delay-300" : ""}
                `}
              >
                {/* Dot */}
                <div className="absolute -left-5 top-8 w-3 h-3 rounded-full bg-[#CAABE5] shadow-[0_0_10px_#CAABE5]" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#A36BD2]/30 to-transparent rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[20px] lg:text-[24px] font-semibold text-[#CAABE5] group-hover:text-white transition">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[16px] lg:text-[18px] text-[#EAECF9] leading-relaxed group-hover:text-white transition">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#CAABE5] to-[#969EDF] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}