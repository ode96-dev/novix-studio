"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import ResilientImage from "../images/resilient-image";

interface WhyChooseUsSectionProps {
  onOpenProjectModal: () => void;
}

const TOOLCHAIN_ITEMS = [
  "Next.js",
  "Framer",
  "Webflow",
  "Figma",
  "Stripe",
  "HubSpot",
];

const WhyChooseUsSection = ({
  onOpenProjectModal,
}: WhyChooseUsSectionProps) => {
  return (
    <section
      id="why-choose-us"
      className="bg-white text-[#111113] py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-14 lg:mb-16">
          <p className="text-sm font-medium text-black/60">
            <span className="font-mono-tabular text-black/40 mr-2">05</span>
            Why Novix
          </p>
          <h2
            id="why-choose-title"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#111113] text-balance"
          >
            Senior product craft without{" "}
            <span className="text-black/45 font-medium">
              agency handoff layers.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-black/8 bg-neutral-100 min-h-85">
            <ResilientImage
              src={"/images/studio_team_editorial_1795217715822.jpg"}
              alt="Senior Novix designers reviewing typography proofs at oak architectural studio table"
              className="w-full h-full object-cover"
              fallbackTitle="Novix Studio Team"
              darkFallback={false}
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[#111113] leading-[1.55] font-medium text-balance">
                You work directly with the principal designer and engineer
                writing your production code—eliminating account-manager
                translation loss and multi-month discovery delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/8">
                <div>
                  <h3 className="text-xs font-semibold text-black/50 mb-2">
                    Production Stack
                  </h3>
                  <p className="text-sm font-medium text-[#111113] leading-relaxed">
                    {TOOLCHAIN_ITEMS.join(" · ")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-black/50 mb-2">
                    Geographic Footprint
                  </h3>
                  <p className="text-sm font-medium text-[#111113] leading-relaxed">
                    North America, UK &amp; DACH · 12+ Countries
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/8">
              <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/8 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="font-display text-base font-bold text-[#111113]">
                    Direct Sprint Collaboration
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed mt-1.5">
                    Asynchronous Loom reviews paired with shared Slack and
                    Linear boards.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenProjectModal}
                  className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2.5 bg-[#111113] hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#111113] text-white border border-white/10 flex flex-col justify-between gap-6">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>Multi-Year Retention</span>
                  <span className="font-mono-tabular">2021–2026</span>
                </div>
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white tabular-nums">
                    98.4%
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed mt-2">
                    Retained accounts renewing past their initial six-month
                    launch window.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
