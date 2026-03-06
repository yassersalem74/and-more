import React from "react";

export default function ContactInfoSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

  const data = [
    {
      title: "Phone",
      value: "+20 10 33714471",
      icon: "/whitePhone.png",
      gradient: "from-[#A36BD2] to-[#7B2CBF]",
      link: "tel:+201033714471",
    },
    {
      title: "Email",
      value: "info@andmore.com",
      icon: "/whiteEmail.png",
      gradient: "from-[#CAABE5] to-[#A36BD2]",
      link: "mailto:info@andmore.com",
    },
    {
      title: "Location",
      value: "Cairo, Egypt",
      icon: "/whiteLocation.png",
      gradient: "from-[#969EDF] to-[#2C3DBF]",
      link: "https://maps.app.goo.gl/5prE1oCRqsoA6zbbA",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/company/and-more-solutions",
      icon: "/linkedIn.png",
      gradient: "from-[#0A66C2] to-[#2C3DBF]",
      link: "https://www.linkedin.com/company/and-more-solutions/",
    },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#CAABE5]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#969EDF]/20 blur-[120px]" />

      <div className={`relative z-10 ${container}`}>
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

              {/* Value */}
              {/* <p
                className="
                  relative z-10
                  text-[16px] lg:text-[18px]
                  text-white/80
                  break-words
                  transition duration-300
                  group-hover:text-white
                "
              >
                {item.value}
              </p> */}

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