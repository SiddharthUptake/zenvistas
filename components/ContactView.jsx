"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiCalendar, FiClock, FiChevronDown } from "react-icons/fi";
import { OverlayActions } from "@/components/OverlayActions";
import { ProjectHeader } from "@/components/ProjectHeader";

const PROJECT_OPTIONS = ["Saketham", "Wynn"];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#d8b26a]";

const labelClass = "text-xs font-medium tracking-[0.08em] text-white/60 uppercase";

export function ContactView({ menuOpen, onBack, onFullscreen, onHome, onMenuToggle }) {
  const [scheduleVisit, setScheduleVisit] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // wire up your submit logic here
  };

  return (
    <section
      className="fixed inset-0 z-30 overflow-y-auto bg-black/80 backdrop-blur-sm"
      aria-label="Contact us"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3">
        <ProjectHeader onBack={onBack} onHome={onHome} />
        <OverlayActions
          menuOpen={menuOpen}
          onFullscreen={onFullscreen}
          onMenuToggle={onMenuToggle}
        />
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 pb-10 md:grid-cols-[280px_1fr] md:gap-10 md:px-6">
        {/* Info column */}
        <div className="flex flex-col items-start gap-4 text-white">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#d8b26a] uppercase">
            Visionarc
          </span>
          <h2 className="font-serif text-2xl font-bold uppercase">Saketham</h2>
          <Image
            src="/hero-building.webp"
            alt="Saketham exterior view"
            width={520}
            height={290}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <address className="text-sm leading-relaxed text-white/70 not-italic">
            Visionarc Realty Ventures LLP
            <br />
            Site no.26, SF no : 292/2,
            <br />
            Veeramapalayam, Coimbatore
          </address>
          <a
          href="#"
          aria-label="WhatsApp"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-lg text-[#25D366] transition hover:border-[#25D366]"
          >
          <FaWhatsapp />
        </a>
      </div>

      {/* Form column */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:grid-cols-2 sm:p-7"
      >
        <div className="sm:col-span-2">
          <h3 className="text-2xl font-semibold text-white">Enquire Now</h3>
          <p className="mt-1 text-sm text-white/60">
            Fill in your details and we&apos;ll get back to you shortly
          </p>
        </div>

        {/* Name */}
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClass}>
            Name <span className="text-[#d8b26a]">*</span>
          </span>
          <input type="text" name="name" required placeholder="Your full name" className={inputClass} />
        </label>

        {/* Email */}
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            Email <span className="text-[#d8b26a]">*</span>
          </span>
          <input type="email" name="email" required placeholder="your.email@example.com" className={inputClass} />
        </label>

        {/* Phone */}
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            Phone <span className="text-[#d8b26a]">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            required
            placeholder="10-digit mobile number"
            pattern="[0-9]{10}"
            className={inputClass}
          />
        </label>

        {/* Interested Project */}
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClass}>Interested Project</span>
          <div className="relative">
            <select
              name="project"
              defaultValue={PROJECT_OPTIONS[0]}
              className={`${inputClass} appearance-none pr-10`}
            >
              {PROJECT_OPTIONS.map((option) => (
                <option key={option} value={option} className="bg-neutral-900">
                  {option}
                </option>
              ))}
            </select>
            <FiChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/50" />
          </div>
        </label>

        {/* Site visit toggle */}
        <button
          type="button"
          onClick={() => setScheduleVisit((value) => !value)}
          className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-left text-sm font-medium text-white transition hover:border-white/30 sm:col-span-2"
        >
          <span
            className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border transition ${scheduleVisit ? "border-[#d8b26a] bg-[#d8b26a] text-black" : "border-white/30 text-transparent"
              }`}
          >
            <FiCheck size={13} strokeWidth={3} />
          </span>
          I would like to schedule a site visit
        </button>

        {/* Visit date / time */}
        {scheduleVisit && (
          <div className="grid grid-cols-1 gap-4 rounded-xl border border-[#d8b26a]/40 bg-[#d8b26a]/5 p-4 sm:col-span-2 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className={labelClass}>
                Visit Date <span className="text-[#d8b26a]">*</span>
              </span>
              <div className="relative">
                <input
                  type="date"
                  name="visitDate"
                  required={scheduleVisit}
                  className={`${inputClass} [color-scheme:dark]`}
                />
                <FiCalendar className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/50" />
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelClass}>
                Preferred Time (IST) <span className="text-[#d8b26a]">*</span>
              </span>
              <div className="relative">
                <select
                  name="visitTime"
                  required={scheduleVisit}
                  defaultValue=""
                  className={`${inputClass} appearance-none border-[#d8b26a]/60 pr-10 pl-10`}
                >
                  <option value="" disabled className="bg-neutral-900">
                    Select time
                  </option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot} className="bg-neutral-900">
                      {slot}
                    </option>
                  ))}
                </select>
                <FiClock className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-white/50" />
                <FiChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/50" />
              </div>
            </label>
          </div>
        )}

        {/* Message */}
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClass}>Message (Optional)</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Any specific requirements or questions..."
            className={`${inputClass} resize-y`}
          />
        </label>

        {/* Consent */}
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 bg-black/40 p-4 text-sm text-white/75 sm:col-span-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            required
            className="sr-only"
          />
          <span
            className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border transition ${agreed ? "border-[#d8b26a] bg-[#d8b26a] text-black" : "border-white/30 text-transparent"
              }`}
          >
            <FiCheck size={13} strokeWidth={3} />
          </span>
          <span>
            I agree to be contacted by Visionarc via SMS, Email, RCS, WhatsApp and Voice for
            responding to my enquiry and receiving relevant updates, and I have read the{" "}
            <a href="/terms" className="text-[#d8b26a] underline underline-offset-2">
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#d8b26a] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <button
            type="submit"
            className="order-2 flex-1 rounded-full bg-[#d8b26a] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-black uppercase transition hover:bg-[#e8c483] sm:order-1"
          >
            Submit Enquiry
          </button>
          <button
            type="button"
            onClick={onBack}
            className="order-1 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white uppercase transition hover:border-white/50 sm:order-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </section>   
  );
}