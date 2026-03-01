import React from "react";

export default function Footer() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";

  return (
    <footer className="relative w-full text-white overflow-hidden pt-20 pb-10">
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#7B2CBF] to-[#A36BD2]" />

      {/* ✨ Glow blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#CAABE5]/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#969EDF]/30 blur-[120px]" />

      <div className={`relative z-10 ${container}`}>
        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* ===== BRAND ===== */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[22px] font-bold text-[#CAABE5]">
              & More
            </h2>

            <p className="text-white/80 leading-[28px]">
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>

            <p className="text-white/50 text-sm">
              © 2026 & More. All rights reserved.
            </p>
          </div>

          {/* ===== CONTACT ===== */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Get in Touch
            </h3>

            {[
              {
                text: "8819 Ohio St. South Gate, CA 90280",
                icon: "📍",
              },
              {
                text: "ourstudio@hello.com",
                icon: "✉️",
              },
              {
                text: "+1 386-688-3295",
                icon: "📞",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-4
                  group
                  transition duration-300
                  hover:translate-x-2
                "
              >
                <span className="text-xl group-hover:scale-110 transition">
                  {item.icon}
                </span>

                <p className="text-white/80 group-hover:text-white transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ===== SOCIAL ===== */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Connect
            </h3>

            <div className="flex gap-4">
              {["Dr", "Be", "Ig", "Tw"].map((item, i) => (
                <div
                  key={i}
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-white/10
                    backdrop-blur
                    cursor-pointer
                    transition duration-300
                    hover:scale-110
                    hover:bg-[#A36BD2]
                    hover:shadow-[0_0_20px_rgba(163,107,210,0.8)]
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-white/70 leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Join a Newsletter
            </h3>

            <div className="relative group">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="
                  w-full
                  h-[50px]
                  px-4
                  rounded-xl
                  bg-white/90
                  text-[#2C3DBF]
                  outline-none
                "
              />

              {/* glow underline */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A36BD2] group-focus-within:w-full transition-all duration-500" />
            </div>

            <button
              className="
                h-[50px]
                rounded-xl
                bg-[#A36BD2]
                text-white font-semibold
                hover:scale-105 active:scale-95
                transition
                shadow-[0_10px_30px_rgba(163,107,210,0.6)]
                relative overflow-hidden
              "
            >
              <span className="relative z-10">Subscribe</span>

              {/* shine */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700" />
            </button>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          Designed & Built with ❤️ by &More
        </div>
      </div>
    </footer>
  );
}