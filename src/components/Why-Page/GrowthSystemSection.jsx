import React from "react";

export default function GrowthSystemSection() {
  const items = [
    {
      title: "Strategy",
      desc: "Market research, positioning, and growth roadmap.",
    },
    {
      title: "Marketing",
      desc: "Demand generation, funnels, and conversion optimization.",
    },
    {
      title: "Technology",
      desc: "Scalable platforms, automation, and integrations.",
    },
    {
      title: "Analytics",
      desc: "Performance insights and data-driven optimization.",
    },
    {
      title: "Automation",
      desc: "Smart workflows to reduce manual operations.",
    },
    {
      title: "Scaling",
      desc: "Infrastructure designed for long-term growth.",
    },
  ];

  return (
    <section className="relative py-20 text-white overflow-hidden">



      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12">

        <header className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-[#CAABE5]">
            Growth System Architecture
          </h2>

          <p className="text-white/80 mt-4 max-w-3xl mx-auto">
            We design integrated systems where marketing, technology,
            and automation work together to drive sustainable growth.
          </p>
        </header>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              group relative
              p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
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
                to-[#969EDF]/20
                transition
              "/>

              <div className="relative z-10">

                <h3 className="text-[22px] font-bold text-[#CAABE5] group-hover:text-white transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/80">
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