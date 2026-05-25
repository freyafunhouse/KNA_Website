"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "Professional Services" },
  { href: "/equipment-hire", label: "Equipment Hire" },
  { href: "/labour-hire", label: "Labour Hire" },
  { href: "/on-selling", label: "Parts Procurement" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/other-ventures", label: "Other Ventures" },
];

const SERVICES_CLOSE_MS = 120;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearServicesCloseTimer = useCallback(() => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
  }, []);

  const openServicesMenu = useCallback(() => {
    clearServicesCloseTimer();
    setServicesOpen(true);
  }, [clearServicesCloseTimer]);

  const scheduleCloseServicesMenu = useCallback(() => {
    clearServicesCloseTimer();
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimer.current = null;
    }, SERVICES_CLOSE_MS);
  }, [clearServicesCloseTimer]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    clearServicesCloseTimer();
  }, [pathname, clearServicesCloseTimer]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(
    () => () => {
      clearServicesCloseTimer();
    },
    [clearServicesCloseTimer]
  );

  const isActive = (href: string) => pathname === href;
  const isServicesActive = serviceLinks.some((l) => pathname === l.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-navy-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/kna-logo.png"
              alt="KNA Aust Pty Ltd"
              width={64}
              height={64}
              className="w-14 h-14 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-gold-400 font-bold text-sm tracking-widest uppercase leading-tight">
                KNA Aust Pty Ltd
              </div>
              <div className="text-gray-400 text-xs tracking-wide">
                Mining & Industrial Specialists
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors nav-link ${
                isActive("/")
                  ? "text-gold-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onPointerEnter={openServicesMenu}
              onPointerLeave={scheduleCloseServicesMenu}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors nav-link ${
                  isServicesActive
                    ? "text-gold-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* pt-2 bridges button and panel so the pointer never crosses a dead zone */}
              <div
                className={`absolute left-0 top-full z-50 min-w-[14rem] pt-2 ${
                  servicesOpen ? "pointer-events-auto" : "pointer-events-none hidden"
                }`}
              >
                <div className="rounded-xl border border-white/10 bg-navy-800 py-2 shadow-2xl">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(link.href)
                          ? "bg-gold-500/10 text-gold-400"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors nav-link ${
                  isActive(link.href)
                    ? "text-gold-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+61467817535"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+61 467 817 535</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Hire Us
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden min-w-11 min-h-11 p-2.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-gold-400 bg-gold-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-medium">
              Services
            </div>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-gold-400 bg-gold-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gold-400 bg-gold-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+61467817535"
                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +61 467 817 535
              </a>
              <Link
                href="/contact"
                className="bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm px-5 py-3 rounded-lg transition-colors text-center"
              >
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
