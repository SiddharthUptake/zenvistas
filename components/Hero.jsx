import Image from "next/image";

export function Hero({ loaded, onLoaded }) {
  return (
    <>
      <Image
        src="/hero-building.webp"
        alt="Aerial view of the Saketham community"
        fill
        className={`object-cover transition-all duration-1000 ${
          loaded ? "scale-100 opacity-100" : "scale-[1.035] opacity-0"
        }`}
        priority
        sizes="100vw"
        onLoad={onLoaded}
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_52%_50%,rgba(0,0,0,0.08),rgba(0,0,0,0.64)_62%),linear-gradient(180deg,rgba(0,0,0,0.58),rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.72))]" />

      <section
        className="relative z-[5] grid min-h-svh place-content-center justify-items-center px-6 pt-[120px] pb-[180px] text-center [text-shadow:0_3px_16px_rgba(0,0,0,0.9)] max-[760px]:pb-[250px]"
        aria-label="Saketham by Visionarc"
      >
        <Image
          src="/saketham-logo.png"
          alt=""
          width={118}
          height={118}
          className="mb-3 h-auto w-[clamp(72px,7vw,118px)] object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.72)]"
          priority
        />
        <h1 className="font-serif text-[clamp(46px,5.4vw,76px)] leading-[0.95] font-bold tracking-[0.02em] uppercase">
          SAKETHAM
        </h1>
        <p className="mt-4 font-mono text-[clamp(12px,1.2vw,18px)] font-medium tracking-[0.16em] text-white/85 max-[760px]:max-w-[310px] max-[760px]:leading-[1.6]">
          Welcome to Saketham by Visionarc
        </p>
      </section>
    </>
  );
}
