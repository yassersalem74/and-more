import React from "react";

export default function ContactInfoSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

  const data = [
    {
      title: "Phone",
      icon: "/whitePhone.png",
      gradient: "from-[#A36BD2] to-[#7B2CBF]",
      link: "tel:+201033714471",
    },
    {
      title: "Email",
      icon: "/whiteEmail.png",
      gradient: "from-[#CAABE5] to-[#A36BD2]",
      link: "mailto:info@andmore.com",
    },
    {
      title: "Location",
      icon: "/whiteLocation.png",
      gradient: "from-[#969EDF] to-[#2C3DBF]",
      link: "https://maps.app.goo.gl/5prE1oCRqsoA6zbbA",
    },
    {
      title: "LinkedIn",
      icon: "/linkedIn.png",
      gradient: "from-[#0A66C2] to-[#2C3DBF]",
      link: "https://www.linkedin.com/company/and-more-solutions/",
    },
  ];

  return (
    <section className={`relative w-full text-white ${sectionSpace}`}>
      <div className={`relative z-10 ${container}`}>

        {/* ===== Section Title ===== */}
        <header className="text-center mb-14">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#CAABE5]">
            Get In Touch
          </h2>

          <p className="mt-3 text-[16px] md:text-[18px] text-white/80 max-w-xl mx-auto">
            Connect with our team to discuss your project, partnerships,
            or business opportunities.
          </p>

          {/* divider */}
          <div className="mx-auto mt-6 w-20 h-[3px] bg-gradient-to-r from-[#CAABE5] to-[#969EDF] rounded-full" />
        </header>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                p-8
                flex flex-col items-center text-center gap-6
                transition duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                cursor-pointer
              "
            >
              {/* Gradient Hover */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br ${item.gradient}
                `}
              />

              {/* Glow */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Icon */}
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
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
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

              {/* Bottom line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-white
                  group-hover:w-1/2
                  transition-all duration-500
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}