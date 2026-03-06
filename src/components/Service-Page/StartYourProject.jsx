import React from "react";

export default function StartYourProject() {
  const whatsappNumber = "201033714471"; 

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">


      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/10 backdrop-blur-xl
            shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            p-8 lg:p-14
            text-center
            flex flex-col items-center gap-8
          "
        >
          {/* ✨ Animated Shine */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_3s_linear_infinite]" />

          {/* 🔥 Title */}
          <h2
            className="
              font-bold
              text-[28px] md:text-[36px] lg:text-[48px]
              bg-gradient-to-r from-white via-[#CAABE5] to-white
              bg-clip-text text-transparent
              tracking-wide
            "
          >
            START YOUR PROJECT TODAY
          </h2>

          {/* 📝 Description */}
          <p className="text-white/80 text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl leading-relaxed">
            Get in touch with us now for a free consultation and a personalized
            project quote.
          </p>

          {/* 🚀 CTA BUTTON */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative
              flex items-center gap-3
              px-8 py-4
              rounded-xl
              text-white font-semibold
              text-[16px] lg:text-[18px]
              bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
              shadow-[0_10px_40px_rgba(163,107,210,0.6)]
              hover:scale-105 active:scale-95
              transition duration-300
              overflow-hidden
            "
          >
            {/* ✨ Glow Hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#CAABE5]/40 to-transparent blur-xl" />

            {/* Icon */}
            <img
              src="/whatsapp.png"
              alt="whatsapp"
              className="w-5 h-5 relative z-10 group-hover:rotate-12 transition"
            />

            {/* Text */}
            <span className="relative z-10">
              Start Your Project →
            </span>
          </a>

          {/* ✨ Floating Light */}
          <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 blur-2xl rounded-full animate-pulse" />
        </div>
      </div>

      {/* ✨ Keyframe */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
}