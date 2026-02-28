import React, { useRef } from "react";

export default function WhyChooseSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-20";

  const scrollRef = useRef(null);

  const data = [
    {
      title: "Scalable Systems",
      desc: "Built to grow as your business expands.",
      img: "/scalable.png",
    },
    {
      title: "Marketing & Technology",
      desc: "Built to grow as your business expands.",
      img: "/marketing.png",
    },
    {
      title: "Performance-Based",
      desc: "Built to grow as your business expands.",
      img: "/performance.png",
    },
  ];

  const cards = [...data, ...data];

  const scrollNext = () => {
    scrollRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    scrollRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  return (
    <section className={`w-full text-white ${sectionSpace}`}>
      <div className={container}>
        {/* ===== Header ===== */}
        <header className="text-center mb-14">
          <h2 className="font-bold text-[48px] text-[#CAABE5]">
            Why Choose &And More?
          </h2>

          <p className="mt-3 text-[20px] text-white/90">
            built to generate consistent, scalable business growth.
          </p>
        </header>

        {/* ===== Cards Row ===== */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={scrollPrev}
            className="
    absolute -left-10 lg:-left-12
    top-1/2 -translate-y-1/2 z-10
    w-[80px] h-[80px]
    rounded-2xl
    bg-[#F2EAF940]
    backdrop-blur-[8px]
    flex items-center justify-center
    shadow-lg
    hover:scale-110 transition
    cursor-pointer
  "
          >
            <img src="/arrow.png" alt="prev" className="w-6 h-6 rotate-180" />
          </button>

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              no-scrollbar
            "
          >
            {cards.map((item, index) => (
              <article
                key={index}
                className="
    group relative overflow-hidden
    min-w-[320px] lg:min-w-[350px]
    h-[404px]
    flex-shrink-0
    rounded-2xl
    p-4
    border border-[#ABB1E5]
    bg-[#EAECF91A]
    backdrop-blur-[16px]
    shadow-[2px_4px_16px_rgba(0,0,0,0.25)]
    flex flex-col justify-between
    transition duration-500
    
  "
              >
                {/* 🔥 Gradient Overlay (SAME AS SOLUTIONS) */}
                <div
                  className="
      absolute inset-0
      opacity-0 group-hover:opacity-100
      transition duration-500
      bg-gradient-to-br from-[#A36BD2] to-[#2C3DBF]
    "
                />

                {/* ✨ Light Glow */}
                <div
                  className="
      absolute -top-20 -left-20
      w-60 h-60
      bg-white/20
      blur-3xl
      opacity-0 group-hover:opacity-100
      transition duration-700
    "
                />

                {/* ===== Content ===== */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Text */}
                  <div>
                    <h3
                      className="
          font-semibold text-[24px] lg:text-[28px]
          text-[#EAECF9]
          transition duration-300
          group-hover:text-white
        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
          text-[#C0C5EC] text-[18px] lg:text-[20px] mt-2
          transition duration-300
          group-hover:text-white
        "
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
          w-[160px] lg:w-[200px]
          object-contain
          transition duration-500
          group-hover:scale-110
          group-hover:rotate-3
        "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollNext}
            className="
    absolute -right-10 lg:-right-12
    top-1/2 -translate-y-1/2 z-10
    w-[80px] h-[80px]
    rounded-2xl
    bg-[#F2EAF940]
    backdrop-blur-[8px]
    flex items-center justify-center
    shadow-lg
    hover:scale-110 transition
    cursor-pointer
  "
          >
            <img src="/arrow.png" alt="next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
