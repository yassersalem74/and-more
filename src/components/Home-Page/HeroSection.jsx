import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const whatsappNumber = "201033714471";

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
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                flex items-center justify-center gap-3
                px-8 py-4
                rounded-xl
                text-white font-semibold
                text-[16px] lg:text-[18px]
                bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
                hover:shadow-[0_10px_40px_rgba(163,107,210,0.6)]
                transition duration-300
                overflow-hidden
              "
            >
              <img src="/whatsapp.png" className="w-6 h-6" />
              Start Your Project
            </a>

            {/* Secondary */}
            <Link
              to="/services"
               className="
                group relative
                flex items-center justify-center gap-3
                px-8 py-4
                rounded-xl
                bg-white
                text-[#7B2CBF] font-semibold
                text-[16px] lg:text-[18px]
                hover:bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
                hover:text-white
                hover:shadow-[0_10px_40px_rgba(163,107,210,0.6)]
                
                transition duration-300
                overflow-hidden
                cursor-pointer
              "
            >
              View Our Services
            </Link>
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
