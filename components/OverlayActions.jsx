import { FaWhatsapp } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { RoundButton } from "@/components/RoundButton";

export function OverlayActions({ menuOpen, onFullscreen, onMenuToggle }) {
  return (
    <div className="overlay-actions">
      <RoundButton className="whatsapp-button" label="WhatsApp">
        <FaWhatsapp />
      </RoundButton>
      <RoundButton label="Fullscreen" onClick={onFullscreen}>
        <MdFullscreen />
      </RoundButton>
      <RoundButton label={menuOpen ? "Close menu" : "Open menu"} onClick={onMenuToggle}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </RoundButton>
    </div>
  );
}