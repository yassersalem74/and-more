import React from "react";

export default function OurTeamSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-24";

  const team = [
    {
      name: "Viancy Gaddam",
      role: "Software Engineer",
      img: "/teamMember.png",
    },
    {
      name: "Viancy Gaddam",
      role: "UI/UX Designer",
      img: "/teamMember.png",
    },
    {
      name: "Viancy Gaddam",
      role: "Frontend Developer",
      img: "/teamMember.png",
    },
    {
      name: "Viancy Gaddam",
      role: "Backend Developer",
      img: "/teamMember.png",
    },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >


      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <p className="text-white/70 text-sm md:text-base">
            & And more team
          </p>

          <h2 className="font-bold text-[28px] md:text-[40px] lg:text-[56px] mt-2">
            Meet the team
          </h2>
        </header>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="
                group relative
                flex flex-col items-center text-center
                p-6 rounded-2xl
                transition duration-500
                hover:-translate-y-3
                bg-white/5 backdrop-blur-xl
                border border-white/10
              "
            >
              {/* ✨ Glow Hover */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-b from-[#A36BD2]/20 to-transparent
                  rounded-2xl
                "
              />

              {/* ===== Image ===== */}
              <div
                className="
                  relative z-10
                  w-[100px] h-[100px] md:w-[120px] md:h-[120px]
                  rounded-full
                  overflow-hidden
                  transition duration-500
                  group-hover:scale-105
                  group-hover:shadow-[0_10px_40px_rgba(163,107,210,0.6)]
                "
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ===== Name ===== */}
              <h3 className="relative z-10 mt-4 font-semibold text-[18px] md:text-[20px]">
                {member.name}
              </h3>

              {/* ===== Role ===== */}
              <p className="relative z-10 text-white/70 text-sm md:text-base mt-1">
                {member.role}
              </p>

              {/* ===== Social Icons ===== */}
              <div className="flex gap-3 mt-4">
                {/* LinkedIn */}
                <div
                  className="
                    group/icon relative
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    overflow-hidden
                    bg-white/20
                    transition duration-500
                    cursor-pointer
                  "
                >
                  {/* Gradient */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0 group-hover/icon:opacity-100
                      transition duration-500
                      bg-gradient-to-br from-[#A36BD2] to-[#2C3DBF]
                    "
                  />

                  {/* Glow */}
                  <div
                    className="
                      absolute -top-3 -left-3
                      w-12 h-12
                      bg-white/30
                      blur-xl
                      opacity-0 group-hover/icon:opacity-100
                      transition duration-500
                    "
                  />

                  <img
                    src="/linkedIn.png"
                    className="
                      relative z-10 w-4 h-4
                      transition duration-300
                      group-hover/icon:scale-110
                      group-hover/icon:brightness-125
                    "
                  />
                </div>

                {/* X */}
                <div
                  className="
                    group/icon relative
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    overflow-hidden
                    bg-white/20
                    transition duration-500
                    cursor-pointer
                  "
                >
                  {/* Gradient */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0 group-hover/icon:opacity-100
                      transition duration-500
                      bg-gradient-to-br from-[#A36BD2] to-[#2C3DBF]
                    "
                  />

                  {/* Glow */}
                  <div
                    className="
                      absolute -top-3 -left-3
                      w-12 h-12
                      bg-white/30
                      blur-xl
                      opacity-0 group-hover/icon:opacity-100
                      transition duration-500
                    "
                  />

                  <img
                    src="/x.png"
                    className="
                      relative z-10 w-4 h-4
                      transition duration-300
                      group-hover/icon:scale-110
                      group-hover/icon:brightness-125
                    "
                  />
                </div>
              </div>

              {/* ✨ Bottom line animation */}
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
    </section>
  );
}