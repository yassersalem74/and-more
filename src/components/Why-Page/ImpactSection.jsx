import React from "react";

export default function ImpactSection() {

  const stats = [
    {
      number: "40+",
      title: "Projects Delivered",
      desc: "Web platforms, marketing systems, and automation solutions.",
    },
    {
      number: "15+",
      title: "Business Systems Built",
      desc: "Custom digital infrastructures for scaling companies.",
    },
    {
      number: "300%",
      title: "Average Growth Potential",
      desc: "Clients experience measurable growth after implementation.",
    },
    {
      number: "24/7",
      title: "System Reliability",
      desc: "High-performance solutions built for continuous operation.",
    },
  ];

  return (
    <section className="relative py-20 text-white overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5A3FC0] to-[#2C3DBF]" />

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12">

        <header className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#CAABE5]">
            Our Impact
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We don’t measure success by projects completed —
            we measure it by systems that drive real growth.
          </p>
        </header>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
              group relative
              p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              text-center
              transition duration-500
              hover:-translate-y-2
              "
            >

              {/* hover gradient */}
              <div className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              bg-gradient-to-br
              from-[#A36BD2]/40
              to-[#969EDF]/30
              transition
              "/>

              <div className="relative z-10">

                <div className="text-[36px] lg:text-[48px] font-bold text-[#CAABE5] group-hover:text-white transition">
                  {item.number}
                </div>

                <h3 className="mt-4 text-[20px] font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/80 text-sm">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}