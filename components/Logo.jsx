import Image from "next/image";

export function Logo() {
  return (
    <a
      href="#"
      className="pointer-events-auto grid justify-items-center text-[11px] font-extrabold leading-none tracking-[0.04em] text-[#f8d271] no-underline [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
      aria-label="Saketham home"
    >
      <Image
        src="/saketham-logo.png"
        alt=""
        width={82}
        height={82}
        className="mb-0.5 h-[66px] w-[66px] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.9)] max-[760px]:h-[54px] max-[760px]:w-[54px]"
        priority
      />
      <span>SAKETHAM</span>
      <small className="mt-0.5 text-[6px] tracking-[0.18em] text-[#fff2bd]">by Vision Arc</small>
    </a>
  );
}
