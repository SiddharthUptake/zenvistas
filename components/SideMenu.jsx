import { FiX } from "react-icons/fi";
import { railItems } from "@/data/navigation";

export function SideMenu({ onClose, onOpenContact, open }) {
  return (
    <aside
      className={`fixed inset-y-0 right-0 z-[55] w-[120px] bg-black transition duration-200 max-[760px]:w-24 ${
        open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        className={`absolute top-5 right-7 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/50 bg-white/10 text-white transition delay-100 hover:border-[#f5cf64] hover:text-[#f5cf64] max-[760px]:right-6 max-[760px]:h-10 max-[760px]:w-10 [&_svg]:h-5 [&_svg]:w-5 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        type="button"
        aria-label="Close menu"
        onClick={onClose}
      >
        <FiX />
      </button>
      <div className="flex min-h-full flex-col items-center gap-7 pt-[104px] max-[760px]:gap-[22px] max-[760px]:pt-[92px]">
        {railItems.map((item) => {
          const Component = item.action === "contact" ? "button" : "a";

          return (
            <Component
              className="grid cursor-pointer justify-items-center gap-[9px] border-0 bg-transparent text-[13px] leading-none text-white no-underline [&_span]:grid [&_span]:h-[50px] [&_span]:w-[50px] [&_span]:place-items-center [&_span]:rounded-full [&_span]:border [&_span]:border-white/30 [&_span]:transition [&_span_svg]:h-5 [&_span_svg]:w-5 hover:[&_span]:border-[#f5cf64] hover:[&_span]:text-[#f5cf64] [&_strong]:text-[13px] [&_strong]:font-normal"
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
