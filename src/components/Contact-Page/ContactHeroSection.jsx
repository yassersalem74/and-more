import React from "react";

export default function ContactHeroSection() {
  const container = "max-w-5xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-24 lg:py-32";
const heroHeight = "min-h-[85vh] md:min-h-[90vh] lg:min-h-screen";
  return (
    <section
      className={`relative w-full ${heroHeight} text-white overflow-hidden ${sectionSpace}`}
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-[-80px] right-[10%] w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-100px] left-[10%] w-[350px] h-[350px] bg-[#969EDF]/20 blur-[140px] animate-pulse delay-200" />

      {/* 🌐 Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className={`relative z-10 ${container} text-center`}>
        
        {/* 🔹 Label */}
        <p className="uppercase tracking-[4px] text-[#CAABE5]/80 text-lg mb-6">
          Contact Us
        </p>

        {/* 🔥 Title */}
        <h1
          className="
            font-extrabold
            text-[34px] md:text-[56px] lg:text-[72px]
            leading-tight
          "
        >
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-[#CAABE5] via-white to-[#969EDF] bg-clip-text text-transparent">
            Powerful
          </span>
        </h1>

        {/* ✨ Divider */}
        <div className="mx-auto mt-6 w-24 h-[3px] bg-gradient-to-r from-[#CAABE5] to-[#969EDF] rounded-full" />

        {/* 📄 Description */}
        <p
          className="
            mt-8
            text-[16px] md:text-[20px] lg:text-[22px]
            leading-[28px] md:leading-[36px] lg:leading-[40px]
            text-white/85
            max-w-3xl mx-auto
          "
        >
          Whether you’re launching, scaling, or optimizing — we’re here to help.
          Tell us about your goals, and we’ll turn them into a structured growth system.
        </p>

        {/* 🚀 Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary CTA */}
          <button
            className="
              px-10 py-4
              rounded-xl
              bg-[#A36BD2]
              text-white font-semibold
              text-[16px] md:text-[18px]
              shadow-[0_10px_30px_rgba(163,107,210,0.6)]
              hover:scale-110 hover:shadow-[0_15px_40px_rgba(163,107,210,0.9)]
              active:scale-95
              transition
              cursor-pointer
            "
          >
            Start Your Project →
          </button>

       
        </div>

        {/* ✨ Quick Trust Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm md:text-base">
          <span className="flex items-center gap-2">
            ⚡ Fast Response
          </span>
          <span className="flex items-center gap-2">
            🤝 Real Consultation
          </span>
          <span className="flex items-center gap-2">
            📈 Growth Focused
          </span>
        </div>
      </div>
    </section>
  );
}