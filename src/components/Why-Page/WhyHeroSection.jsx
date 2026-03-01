import React from "react";

export default function WhyHeroSection() {
  const container = "max-w-5xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-24 lg:py-32";

  return (
    <section
      className={`relative w-full text-white overflow-hidden ${sectionSpace}`}
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#CAABE5]/30 blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#969EDF]/20 blur-[150px] animate-pulse delay-200" />

      {/* 🌐 Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className={`relative z-10 ${container} text-center`}>
        
        {/* 🔹 Label */}
        <p className="uppercase tracking-[4px] text-[#CAABE5]/80 text-sm mb-6">
          Why &More
        </p>

        {/* 🔥 Title */}
        <h1
          className="
            font-extrabold
            text-[34px] md:text-[56px] lg:text-[72px]
            leading-tight
          "
        >
          Why  Choose{" "}
          <span className="bg-gradient-to-r from-[#CAABE5] via-white to-[#969EDF] bg-clip-text text-transparent">
            &More
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
          We don’t just deliver services — we build structured systems that
          drive predictable growth, align strategy with execution, and transform
          businesses into scalable, high-performing engines.
        </p>

        {/* 🚀 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary */}
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
            Work With Us →
          </button>


        </div>
      </div>
    </section>
  );
}