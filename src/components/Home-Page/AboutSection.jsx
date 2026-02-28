import React from "react";

export default function AboutSection() {
  const aboutData = [
    {
      title: "Who We Are ?",
      desc: (
        <>
          <span className="font-bold text-white">&And More</span>{" "}
          is a marketing and technology solutions company dedicated to building
          structured growth systems for modern businesses.
        </>
      ),
      icon: "/puzzle.png",
    },
    {
      title: "Our Vision",
      desc: "To be a leading regional partner in marketing and technology transformation.",
      icon: "/rocket.png",
    },
    {
      title: "Our Mission",
      desc: "To empower businesses through scalable marketing strategies and intelligent digital systems that deliver measurable, sustainable growth.",
      icon: "/light.png",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-12 py-16 text-white">
      {/* ===== Header ===== */}
      <header className="text-center mb-12">
        <h2 className="font-['Roboto'] font-bold text-[48px] text-[#CAABE5]">
          About Us
        </h2>

        <p className="mt-3 text-[28px] font-['Roboto']">
          <span className="font-medium text-white">&And More</span>{" "}
          <span className="font-normal text-white/90">
            is not just a marketing agency
          </span>
        </p>
      </header>

      {/* ===== Content ===== */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* ===== LEFT SIDE ===== */}
        <div className="flex flex-col gap-8">
          {aboutData.map((item, index) => (
            <article
              key={index}
              className="
                group flex flex-col gap-3
                transition duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                rounded-xl p-2
              "
            >
              {/* Top Row */}
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div
                  className="
                    bg-[#A36BD2]
                    w-[52px] h-[52px]
                    rounded-lg
                    flex items-center justify-center
                    p-[10px]
                    transition duration-300
                    group-hover:scale-110 group-hover:rotate-6
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    font-bold text-[22px] leading-[32px]
                    transition duration-300
                    group-hover:text-[#FFFFFF]
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  text-[#C0C5EC] text-[18px] leading-[28px]
                  transition duration-300
                  group-hover:text-white
                  group-hover:translate-x-1
                "
              >
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* ===== RIGHT SIDE IMAGE ===== */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/about-image.png"
            alt="About visual"
            className="
              w-[260px] md:w-[360px] lg:w-[480px]
              rounded-3xl
              object-cover
              transition duration-500
              hover:scale-105
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
            "
          />
        </div>
      </div>
    </section>
  );
}