import React from "react";

export default function HeroSection() {
  return (
    <section
      className="
        w-full
        text-white
        flex flex-col items-center justify-center
        text-center
        px-4 lg:px-8
        pt-16 lg:pt-24
        pb-10
      "
    >
      {/* ===== Content ===== */}
      <div className="max-w-5xl flex flex-col items-center gap-8">
        {/* Title */}
        <h1
          className="
            font-['Roboto'] font-bold
            text-[32px] md:text-[44px] lg:text-[56px]
            leading-tight
          "
        >
          Excellence in Every Detail.
        </h1>

        {/* Description */}
        <p
          className="
            font-['Roboto'] font-normal
            text-[18px] md:text-[24px] lg:text-[32px]
            leading-[32px] md:leading-[40px] lg:leading-[48px]
            text-white/90
          "
        >
          Every line. Every color. Every interaction Designed with purpose,
          refined with care, and delivered with uncompromising quality.
        </p>

        {/* CTA Button */}
        <button
          className="
            btn
            normal-case
            border-none
            text-white
            bg-[#A36BD2]
            hover:bg-white hover:text-[#2C3DBF]
            transition
            rounded-2xl
            px-8 lg:px-12
            h-[64px] lg:h-[80px]
            text-[18px] lg:text-[32px]
            font-medium
            hover:scale-105 active:scale-95
            shadow-[0_8px_30px_rgba(0,0,0,0.2)]
          "
        >
          Start Your Project →
        </button>
      </div>

      {/* ===== Image ===== */}
      <div className="mt-12 lg:mt-16">
        <img
          src="/heroscreen.png"
          alt="Dashboard preview"
          className="
            w-[300px] md:w-[500px] lg:w-[646px]
            h-auto
            object-contain
          "
        />
      </div>
    </section>
  );
}