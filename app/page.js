"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LOCATION_URL = "https://vademo.uptakeinfotech.com/";
const INTERIOR_URL = "https://saketham.visionarc.in/flat-tour";

const Icon = {
  menu: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  expand: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M4 15v5h5" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6M12 7h.01" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="m4 15 4-4 4 4 3-3 5 5" />
      <circle cx="9" cy="10" r="1.5" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M8 14h8M8 17h5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.6Z" />
      <path d="M9.3 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.2.2-.2.4 0 .6.4.7 1 1.4 1.8 1.8.2.1.4.1.6-.1l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6-.1.6-.7 1.2-1.3 1.3-1.1.2-3.7-.8-5.4-2.5-1.7-1.7-2.6-4.2-2.4-5.2.1-.5.5-1.1 1.1-1.4Z" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
      <path d="M18 4v4" />
    </svg>
  ),
  sofa: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M4 12a2 2 0 0 0-2 2v4h20v-4a2 2 0 0 0-2-2" />
      <path d="M6 18v2M18 18v2M7 12h10" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V7h7v14M13 21V3h7v18" />
      <path d="M7 10h1M7 14h1M7 18h1M16 6h1M16 10h1M16 14h1M16 18h1M3 21h18" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="m8.6 10.7 6.8-3.4M8.6 13.3l6.8 3.4" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  enquiry: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5M9 15l2 2 4-5" />
    </svg>
  ),
};

const railItems = [
  { label: "About", icon: Icon.info },
  { label: "Gallery", icon: Icon.image },
  { label: "Brochure", icon: Icon.file },
  { label: "Contact", icon: Icon.phone, action: "contact" },
];

const dockItems = [
  { label: "Webverse", icon: Icon.home },
  { label: "Interior", icon: Icon.sofa, action: "interior" },
  { label: "Community", icon: Icon.building },
  { label: "Zone IQ", icon: Icon.network },
  { label: "Location", icon: Icon.map, action: "location" },
  { label: "Enquiry", icon: Icon.enquiry, action: "contact" },
];

function Logo() {
  return (
    <a href="#" className="brand-mark" aria-label="Saketham home">
      <Image
        src="/saketham-logo.png"
        alt=""
        width={82}
        height={82}
        className="brand-symbol"
        priority
      />
      <span>SAKETHAM</span>
      <small>BY VISIONARC</small>
    </a>
  );
}

function RoundButton({ children, label, onClick }) {
  return (
    <button className="round-button" type="button" aria-label={label} onClick={onClick}>
      {children}
    </button>
  );
}

function TopControls({ menuOpen, onFullscreen, onMenuToggle }) {
  return (
    <header className="top-layer">
      <Logo />
      <div className="top-actions">
        <RoundButton label="Fullscreen" onClick={onFullscreen}>
          {Icon.expand}
        </RoundButton>
        <RoundButton label={menuOpen ? "Close menu" : "Open menu"} onClick={onMenuToggle}>
          {menuOpen ? Icon.close : Icon.menu}
        </RoundButton>
      </div>
    </header>
  );
}

