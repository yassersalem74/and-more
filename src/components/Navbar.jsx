import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseText =
    "font-['Roboto'] font-semibold text-[18px] lg:text-[24px] whitespace-nowrap transition";

  const navLink = ({ isActive }) =>
    `${baseText} px-5 h-full flex items-center rounded-xl ${
      isActive
        ? "bg-white/75 text-[#2C3DBF]"
        : "text-white hover:bg-white/75 hover:text-[#2C3DBF]"
    }`;

  return (
    <header
      className="
        sticky top-0 z-50
        bg-gradient-to-b from-[#7B2CBF]/80 to-[#2C3DBF]/80
        backdrop-blur-md
      "
    >
      <nav className=" lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* ===== Burger (Mobile Only) ===== */}
          <div className="lg:hidden dropdown dropdown-start order-1">
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
                menu dropdown-content mt-3 p-4 shadow
                bg-[#A36BD2]/90 backdrop-blur-[16px]
                rounded-2xl w-64 gap-2
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
                    bg-white text-[#2C3DBF]
                    text-center px-4 py-2
                    rounded-xl font-semibold
                  "
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ===== Logo ===== */}
          <NavLink
            to="/"
            className="text-white font-bold text-xl order-2 lg:order-1 px-2"
          >
            & More
          </NavLink>

          {/* ===== Desktop Menu ===== */}
          <div
            className="
              hidden lg:flex items-center gap-6
              bg-[#A36BD2]/80 backdrop-blur-[16px]
               h-14 rounded-2xl order-2
            "
          >
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

          {/* ===== Contact Button ===== */}
          <div className="hidden lg:block order-3">
            <NavLink
              to="/contact"
              className="
                bg-white/30 text-white
                px-6 h-14 flex items-center
                rounded-2xl
                font-semibold text-[20px]
                hover:bg-white hover:text-[#2C3DBF]
                transition
              "
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}