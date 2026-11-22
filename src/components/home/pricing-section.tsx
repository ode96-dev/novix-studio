"use client";

import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectModalContext } from "@/types";

interface PricingSectionProps {
  onOpenProjectModal: (context?: ProjectModalContext) => void;
}

const SINGLE_FEATURES = [
  "Custom UX/UI architecture & responsive system",
  "Framer, Webflow, or Next.js production build",
  "WCAG AA contrast & Core Web Vitals optimization",
  "14 days post-launch engineering warranty",
];

const PACKAGE_FEATURES = [
  "Up to 3 cohesive marketing sites or product drops",
  "Dedicated 2-week design & engineering sprints",
  "Structured CMS collections & HubSpot/Stripe wiring",
  "Priority weekly Slack channel & iteration queue",
];

const PricingSection = ({ onOpenProjectModal }: PricingSectionProps) => {
  return (
    <section
      id="pricing"
      className="bg-[#fafafa] text-[#111113] py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 lg:mb-20">
          <p className="text-sm font-medium text-black/60">
            <span className="font-mono-tabular text-black/40 mr-2">06</span>
            Engagement Models
          </p>
          <h2
            id="pricing-main-title"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#111113] text-balance"
          >
            Transparent scope for{" "}
            <span className="text-black/45 font-medium">focused teams.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div
            id="pricing-card-single"
            className="bg-white p-8 sm:p-10 rounded-2xl border border-black/8 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-black/55 pb-4 border-b border-black/6">
                <span className="font-medium">Fixed-Scope Sprint</span>
                <span className="font-mono-tabular">2–3 Weeks</span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-3xl font-bold text-[#111113] tracking-tight">
                  Single Project
                </h3>
                <p className="text-sm text-black/65 leading-relaxed">
                  Built for startups and product teams shipping one flagship
                  marketing site or launch page.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-black/80">
                {SINGLE_FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#d92d20] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 pt-6 border-t border-black/8">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-black/55 block">
                    Starting at
                  </span>
                  <span className="font-display text-3xl font-bold tracking-tight text-[#111113] tabular-nums">
                    $499
                  </span>
                  <span className="text-xs text-black/55 ml-1.5">
                    / project
                  </span>
                </div>
                <span className="text-xs text-black/55">Global remote</span>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenProjectModal({ plan: "Single Project ($499+)" })
                }
                className="w-full min-h-11 px-5 py-3 bg-[#111113] hover:bg-black text-white text-sm font-semibold rounded-lg inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
              >
                <span>Select Single Project</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            id="pricing-card-growth"
            className="bg-[#0e0e10] text-white p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-white/60 pb-4 border-b border-white/10">
                <span className="font-medium text-[#ff6b63]">
                  Growth Partnership
                </span>
                <span className="font-mono-tabular">Ongoing Capacity</span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-3xl font-bold text-white tracking-tight">
                  Multi-Project Package
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Designed for scaling companies and product lines managing
                  continuous launches and experiments.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-sm text-white/85">
                {PACKAGE_FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      className="w-4 h-4 text-[#ff594f] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 pt-6 border-t border-white/10">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-white/60 block">
                    Starting at
                  </span>
                  <span className="font-display text-3xl font-bold tracking-tight text-white tabular-nums">
                    $1,499
                  </span>
                  <span className="text-xs text-white/60 ml-1.5">
                    / package
                  </span>
                </div>
                <span className="text-xs text-white/60">Global remote</span>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenProjectModal({
                    plan: "Multi-Project Package ($1,499+)",
                  })
                }
                className="w-full min-h-11 px-5 py-3 bg-white hover:bg-neutral-200 text-[#111113] text-sm font-semibold rounded-lg inline-flex items-center justify-center gap-2 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
              >
                <span>Select Growth Package</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
