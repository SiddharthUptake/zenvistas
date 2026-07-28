"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ─── Navigation ──────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 relative">
        {/* Hamburger - invisible spacer left */}
        <div className="w-10 opacity-0 pointer-events-none" />

        {/* Logo - Perfectly centered */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span
            className={`text-lg sm:text-xl font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
              scrolled ? "text-stone-800" : "text-white"
            }`}
          >
            Zenvistas
          </span>
        </a>

        {/* Hamburger - Right */}
        <button
          className={`p-1 transition-colors ${
            scrolled ? "text-stone-800" : "text-white"
          }`}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <line x1="4" x2="20" y1="8" y2="8" />
            <line x1="4" x2="20" y1="16" y2="16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

// ─── Bottom nav items ────────────────────────────────────────────────────────

const navItems = [
  {
    label: "Webverse",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Interior",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
  },
  {
    label: "Brochure",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" />
      </svg>
    ),
  },
  {
    label: "Location",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Enquire Now",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    label: "Gallery",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: "About Project",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" />
      </svg>
    ),
  },
  {
    label: "Amenities",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

// ─── Hero Section ────────────────────────────────────────────────────────────

function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-building.webp"
          alt="Zenvistas"
          fill
          className={`object-cover transition-all duration-1000 ${
            loaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          priority
          onLoad={() => setLoaded(true)}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-300/80 text-xs sm:text-sm tracking-[0.35em] uppercase mb-5 font-light">
            Coming Soon
          </p>
          <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-none mb-5">
            Zenvistas
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light tracking-wide max-w-md mx-auto">
            Where modern living meets timeless elegance.
          </p>
        </div>
      </div>

      {/* Bottom nav items */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 sm:pb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="group flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-300"
              >
                <span className="group-hover:text-amber-300/80 transition-colors duration-300" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-light whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
