import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseText =
    "font-['Roboto'] font-semibold text-[16px] lg:text-[18px] whitespace-nowrap relative transition";

  const navLink = ({ isActive }) =>
    `${baseText} px-4 py-2 ${
      isActive ? "text-white" : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* 🔥 Glass Navbar */}
        <nav
          className="
            flex items-center justify-between
            px-4 lg:px-6 py-3
            rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.3)]
          "
        >
          {/* ===== Logo ===== */}
          <NavLink
            to="/"
            className="
              text-white font-bold text-lg lg:text-xl
              tracking-wide
            "
          >
            & More
          </NavLink>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex items-center gap-8">
            {["/", "/about", "/services", "/why"].map((path, i) => {
              const labels = ["Home", "About", "Services", "Why & More"];

              return (
                <NavLink key={i} to={path} className={navLink}>
                  {labels[i]}

                  {/* ✨ Animated Underline */}
                  <span
                    className="
                      absolute left-0 -bottom-1 w-0 h-[2px]
                      bg-gradient-to-r from-white to-[#C0C5EC]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </NavLink>
              );
            })}
          </div>

          {/* ===== CTA ===== */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="
                relative overflow-hidden
                px-6 py-2.5
                rounded-xl
                bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
                text-white font-semibold
                shadow-[0_10px_30px_rgba(163,107,210,0.6)]
                hover:scale-105 active:scale-95
                transition
              "
            >
              Contact Us
            </NavLink>
          </div>

          {/* ===== Mobile ===== */}
          <div className="lg:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost text-white text-2xl"
            >
              ☰
            </label>

            <ul
              tabIndex={0}
              className="
                menu dropdown-content mt-3 p-4 gap-2
                bg-white/10 backdrop-blur-xl
                border border-white/10
                rounded-2xl w-64
                shadow-xl
              "
            >
              <li>
                <NavLink to="/" className={navLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLink}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={navLink}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/why" className={navLink}>
                  Why & More
                </NavLink>
              </li>

              <div className="divider my-1" />

              <li>
                <NavLink
                  to="/contact"
                  className="
                    text-center
                    bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF]
                    text-white
                    px-4 py-2
                    rounded-xl
                    font-semibold
                  "
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}