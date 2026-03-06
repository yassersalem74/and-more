import React from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "./../../data/ServiceDetails";

export default function OurProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 lg:py-24 text-white overflow-hidden">


      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-12">
        <h2 className="text-center text-[32px] lg:text-[48px] font-bold text-[#CAABE5] mb-16">
          Services We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {servicesData.map((item) => (
            <article
              key={item.id}
              className="
                group relative overflow-hidden
                w-full
                bg-[#4150C5]
                rounded-2xl
                p-6 lg:p-8
                flex flex-col justify-between
                gap-6
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
              <div className="relative z-10 flex flex-col gap-6">
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
                    text-[16px] lg:text-[20px]
                    text-white/90
                    transition duration-300
                    group-hover:text-white
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* ===== CTA BUTTON ===== */}
              <div className="relative z-10 mt-4">
                <button
                  onClick={() => navigate(`/services/${item.id}`)}
                  className="
                    group/btn
                    w-fit
                    px-6 py-3
                    rounded-xl
                    border border-white/20
                    text-white font-medium
                    flex items-center gap-2
                    transition duration-300
                    hover:bg-white hover:text-[#2C3DBF]
                    hover:scale-105
                    cursor-pointer
                  "
                >
                  Explore
                  <span className="transition group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {/* ✨ Bottom Glow Line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-white
                  group-hover:w-1/2
                  transition-all duration-500
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}