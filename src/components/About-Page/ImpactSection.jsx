import React, { useEffect, useState } from "react";

export default function ImpactSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-20 lg:py-28";

  const stats = [
    { value: 120, label: "Projects Delivered", suffix: "+" },
    { value: 85, label: "Client Retention", suffix: "%" },
    { value: 300, label: "Leads Generated", suffix: "K+" },
    { value: 40, label: "Revenue Growth", suffix: "%" },
  ];

  // 🔢 Counter Animation
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.value) {
            newCounts[i] += Math.ceil(stat.value / 40);
          }
          return newCounts;
        });
      }, 30)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#CAABE5]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#969EDF]/20 blur-[120px]" />

      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-[28px] md:text-[40px] lg:text-[52px] text-[#CAABE5]">
            Real Impact. Measurable Growth.
          </h2>

          <p className="mt-4 text-white/80 text-[16px] md:text-[20px]">
            We don’t just build systems — we deliver results you can track.
          </p>
        </header>

        {/* ===== Stats Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                p-6 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                text-center
                transition duration-500
                hover:-translate-y-2
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#A36BD2]/30 to-transparent rounded-2xl" />

              {/* Number */}
              <h3 className="relative z-10 text-[22px] md:text-[28px] lg:text-[36px] font-bold text-white">
                {counts[index]}
                {item.suffix}
              </h3>

              {/* Label */}
              <p className="relative z-10 mt-2 text-white/70">
                {item.label}
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#CAABE5] to-[#969EDF] group-hover:w-1/2 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ===== Extra Creative Block ===== */}
        <div
          className="
            mt-16
            relative
            p-8 lg:p-12
            rounded-3xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            flex flex-col lg:flex-row items-center gap-10
            overflow-hidden
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#A36BD2]/20 to-[#2C3DBF]/20 opacity-50" />

          {/* Text */}
          <div className="relative z-10 flex-1">
            <h3 className="text-[24px] md:text-[32px] font-bold text-white">
              Growth isn’t luck — it’s engineered.
            </h3>

            <p className="mt-3 text-white/80 text-[16px] md:text-[18px]">
              We build systems that align marketing, technology, and execution —
              turning scattered efforts into predictable, scalable results.
            </p>

            <button
              className="
                mt-6
                px-6 py-3
                rounded-xl
                bg-[#A36BD2]
                text-white font-semibold
                hover:scale-105 transition
                cursor-pointer
              "
            >
              See Case Studies →
            </button>
          </div>

          {/* Decorative Shape */}
          <div
            className="
              relative z-10
              w-[200px] h-[200px]
              rounded-full
              bg-gradient-to-br from-[#CAABE5] to-[#969EDF]
              blur-2xl opacity-50
            "
          />
        </div>
      </div>
    </section>
  );
}