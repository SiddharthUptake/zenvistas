import Image from "next/image";
import { dockItems } from "@/data/navigation";

export function BottomDock({ onOpenContact, onOpenInterior, onOpenLocation }) {
  return (
    <nav
      className="fixed bottom-[42px] left-1/2 z-10 flex min-h-[104px] w-[min(calc(100vw-32px),780px)] -translate-x-1/2 items-center justify-center gap-2.5 rounded-[34px] border border-white/20 bg-gradient-to-b from-neutral-800/90 to-neutral-950/95 px-[18px] pt-3 pb-3.5 shadow-[0_14px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] max-[760px]:bottom-[18px] max-[760px]:grid max-[760px]:min-h-0 max-[760px]:w-[min(calc(100vw-20px),390px)] max-[760px]:grid-cols-4 max-[760px]:gap-x-1 max-[760px]:gap-y-[9px] max-[760px]:rounded-3xl max-[760px]:px-2.5 max-[760px]:py-3"
      aria-label="Project sections"
    >
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
            className="grid min-w-[78px] cursor-pointer justify-items-center gap-[7px] border-0 bg-transparent text-[13px] leading-none font-normal tracking-[0.02em] text-white/90 no-underline max-[760px]:min-w-0 max-[760px]:text-[11px]"
            href={onClick ? undefined : "#"}
            key={item.label}
            onClick={onClick}
            type={onClick ? "button" : undefined}
          >
            <span className="grid h-[50px] w-[50px] place-items-center overflow-hidden rounded-full border-2 border-white/30  transition hover:-translate-y-0.5 hover:border-[#37c9ca] max-[760px]:h-10 max-[760px]:w-10">
              <Image
                src={item.image}
                alt=""
                width={44}
                height={44}
                className="h-[38px] w-[38px] object-contain max-[760px]:h-[31px] max-[760px]:w-[31px]"
                unoptimized
              />
            </span>
            <span>{item.label}</span>
          </Component>
        );
      })}
    </nav>
  );
}
