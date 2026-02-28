import React from "react";

export default function SolutionsSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

  const solutions = [
    {
      title: "Strategic Marketing Solutions",
      desc: "From lead generation and CRM integration to digital project launches and sales tracking, we help developers and brokers convert demand into measurable revenue.",
      icon: "/target.png",
    },
    {
      title: "Technology & Digital Systems",
      desc: "From lead generation and CRM integration to digital project launches and sales tracking, we help developers and brokers convert demand into measurable revenue.",
      icon: "/setting.png",
    },
    {
      title: "Real Estate &Technology",
      desc: "From lead generation and CRM integration to digital project launches and sales tracking, we help developers and brokers convert demand into measurable revenue.",
      icon: "/build.png",
    },
    {
      title: "Smart Property & Facility Support",
      desc: "From lead generation and CRM integration to digital project launches and sales tracking, we help developers and brokers convert demand into measurable revenue.",
      icon: "/setting2.png",
    },
  ];

  return (
    <section className={`w-full text-white ${sectionSpace}`}>
      <div className={container}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-[48px] text-[#CAABE5]">
            Core Solutions
          </h2>

          <p className="mt-3 text-[28px]">
            <span className="font-medium text-white">&And More</span>{" "}
            <span className="text-white/90">
              is not just a marketing agency
            </span>
          </p>
        </header>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {solutions.map((item, index) => (
            <article
              key={index}
              className="
                group relative overflow-hidden
                w-full
                bg-[#4150C5]
                rounded-2xl
                p-6 lg:p-8
                flex flex-col gap-6
                transition duration-500
                hover:-translate-y-2
              "
            >
              {/* Gradient Hover */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-[#A36BD2] to-[#2C3DBF]
                "
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-6 h-full">
                {/* Icon */}
                <div
                  className="
                    w-[72px] h-[72px]
                    rounded-full
                    bg-[#959EDF73]
                    flex items-center justify-center
                    shadow-[inset_0px_4px_16px_#959EDF]
                    transition duration-500
                    group-hover:scale-110
                    group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    font-bold
                    text-[22px] lg:text-[28px]
                    leading-[32px] lg:leading-[40px]
                    text-[#D7C0EC]
                    transition duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-medium
                    text-[16px] lg:text-[20px]
                    leading-[26px] lg:leading-[32px]
                    text-white/90
                    transition duration-300
                    group-hover:text-white
                  "
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}