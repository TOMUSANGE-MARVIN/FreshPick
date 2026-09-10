import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CONTACT } from "../constants";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
      <nav className="fixed top-0 left-0 z-50 md:p-9 p-3 w-full">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="bg-white rounded-full md:p-2 p-1.5 shadow-md">
          <img
            src="/images/freshpick/logo.png"
            alt="FreshPick"
            className="md:h-11 h-9 w-auto"
          />
        </NavLink>

        <div className="hidden md:flex items-center gap-8 bg-white/90 backdrop-blur-sm rounded-full px-8 py-3 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a href={CONTACT.phoneHref} className="hidden md:flex nav-order-btn">
          Order Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center bg-white rounded-full size-11 shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#123b1b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#123b1b"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div className={`mobile-nav-panel ${open ? "mobile-nav-open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? "mobile-nav-link-active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}

        <a
          href={CONTACT.phoneHref}
          onClick={() => setOpen(false)}
          className="nav-order-btn justify-center"
        >
          Order Now
        </a>
      </div>
      </nav>
    </>
  );
};

export default NavBar;