function SideMenu({ onOpenContact, open }) {
  return (
    <aside className={`side-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="side-menu-items">
        {railItems.map((item) => {
          const Component = item.action === "contact" ? "button" : "a";

          return (
            <Component
              className="rail-link"
              href={item.action === "contact" ? undefined : "#"}
              key={item.label}
              onClick={item.action === "contact" ? onOpenContact : undefined}
              type={item.action === "contact" ? "button" : undefined}
            >
              <span>{item.icon}</span>
              <strong>{item.label}</strong>
            </Component>
          );
        })}
      </div>
    </aside>
  );
}

function BottomDock({ onOpenContact, onOpenInterior, onOpenLocation }) {
  return (
    <nav className="bottom-dock" aria-label="Project sections">
      {dockItems.map((item) => {
        const handlers = {
          contact: onOpenContact,
          interior: onOpenInterior,
          location: onOpenLocation,
        };
        const onClick = handlers[item.action];
        const Component = onClick ? "button" : "a";

        return (
          <Component
            className="dock-item"
            href={onClick ? undefined : "#"}
            key={item.label}
            onClick={onClick}
            type={onClick ? "button" : undefined}
          >
            <span className="dock-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Component>
        );
      })}
    </nav>
  );
}

function ProjectHeader({ onBack, onHome }) {
  return (
    <div className="project-card">
      <Image src="/saketham-logo.png" alt="" width={44} height={44} className="project-card-logo" />
      <div className="project-card-copy">
        <strong>SAKETHAM</strong>
        <span>BY VISIONARC</span>
        <small>Veeramapalayam, Coimbatore</small>
      </div>
      <div className="project-card-actions">
        <button type="button" onClick={onHome} aria-label="Home">
          {Icon.home}
        </button>
        <button type="button" onClick={onBack} aria-label="Back">
          {Icon.back}
        </button>
      </div>
    </div>
  );
}

function OverlayActions({ menuOpen, onFullscreen, onMenuToggle }) {
  return (
    <div className="overlay-actions">
      <RoundButton label="WhatsApp">{Icon.whatsapp}</RoundButton>
      <RoundButton label="Fullscreen" onClick={onFullscreen}>
        {Icon.expand}
      </RoundButton>
      <RoundButton label={menuOpen ? "Close menu" : "Open menu"} onClick={onMenuToggle}>
        {menuOpen ? Icon.close : Icon.menu}
      </RoundButton>
    </div>
  );
}

function IframeView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle, title, url }) {
  return (
    <section className="overlay-page iframe-view" aria-label={title}>
      <ProjectHeader onBack={onBack} onHome={onHome} />
      <OverlayActions
        menuOpen={menuOpen}
        onFullscreen={onFullscreen}
        onMenuToggle={onMenuToggle}
      />
      <iframe src={url} title={title} loading="lazy" />
    </section>
  );
}

function ContactView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle }) {
  return (
    <section className="overlay-page contact-page" aria-label="Contact us">
      <ProjectHeader onBack={onBack} onHome={onHome} />
      <OverlayActions
        menuOpen={menuOpen}
        onFullscreen={onFullscreen}
        onMenuToggle={onMenuToggle}
      />
      <div className="contact-card">
        <div className="contact-info">
          <span className="contact-eyebrow">VISIONARC</span>
          <h2>SAKETHAM</h2>
          <Image
            src="/hero-building.webp"
            alt="Saketham exterior view"
            width={520}
            height={290}
            className="contact-photo"
          />
          <address>
            Visionarc Realty Ventures LLP
            <br />
            Site no.26, SF no : 292/2,
            <br />
            Veeramapalayam, Coimbatore
          </address>
          <a className="whatsapp-link" href="#" aria-label="WhatsApp">
            {Icon.whatsapp}
          </a>
        </div>
        <form className="enquiry-form" onSubmit={(event) => event.preventDefault()}>
          <h3>Enquiry Form</h3>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="tel" name="phone" placeholder="Mobile Number" />
          <textarea name="message" placeholder="Write your message here..." rows={4} />
          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setActiveView(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.();
      return;
    }

    await document.exitFullscreen?.();
  };

  const openLocation = () => {
    setMenuOpen(false);
    setActiveView("location");
  };

  const openInterior = () => {
    setMenuOpen(false);
    setActiveView("interior");
  };

  const openContact = () => {
    setMenuOpen(false);
    setActiveView("contact");
  };

  const closeOverlay = () => {
    setMenuOpen(false);
    setActiveView(null);
  };

  return (
    <main className="site-shell">
      <Image
        src="/hero-building.webp"
        alt="Aerial view of the Saketham community"
        fill
        className={`hero-image ${loaded ? "is-loaded" : ""}`}
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
      />
      <div className="hero-shade" />

      <TopControls
        menuOpen={menuOpen}
        onFullscreen={openFullscreen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <SideMenu onOpenContact={openContact} open={menuOpen} />

      <section className="hero-content" aria-label="Saketham by Visionarc">
        <Image
          src="/saketham-logo.png"
          alt=""
          width={118}
          height={118}
          className="hero-emblem"
          priority
        />
        <h1>SAKETHAM</h1>
        <p>Welcome to Saketham by Visionarc</p>
      </section>

      {!activeView && (
        <>
          <BottomDock
            onOpenContact={openContact}
            onOpenInterior={openInterior}
            onOpenLocation={openLocation}
          />
          <div className="visionarc-mark" aria-hidden="true">
            <Image src="/visionarc-logo.png" alt="" width={122} height={84} />
          </div>
        </>
      )}

      {activeView === "location" && (
        <IframeView
          menuOpen={menuOpen}
          onBack={closeOverlay}
          onFullscreen={openFullscreen}
          onHome={closeOverlay}
          onMenuToggle={() => setMenuOpen((open) => !open)}
          title="Saketham location"
          url={LOCATION_URL}
        />
      )}

      {activeView === "interior" && (
        <IframeView
          menuOpen={menuOpen}
          onBack={closeOverlay}
          onFullscreen={openFullscreen}
          onHome={closeOverlay}
          onMenuToggle={() => setMenuOpen((open) => !open)}
          title="Saketham interior tour"
          url={INTERIOR_URL}
        />
      )}

      {activeView === "contact" && (
        <ContactView
          menuOpen={menuOpen}
          onBack={closeOverlay}
          onFullscreen={openFullscreen}
          onHome={closeOverlay}
          onMenuToggle={() => setMenuOpen((open) => !open)}
        />
      )}
    </main>
  );
}
