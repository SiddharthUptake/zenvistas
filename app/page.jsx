"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BottomDock } from "@/components/BottomDock";
import { ContactView } from "@/components/ContactView";
import { Hero } from "@/components/Hero";
import { IframeView } from "@/components/IframeView";
import { SideMenu } from "@/components/SideMenu";
import { TopControls } from "@/components/TopControls";
import { INTERIOR_URL, LOCATION_URL } from "@/data/navigation";

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

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <main className="site-shell">
      <Hero loaded={loaded} onLoaded={() => setLoaded(true)} />

      <TopControls
        menuOpen={menuOpen}
        onFullscreen={openFullscreen}
        onMenuToggle={toggleMenu}
      />
      <SideMenu
        onClose={() => setMenuOpen(false)}
        onOpenContact={openContact}
        open={menuOpen}
      />

      {!activeView && (
        <>
          <BottomDock
            onOpenContact={openContact}
            onOpenInterior={openInterior}
            onOpenLocation={openLocation}
          />
          <div className="visionarc-mark" aria-hidden="true">
            Excellence by <strong>Visionarc</strong>
          </div>
        </>
      )}

      {activeView === "location" && (
        <IframeView
          menuOpen={menuOpen}
          onBack={closeOverlay}
          onFullscreen={openFullscreen}
          onHome={closeOverlay}
          onMenuToggle={toggleMenu}
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
          onMenuToggle={toggleMenu}
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
          onMenuToggle={toggleMenu}
        />
      )}
    </main>
  );
}
