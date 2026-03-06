import React from "react";

export default function ProcessSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-24";

  const steps = [
    {
      title: "Business Analysis",
      desc: "Understanding your current position, competitive landscape, operational gaps, and untapped growth opportunities.",
      icon: "/process1.png",
      delay: "delay-100",
    },
    {
      title: "Strategy & System Design",
      desc: "Designing an integrated marketing and technology framework that aligns strategy, systems, and execution.",
      icon: "/process2.png",
      delay: "delay-200",
    },
    {
      title: "Implementation",
      desc: "Activating campaigns, deploying digital platforms, and launching systems with structured precision.",
      icon: "/process3.png",
      delay: "delay-300",
    },
    {
      title: "Optimization & Scaling",
      desc: "Monitoring data, refining performance, and scaling results for sustainable long-term growth.",
      icon: "/process4.png",
      delay: "delay-[400ms]",
    },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
      style={{
        backgroundImage: "url('/processbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/80 to-[#2C3DBF]/80" />

      {/* ✨ Animated Waves */}


      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#CAABE5]">
            Our Process
          </h2>

          <p className="mt-3 text-[18px] md:text-[22px] lg:text-[24px] text-white/90">
            From Insight to Scalable Impact
          </p>
        </header>

        {/* ===== Steps ===== */}
        <div className="flex flex-col gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                group relative
                flex flex-col lg:flex-row items-start gap-6 lg:gap-10
                p-4 rounded-xl
                transition duration-500
                hover:bg-white/5 hover:backdrop-blur-md
                opacity-0 translate-y-6
                animate-[fadeUp_0.6s_forwards]
                ${step.delay}
              `}
            >
              {/* ✨ Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#A36BD2]/20 to-transparent rounded-xl" />

              {/* ✨ Vertical Line */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#A36BD2] to-[#969EDF] scale-y-0 group-hover:scale-y-100 transition duration-500 origin-top rounded-full" />

              {/* ===== Icon ===== */}
              <div
                className="
                  relative z-10
                  w-[60px] h-[60px]
                  rounded-full
                  p-3
                  flex items-center justify-center
                  flex-shrink-0
                  bg-gradient-to-b from-[#A36BD2] to-[#969EDF]
                  shadow-[0_10px_30px_rgba(163,107,210,0.5)]
                  transition duration-500
                  group-hover:scale-110 group-hover:rotate-6
                  group-hover:shadow-[0_0_30px_rgba(163,107,210,0.8)]
                "
              >
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* ===== Text ===== */}
              <div className="relative z-10 flex flex-col gap-1">
                <h3
                  className="
                    font-semibold
                    text-[18px] md:text-[24px] lg:text-[28px]
                    text-[#CAABE5]
                    transition duration-300
                    group-hover:text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-[16px] md:text-[18px] lg:text-[20px]
                    leading-[28px] lg:leading-[40px]
                    text-[#EAECF9]
                    transition duration-300
                    group-hover:text-white
                    group-hover:translate-x-1
                  "
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Custom Animation */}
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