import Image from "next/image";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export function ProjectHeader({ onBack, onHome }) {
  return (
    <div className="project-card">
      <Image src="/saketham-logo.png" alt="" width={44} height={44} className="project-card-logo" />
      <div className="project-card-copy">
        <strong>SAKETHAM</strong>
        <span>by Vision Arc</span>
        <small>Veeramapalayam, Coimbatore</small>
      </div>
      <div className="project-card-actions">
        <button type="button" onClick={onHome} aria-label="Home">
          <FiHome />
        </button>
        <button type="button" onClick={onBack} aria-label="Back">
          <FiArrowLeft />
        </button>
      </div>
    </div>
  );
}