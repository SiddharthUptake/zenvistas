import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { OverlayActions } from "@/components/OverlayActions";
import { ProjectHeader } from "@/components/ProjectHeader";

export function ContactView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle }) {
  return (
    <section className="overlay-page contact-page" aria-label="Contact us">
      <div className="overlay-header">
        <ProjectHeader onBack={onBack} onHome={onHome} />
        <OverlayActions
          menuOpen={menuOpen}
          onFullscreen={onFullscreen}
          onMenuToggle={onMenuToggle}
        />
      </div>
      <div className="overlay-body contact-body">
        <div className="contact-card">
          <div className="contact-info">
            <span className="contact-eyebrow">VISIONARC</span>
            <h2>SAKETHAM</h2>
            <Image
              src="/hero-building.webp"
              alt="Saketham exterior view"
              width={520}
              height={290}
              className="contact-photo"
            />
            <address>
              Visionarc Realty Ventures LLP
              <br />
              Site no.26, SF no : 292/2,
              <br />
              Veeramapalayam, Coimbatore
            </address>
            <a className="whatsapp-link" href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <form className="enquiry-form" onSubmit={(event) => event.preventDefault()}>
            <h3>Enquiry Form</h3>
            <input type="text" name="name" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="tel" name="phone" placeholder="Mobile Number" />
            <textarea name="message" placeholder="Write your message here..." rows={4} />
            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}