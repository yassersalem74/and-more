import React from "react";

export default function Tools() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-24";

  const tools = [
      { name: "Figma", icon: "/Figma-logo.svg", color: "from-pink-500 to-purple-500" },
    { name: "React", icon: "/React.png", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "/nextjs.jpg", color: "from-white to-gray-400" },
    { name: "Node.js", icon: "/nodejs.jpg", color: "from-green-400 to-emerald-600" },
    { name: "JavaScript", icon: "/javascrip.png", color: "from-yellow-300 to-yellow-600" },
    { name: "TypeScript", icon: "/typescript.jpg", color: "from-blue-500 to-indigo-600" },
    { name: "Flutter", icon: "/flutter.jpg", color: "from-sky-400 to-cyan-500" },
    { name: "React Native", icon: "/React.png", color: "from-cyan-400 to-blue-500" },
  ];

  return (
    <section
      className={`relative w-full text-white ${sectionSpace} overflow-hidden`}
    >
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#5A3FC0] to-[#A36BD2]" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-[#CAABE5]/30 blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-[#969EDF]/30 blur-[150px] animate-pulse delay-200" />

      <div className={`relative z-10 ${container}`}>
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#CAABE5]">
            Technologies We Use
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] text-white/80 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, high-performance solutions.
          </p>
        </header>

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                p-6
                flex flex-col items-center justify-center gap-4
                transition duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                cursor-pointer
              "
            >
              {/* 🔥 Gradient Hover */}
              <div
                className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl
                  transition duration-500
                  bg-gradient-to-br ${tool.color}
                `}
              />

              {/* ✨ Glow */}
              <div className="absolute w-40 h-40 bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* ===== Icon ===== */}
              <div
                className="
                  relative z-10
                  w-[70px] h-[70px]
                  flex items-center justify-center
                  rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  transition duration-500
                  group-hover:scale-110 group-hover:rotate-6
                "
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* ===== Name ===== */}
              <p
                className="
                  relative z-10
                  text-[14px] md:text-[16px] lg:text-[18px]
                  font-semibold
                  tracking-wide
                  text-[#CAABE5]
                  transition duration-300
                  group-hover:text-white
                "
              >
                {tool.name.toUpperCase()}
              </p>

              {/* ✨ Bottom Line */}
              <div
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-white
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