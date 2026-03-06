import React from "react";

export default function Footer() {
  const container = "max-w-7xl mx-auto px-4 lg:px-12";

  const socials = [
    {
      name: "LinkedIn",
      icon: "/LinkedIngray.png",
      url: "https://www.linkedin.com/company/and-more-solutions/",
      gradient: "from-[#0A66C2] to-[#0A66C2]",
    },
    {
      name: "Instagram",
      icon: "/Instagram.png",
      url: "https://www.instagram.com/andmoresolutions?igsh=dWhiYWNoY3NsYWtv",
      gradient: "from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    },
    {
      name: "Facebook",
      icon: "/Facebook.png",
      url: "https://www.facebook.com/share/1BYwiadssK/",
      gradient: "from-[#1877F2] to-[#0d5bd3]",
    },
    {
      name: "WhatsApp",
      icon: "/whatsapp.png",
      url: "https://wa.me/201033714471",
      gradient: "from-[#25D366] to-[#128C7E]",
    },
  ];

  return (
    <footer className="relative w-full text-white overflow-hidden pt-20 pb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C3DBF] via-[#7B2CBF] to-[#A36BD2]" />

      {/* Glow blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#CAABE5]/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#969EDF]/30 blur-[120px]" />

      <div className={`relative z-10 ${container}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold text-[#CAABE5]">
              &More
            </h2>

            <p className="text-white/80 leading-[28px]">
              &More is a marketing and technology solutions company focused on
              building structured, scalable growth systems for modern businesses.
            </p>

            <p className="text-white/50 text-sm">
              © 2026 &More. All rights reserved.
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Get in Touch
            </h3>

            {[
              {
                text: "Cairo, Egypt",
                icon: "/whiteLocation.png",
              },
              {
                text: "info@andmore.com",
                icon: "/whiteEmail.png",
              },
              {
                text: "+20 10 33714471",
                icon: "/whitePhone.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                flex items-center gap-4
                group
                transition duration-300
                hover:translate-x-2
              "
              >
                <img
                  src={item.icon}
                  className="w-5 h-5 group-hover:scale-110 transition"
                />

                <p className="text-white/80 group-hover:text-white transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Connect With Us
            </h3>

            <div className="flex gap-4 flex-wrap">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  group relative
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  bg-white/10
                  backdrop-blur
                  transition duration-300
                  hover:scale-110
                  overflow-hidden
                "
                >
                  {/* gradient hover */}
                  <div
                    className={`
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition
                    bg-gradient-to-r ${social.gradient}
                  `}
                  />

                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 relative z-10"
                  />
                </a>
              ))}
            </div>

            <p className="text-white/70 leading-[26px]">
              Follow us to explore insights about marketing systems,
              digital technology, and scalable business growth.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#CAABE5] font-semibold text-[18px]">
              Join Our Newsletter
            </h3>

            <div className="relative group">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="
                w-full
                h-[50px]
                px-4
                rounded-xl
                bg-white/90
                text-[#2C3DBF]
                outline-none
              "
              />

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#A36BD2] group-focus-within:w-full transition-all duration-500" />
            </div>

            <button
              className="
              h-[50px]
              rounded-xl
              bg-[#A36BD2]
              text-white font-semibold
              hover:scale-105 active:scale-95
              transition
              shadow-[0_10px_30px_rgba(163,107,210,0.6)]
              relative overflow-hidden
              cursor-pointer
            "
            >
              <span className="relative z-10">Subscribe</span>

              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-700" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          Designed & Built with ❤️ by &More
        </div>
      </div>
    </footer>
  );
}