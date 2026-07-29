export function RoundButton({ children, className = "", label, onClick }) {
  return (
    <button
      className={`grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-full border border-white/35 bg-black/35 text-white transition hover:-translate-y-px hover:border-white/65 hover:bg-black/60 [&_svg]:h-5 [&_svg]:w-5 ${className}`}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
