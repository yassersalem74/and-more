import React from "react";

export default function ContactUsSection() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";
  const sectionSpace = "py-16 lg:py-24";

  const whatsappNumber = "201033714471";

 

  return (
    <section className={`relative w-full text-white ${sectionSpace} overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A36BD2] via-[#7B2CBF] to-[#2C3DBF]" />

      {/* Glow blobs */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#CAABE5]/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#969EDF]/30 blur-[120px] animate-pulse delay-200" />

      <div className={`relative z-10 ${container}`}>
        {/* CARD */}
        <div
          className="
          group relative
          w-full
          rounded-2xl
          border border-[#ABB1E5]
          bg-[#EAECF91A]
          backdrop-blur-[16px]
          shadow-[2px_4px_16px_rgba(0,0,0,0.4)]
          p-6 lg:p-10
          flex flex-col gap-10
          transition duration-500
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        "
        >
          {/* Gradient Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#CAABE5]/10 to-transparent rounded-2xl" />

          {/* HEADER */}
          <header className="text-center relative z-10">
            <h2 className="text-[22px] md:text-[28px] lg:text-[36px] font-bold text-[#CAABE5] group-hover:text-white transition">
              Let’s Build a Growth System for Your Business
            </h2>

            <p className="mt-3 text-white/80 text-[16px] md:text-[18px]">
              Built to grow as your business expands.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-10 relative z-10">
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col gap-6">
              {[
                { placeholder: "Email", icon: "/purpleEmail.png" },
                { placeholder: "Phone", icon: "/purplePhone.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  group/input relative
                  flex items-center gap-4
                  h-[56px] lg:h-[64px]
                  px-4 rounded-xl
                  bg-[#E5D5F2]
                  transition
                  hover:scale-[1.02]
                  focus-within:scale-[1.03]
                "
                >
                  <img
                    src={item.icon}
                    className="w-6 h-6 transition group-hover/input:scale-110 group-hover/input:rotate-6"
                  />

                  <input
                    type="text"
                    placeholder={item.placeholder}
                    className="
                    bg-transparent outline-none w-full
                    text-[#7B2CBF]
                    placeholder:text-[#A36BD2]
                  "
                  />

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A36BD2] group-focus-within/input:w-full transition-all duration-500" />
                </div>
              ))}

              {/* Message */}
              <div
                className="
                group/input relative
                flex gap-4
                h-[100px]
                px-4 py-2
                rounded-xl
                bg-[#E5D5F2]
              "
              >
                <img src="/purplMessage.png" className="w-6 h-6 mt-2" />

                <textarea
                  placeholder="Message"
                  className="
                  bg-transparent outline-none w-full resize-none
                  text-[#7B2CBF]
                  placeholder:text-[#A36BD2]
                "
                />

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A36BD2] group-focus-within/input:w-full transition-all duration-500" />
              </div>

              {/* WHATSAPP BUTTON */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group relative
                flex items-center justify-center gap-3
                px-8 py-4
                rounded-xl
                text-white font-semibold
                text-[16px] lg:text-[18px]
                bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
                shadow-[0_10px_40px_rgba(163,107,210,0.6)]
                hover:scale-105 active:scale-95
                transition duration-300
                overflow-hidden
              "
              >
                <img src="/whatsapp.png" className="w-6 h-6" />
                Start Your Project
              </a>

        
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col justify-center gap-8">
              {[
                { text: "Cairo, Egypt", icon: "/whiteLocation.png" },
                { text: "+20 10 33714471", icon: "/whitePhone.png" },
                { text: "info@andmore.com", icon: "/whiteEmail.png" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  group flex items-center gap-6
                  transition duration-300
                  hover:translate-x-3
                "
                >
                  <div
                    className="
                    relative
                    w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]
                    rounded-full
                    bg-[#2C3DBF]
                    flex items-center justify-center
                    transition
                    group-hover:scale-110
                    group-hover:shadow-[0_0_30px_rgba(44,61,191,0.8)]
                  "
                  >
                    <img src={item.icon} className="w-6 lg:w-8 relative z-10" />
                  </div>

                  <p className="text-[18px] md:text-[22px] lg:text-[28px] text-[#D7C0EC] font-medium group-hover:text-white transition">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}