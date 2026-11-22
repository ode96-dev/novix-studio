"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { LegalModal } from "../legal/legal-modal";
import ResilientImage from "../images/resilient-image";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS = [
  { name: "X / Twitter", href: "https://x.com" },
  { name: "Dribbble", href: "https://dribbble.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [legalDoc, setLegalDoc] = useState<"terms" | "privacy" | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@novixstudio.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {" "}
      <footer
        id="main-footer"
        className="bg-white text-[#111113] pt-20 pb-10 overflow-hidden"
      >
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-14 border-b border-black/8">
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-black/8 aspect-video max-w-md bg-neutral-100">
                <ResilientImage
                  src={"/images/case_aura_architecture_1795217712805.jpg"}
                  alt="Minimalist architectural studio pavilion"
                  className="w-full h-full object-cover"
                  fallbackTitle="Novix® Studio"
                  darkFallback={false}
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-black/55">
                  Direct studio inquiries
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:hello@novixstudio.com"
                    className="font-display text-xl sm:text-2xl font-bold text-[#111113] hover:text-[#d92d20] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3b30] rounded-sm"
                  >
                    hello@novixstudio.com
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={
                      copied
                        ? "Email copied to clipboard"
                        : "Copy studio email address"
                    }
                    className="inline-flex items-center gap-1.5 min-h-9 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-black/75 hover:text-black transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ff3b30]"
                  >
                    {copied ? (
                      <>
                        <Check
                          className="w-3.5 h-3.5 text-emerald-700"
                          aria-hidden="true"
                        />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:pl-16">
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-black/45">
                  Navigation
                </h3>
                <ul className="space-y-2.5">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-block py-1 text-sm sm:text-base font-medium text-[#111113] hover:text-[#d92d20] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-black/45">
                  Channels
                </h3>
                <ul className="space-y-2.5">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-1 text-sm sm:text-base font-medium text-[#111113] hover:text-[#d92d20] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/55">
            <p>© 2026 Novix® Studio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalDoc("terms")}
                className="min-h-9 hover:text-black transition-colors cursor-pointer"
              >
                Terms of Use
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc("privacy")}
                className="min-h-9 hover:text-black transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          <div className="pt-4 overflow-hidden">
            <p
              id="footer-huge-wordmark"
              aria-hidden="true"
              className="font-display text-[13.5vw] lg:text-[152px] font-bold tracking-[-0.045em] text-[#111113] leading-[0.86] text-center select-none whitespace-nowrap"
            >
              Novix
              <sup className="text-[0.38em] font-medium text-black/65 align-super ml-0.5">
                ®
              </sup>{" "}
              Studio
            </p>
          </div>
        </div>
      </footer>
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </>
  );
};

export default Footer;
