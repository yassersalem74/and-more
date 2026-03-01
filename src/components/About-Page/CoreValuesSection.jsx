import React from "react";

export default function CoreValuesSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

  const values = [
    {
      title: "Passion",
      desc: "We are passionate about what we do and committed to delivering exceptional results.",
      icon: "/whiteHeart.png",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Excellence",
      desc: "We strive for excellence in every project and never settle for mediocrity.",
      icon: "/target.png",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Innovation",
      desc: "We embrace innovation and constantly seek new ways to solve problems.",
      icon: "/light.png",
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency, and respect in all our relationships.",
      icon: "/shieldwhite.png",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >
      {/* 🌈 MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF] via-[#5A3FC0] to-[#2C3DBF]" />

      {/* ✨ GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#CAABE5]/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#969EDF]/30 blur-[120px]" />

      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-14">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#CAABE5]">
            Our Core Values
          </h2>

          <p className="mt-3 text-[16px] md:text-[18px] lg:text-[20px] text-white/80 max-w-2xl mx-auto">
            The values that guide our work and shape our culture.
          </p>
        </header>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                p-8
                flex flex-col items-center text-center gap-6
                transition duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.5)]
                cursor-pointer
              "
            >
              {/* 🔥 UNIQUE GRADIENT PER CARD */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br ${item.gradient}
                `}
              />

              {/* ✨ Glow */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* ===== Icon ===== */}
              <div
                className="
                  relative z-10
                  w-[72px] h-[72px]
                  rounded-xl
                  flex items-center justify-center
                  bg-white/10
                  backdrop-blur-md
                  transition duration-500
                  group-hover:scale-110 group-hover:rotate-6
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain
                  transition duration-500
                  group-hover:brightness-0 group-hover:invert"
                />
              </div>

              {/* ===== Title ===== */}
              <h3
                className="
                  relative z-10
                  font-bold
                  text-[18px] lg:text-[22px]
                  tracking-wide
                  text-[#CAABE5]
                  transition duration-300
                  group-hover:text-white
                "
              >
                {item.title.toUpperCase()}
              </h3>

              {/* ===== Description ===== */}
              <p
                className="
                  relative z-10
                  text-[14px] lg:text-[16px]
                  text-white/80
                  leading-relaxed
                  transition duration-300
                  group-hover:text-white
                "
              >
                {item.desc}
              </p>

              {/* ✨ Animated Bottom Line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-white
                  group-hover:w-1/2
                  transition-all duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}