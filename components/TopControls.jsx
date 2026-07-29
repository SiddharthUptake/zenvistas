import { MdFullscreen } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { RoundButton } from "@/components/RoundButton";

export function TopControls({ menuOpen, onFullscreen, onMenuToggle, whatsappNumber }) {
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-start justify-between px-6 py-[18px] max-[760px]:px-3.5 max-[760px]:py-3.5">
      <Logo />
      <div className="pointer-events-auto flex items-center gap-3">
        <RoundButton
          label="Chat on WhatsApp"
          as="a"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-[#25D366]" />
        </RoundButton>
        <RoundButton label="Fullscreen" onClick={onFullscreen}>
          <MdFullscreen />
        </RoundButton>
        <RoundButton label={menuOpen ? "Close menu" : "Open menu"} onClick={onMenuToggle}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </RoundButton>
      </div>
    </header>
  );
}