import React from "react";

export default function WhoWeServeSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-24";

  const data = [
    {
      title: "Real Estate Developers",
      desc: "Structured marketing systems for property growth",
      icon: "/processTwo1.png",
    },
    {
      title: "SMEs & Startups",
      desc: "Scalable foundations for emerging businesses",
      icon: "/processTwo2.png",
    },
    {
      title: "Service-Based Businesses",
      desc: "Lead-driven growth for service providers",
      icon: "/processTwo3.png",
    },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >


      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#CAABE5]">
            Who We Serve
          </h2>

          <p className="mt-3 text-[18px] md:text-[22px] lg:text-[24px] text-white/90">
            Tailored solutions for every stage of growth
          </p>
        </header>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                group relative
                flex flex-col items-center text-center
                gap-6
                p-8
                rounded-2xl
                transition duration-500
                hover:-translate-y-3
                hover:bg-white/5
                hover:backdrop-blur-xl
                border border-transparent hover:border-white/20
                opacity-0 translate-y-10
                animate-[fadeUp_0.7s_forwards]
                ${index === 0 ? "delay-100" : ""}
                ${index === 1 ? "delay-200" : ""}
                ${index === 2 ? "delay-300" : ""}
              `}
            >
              {/* ✨ Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#CAABE5]/20 to-transparent rounded-2xl" />

              {/* ===== Icon ===== */}
              <div
                className="
                  relative z-10
                  w-[96px] h-[96px]
                  rounded-full
                  flex items-center justify-center
                  p-4
                  bg-gradient-to-b from-[#969EDF] via-[#CAABE5] to-[#E5D5F2]
                  shadow-[0_10px_30px_rgba(150,158,223,0.5)]
                  transition duration-500
                  group-hover:scale-110 group-hover:rotate-6
                "
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border border-white/30 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition duration-500" />

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* ===== Title ===== */}
              <h3
                className="
                  relative z-10
                  font-bold
                  text-[20px] md:text-[24px] lg:text-[28px]
                  text-[#CAABE5]
                  transition duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </h3>

              {/* ===== Description ===== */}
              <p
                className="
                  relative z-10
                  text-[16px] md:text-[18px] lg:text-[22px]
                  text-[#EAECF9]
                  transition duration-300
                  group-hover:text-white
                  group-hover:translate-y-1
                "
              >
                {item.desc}
              </p>

              {/* Bottom line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-gradient-to-r from-[#CAABE5] to-[#969EDF]
                  group-hover:w-1/2
                  transition-all duration-500
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}