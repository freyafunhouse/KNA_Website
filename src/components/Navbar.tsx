"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "achievements", label: "Achievements" },
  { id: "affiliations", label: "Affiliations" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 group"
          aria-label="KNA Aust Pty Ltd — Home"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="KNA Aust Pty Ltd"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">
              KNA Aust
            </span>
            <span className="text-slate-400 text-xs tracking-widest uppercase">
              Pty Ltd
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 group ${
                  activeSection === link.id
                    ? "text-gold"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${
                    activeSection === link.id ? "w-4/5" : "w-0 group-hover:w-2/3"
                  }`}
                />
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-2 bg-gold text-[#0D1117] text-xs font-bold tracking-widest uppercase rounded hover:bg-gold-light transition-colors duration-200"
            >
              Hire Us
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
            }`}
          />
          <span
            className={`block h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-5"
            }`}
          />
          <span
            className={`block h-0.5 bg-gold transition-all duration-300 ${
              menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden animate-slideDown bg-[#0D1117]/98 backdrop-blur-md border-t border-gold/20">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 border-l-2 ${
                    activeSection === link.id
                      ? "text-gold border-gold bg-gold/5"
                      : "text-slate-400 border-transparent hover:text-slate-100 hover:border-gold/40"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="px-8 pt-3 pb-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 bg-gold text-[#0D1117] text-sm font-bold tracking-widest uppercase rounded hover:bg-gold-light transition-colors duration-200"
              >
                Hire Us Today
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
