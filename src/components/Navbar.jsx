import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseText =
    "font-['Roboto'] font-semibold text-[16px] lg:text-[18px] whitespace-nowrap transition rounded-lg";

  const navLink = ({ isActive }) =>
    `${baseText} px-4 py-2 ${
      isActive
        ? "bg-white text-[#7B2CBF]"
        : "text-white hover:bg-white/20 hover:text-white"
    }`;

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="mx-auto px-4 lg:px-12">
        {/* ===== Glass Navbar ===== */}
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
            className="text-white font-bold text-lg lg:text-xl tracking-wide"
          >
            & More
          </NavLink>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/" className={navLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>
            <NavLink to="/services" className={navLink}>
              Services
            </NavLink>
            <NavLink to="/why" className={navLink}>
              Why & More
            </NavLink>
          </div>

          {/* ===== CTA (Hero Style) ===== */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="
                px-6 py-3
                rounded-xl
                bg-[#A36BD2]
                text-white font-semibold
                text-[16px] lg:text-[18px]
                shadow-[0_10px_30px_rgba(163,107,210,0.6)]
                hover:scale-105 active:scale-95
                transition
              "
            >
              Contact Us →
            </NavLink>
          </div>

          {/* ===== Mobile Burger ===== */}
          <div className="lg:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost text-white text-2xl"
            >
              ☰
            </label>

            {/* ===== Mobile Menu ===== */}
            <ul
              tabIndex={0}
              className="
                menu dropdown-content mt-3 p-4 gap-2
                bg-white text-[#7B2CBF]
                rounded-2xl w-64
                shadow-xl
              "
            >
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/why", label: "Why & More" },
              ].map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `
                      px-4 py-2 rounded-lg transition text-center
                      ${
                        isActive
                          ? "bg-gradient-to-r from-[#A36BD2] to-[#7B2CBF] text-white"
                          : "hover:bg-[#A36BD2] hover:text-white"
                      }
                    `
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              
              <div className="divider my-1" />

              {/* CTA */}
              <li>
                <NavLink
                  to="/contact"
                  className="
                    text-center
                    color-[#7B2CBF]
                    border-1
                    border-[#7B2CBF]
                    px-4 py-2
                    rounded-xl
                    font-semibold
                    hover:opacity-90
                  "
                >
                  Contact Us →
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}