import React from "react";

export default function AboutSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

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
    <section className={`w-full text-white ${sectionSpace}`}>
      <div className={container}>
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="font-bold text-[48px] text-[#CAABE5]">
            About Us
          </h2>

          <p className="mt-3 text-[28px]">
            <span className="font-medium text-white">&And More</span>{" "}
            <span className="text-white/90">
              is not just a marketing agency
            </span>
          </p>
        </header>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                <div className="flex items-center gap-4">
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
                    <img src={item.icon} alt="" />
                  </div>

                  <h3 className="font-bold text-[22px]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[#C0C5EC] text-[18px] leading-[28px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/about-image.png"
              alt=""
              className="w-[480px] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}