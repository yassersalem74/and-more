import React from "react";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full text-white overflow-hidden py-20 lg:py-28 ">
      {/* 🌈 MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF] via-[#5A3FC0] to-[#2C3DBF]" />

      {/* ✨ GLOW BLOBS */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-[#969EDF]/30 blur-[150px] animate-pulse delay-200" />

      {/* 💎 GRID LIGHT EFFECT */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ===== LEFT CONTENT ===== */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            
     

            {/* main title */}
            <h1 className="font-bold text-[32px] md:text-[44px] lg:text-[56px] leading-tight">
              Hi We’re{" "}
              <span className="bg-gradient-to-r from-[#CAABE5] to-white bg-clip-text text-transparent">
                &And More
              </span>
            </h1>

            {/* description */}
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/90 leading-relaxed lg:max-w-xl">
              <span className="text-white font-semibold">
                &And More
              </span>{" "}
              is a marketing and technology solutions company focused on
              building structured, scalable growth systems for modern
              businesses.
            </p>

            <p className="text-[15px] md:text-[17px] lg:text-[18px] text-white/80 leading-relaxed lg:max-w-xl">
              We combine strategic marketing intelligence with advanced digital
              infrastructure to help companies increase visibility, attract
              qualified leads, automate operations, and enhance overall
              performance.
            </p>

            {/* CTA */}
            <div className="mt-4">
              <button
                className="
                  px-8 py-4
                  rounded-xl
                  bg-[#A36BD2]
                  text-white font-semibold
                  text-[16px] lg:text-[18px]
                  shadow-[0_10px_30px_rgba(163,107,210,0.6)]
                  hover:scale-105 active:scale-95
                  transition
                  cursor-pointer
                "
              >
                Discover Our Work →
              </button>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* glow behind image */}
            <div className="absolute w-[280px] lg:w-[400px] h-[280px] lg:h-[400px] bg-[#A36BD2]/30 blur-[120px] rounded-full" />

            {/* floating card */}
            <div
              className="
                relative
                rounded-3xl
                p-4
                bg-white/10 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                transition duration-500
                hover:scale-105
              "
            >
              <img
                src="/aboutHeroSection.png"
                alt="About visual"
                className="
                  w-[260px] md:w-[360px] lg:w-[480px]
                  object-contain
                  rounded-2xl
                "
              />

              {/* ✨ floating light */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}