import React from "react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        text-white
        px-4 lg:px-12
        py-20 lg:py-28
        bg-gradient-to-br from-[#7B2CBF] via-[#4A2DBF] to-[#2C3DBF]
      "
    >
      {/* 🔥 Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ✨ Glow Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A36BD2]/40 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* ===== LEFT CONTENT ===== */}
        <div className="flex flex-col gap-8">
          
          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-white/10 backdrop-blur-md
              border border-white/20
              w-fit
              text-sm
            "
          >
            🚀 Building Digital Excellence
          </div>

          {/* Title */}
          <h1
            className="
              font-bold
              text-[32px] md:text-[44px] lg:text-[64px]
              leading-tight
              bg-gradient-to-r from-white via-[#C0C5EC] to-white
              bg-clip-text text-transparent
            "
          >
            Excellence in Every Detail.
          </h1>

          {/* Description */}
          <p
            className="
              text-[18px] md:text-[20px] lg:text-[24px]
              text-white/80
              max-w-xl
              leading-[32px]
            "
          >
            Every line. Every color. Every interaction designed with purpose,
            refined with care, and delivered with uncompromising quality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary */}
            <button
              className="
                px-8 py-4
                rounded-xl
                bg-[#A36BD2]
                text-white font-semibold
                text-[18px]
                shadow-[0_10px_30px_rgba(163,107,210,0.6)]
                hover:scale-105 active:scale-95
                transition
              "
            >
              Start Your Project →
            </button>

            {/* Secondary */}
            <button
              className="
                px-8 py-4
                rounded-xl
                border border-white/20
                bg-white/5 backdrop-blur-md
                text-white
                text-[18px]
                hover:bg-white/10
                transition
              "
            >
              View Work
            </button>
          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="relative flex justify-center">
          
          {/* Glow Behind Image */}
          <div className="absolute w-[400px] h-[400px] bg-[#A36BD2]/30 blur-[120px]" />

          {/* Image Card */}
          <div
            className="
              relative
              rounded-3xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              p-4
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              hover:scale-105 transition duration-500
            "
          >
            <img
              src="/heroscreen.png"
              alt="dashboard"
              className="w-[300px] md:w-[450px] lg:w-[600px] rounded-2xl"
            />
          </div>

          {/* Floating Card */}
          <div
            className="
              absolute -bottom-6 -left-6
              bg-white/10 backdrop-blur-md
              border border-white/20
              rounded-xl
              px-4 py-3
              text-sm
              shadow-lg
            "
          >
            📊 Real-time Insights
          </div>
        </div>
      </div>
    </section>
  );
}