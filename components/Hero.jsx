import Image from "next/image";

const stats = [
  { value: "7.4", label: "Acres" },
  { value: "184", label: "Villas" },
  { value: "62%", label: "Open Green" },
];

export function Hero({ loaded, onLoaded }) {
  return (
    <>
      <Image
        src="/hero-building.avif"
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
        aria-label="Saketham by Vision Arc"
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
          Welcome to Saketham by Vision Arc
        </p>
      </section>

      {/* Stats rail — bottom left */}
      <div className="absolute bottom-60 left-0 z-[6] flex flex-col gap-2 max-[760px]:hidden">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col justify-center gap-1  border-l border-white/25 px-6 py-5`}
          >
            <span className="font-serif text-lg leading-none font-bold text-white">
              {stat.value}
            </span>
            <span className="font-mono text-sm tracking-[0.14em] text-white/70 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Book Now — centered */}
      <div className="absolute bottom-60 left-1/2 z-[6] -translate-x-1/2">
        <button
          type="button"
          className="group relative isolate overflow-hidden rounded-full bg-[linear-gradient(120deg,#a97e3f_0%,#e8c483_35%,#d8b26a_55%,#f4dda3_75%,#a97e3f_100%)] bg-[length:220%_100%] px-7 py-3.5 font-mono text-[12px] font-semibold tracking-[0.14em] text-black uppercase shadow-[0_4px_14px_rgba(216,178,106,0.35),0_10px_30px_rgba(0,0,0,0.35)] transition-[background-position,box-shadow] duration-500 animate-[shimmer-bg_5s_linear_infinite] hover:bg-[position:100%_0] hover:shadow-[0_4px_22px_rgba(216,178,106,0.55),0_10px_30px_rgba(0,0,0,0.4)] max-[760px]:px-5 max-[760px]:py-3 max-[760px]:text-[11px]"
        >
          <span className="relative z-[1]">Book a Private Tour</span>
          <span className="pointer-events-none absolute inset-0 z-[2] -translate-x-full bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.75)_50%,transparent_65%)] animate-[shimmer-sweep_4s_linear_infinite]" />
        </button>
      </div>

      <style>{`
          @keyframes shimmer-sweep {
  0%   { transform: translateX(-150%); }
  100% { transform: translateX(150%); }
}
      `}</style>
    </>
  );
}
