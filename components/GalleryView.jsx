"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX, FiGrid } from "react-icons/fi";
import { OverlayActions } from "@/components/OverlayActions";
import { ProjectHeader } from "@/components/ProjectHeader";

const galleryImages = [
  { src: "/gallery/gallery-01.jpg", alt: "Luxury villa exterior with modern architecture" },
  { src: "/gallery/gallery-02.jpg", alt: "Elegant living room interior" },
  { src: "/gallery/gallery-03.jpg", alt: "Modern kitchen with premium finishes" },
  { src: "/gallery/gallery-04.jpg", alt: "Swimming pool and outdoor lounge" },
  { src: "/gallery/gallery-05.jpg", alt: "Bedroom with panoramic views" },
  { src: "/gallery/gallery-06.jpg", alt: "Grand entrance and lobby" },
  { src: "/gallery/gallery-07.jpg", alt: "Landscaped garden and walkways" },
  { src: "/gallery/gallery-08.jpg", alt: "Dining area with elegant decor" },
];

export function GalleryView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section className="fixed inset-0 z-30 overflow-y-auto bg-black" aria-label="Gallery">
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3">
        <ProjectHeader onBack={onBack} onHome={onHome} />
        <OverlayActions
          menuOpen={menuOpen}
          onFullscreen={onFullscreen}
          onMenuToggle={onMenuToggle}
        />
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#d8b26a] uppercase">
              Project Gallery
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-white">
              Saketham
            </h2>
          </div>
          <span className="text-sm text-white/50">
            {galleryImages.length} photos
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 outline-none transition focus-visible:ring-2 focus-visible:ring-[#d8b26a]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">
                <span className="rounded-full border border-white/40 px-4 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex animate-[fadeIn_200ms_ease] items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={galleryImages[lightboxIndex].alt}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-white/60 hover:bg-black/70"
            aria-label="Close"
          >
            <FiX size={22} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            <FiGrid className="mr-2 inline-block" size={14} />
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-white/60 hover:bg-black/70 max-sm:left-2 max-sm:h-10 max-sm:w-10"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative h-full w-full max-w-5xl px-16 py-20 max-sm:px-10 max-sm:py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="animate-[fadeIn_300ms_ease] object-contain"
                priority
              />
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-white/60 hover:bg-black/70 max-sm:right-2 max-sm:h-10 max-sm:w-10"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      )}


    </section>
  );
}
