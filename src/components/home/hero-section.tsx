"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import ResilientImage from "../images/resilient-image";
import { heroMetrics } from "@/data/data";

interface HeroSectionProps {
  onOpenProjectModal: () => void;
}

const HeroSection = ({ onOpenProjectModal }: HeroSectionProps) => {
  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="bg-[#0a0a0a] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          id="hero-main-title"
          className="font-display text-[clamp(3.25rem,9vw,7.75rem)] leading-[0.9] font-bold tracking-[-0.04em] text-white mb-12 lg:mb-16 text-balance"
        >
          novix
          <sup className="text-[0.38em] font-medium text-white/70 align-super ml-0.5">
            ®
          </sup>{" "}
          <span className="text-white/95">studio</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pb-14 lg:pb-16 border-b border-white/10">
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <h2 className="font-display text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight font-semibold tracking-[-0.02em] text-white text-balance">
                High-converting web platforms engineered for teams that ship
                fast.
              </h2>
              <p
                id="hero-subtitle"
                className="text-[15px] sm:text-base leading-[1.65] tracking-[0.005em] text-white/70 max-w-[42ch]"
              >
                We design brand architectures, build modular Webflow and Next.js
                sites, and wire CRM pipelines so ambitious companies launch
                without agency bloat.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-book-call-btn"
                type="button"
                onClick={onOpenProjectModal}
                className="inline-flex items-center gap-2 min-h-11 px-6 py-3 bg-[#ff3b30] hover:bg-[#e5352b] text-white text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Schedule Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                id="hero-explore-projects-btn"
                type="button"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 min-h-11 px-4 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
              >
                <span>Explore Selected Work</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <figure className="relative w-full aspect-video lg:h-full lg:min-h-75 rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
              <ResilientImage
                src={"/images/case_creative_agency_1795217716277.jpg"}
                alt="Architectural light corridor representing Novix Studio digital direction"
                className="w-full h-full object-cover"
                fallbackTitle="Novix Studio Selected Showcase"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-white/70 font-medium">
                    Featured Release · Cultural Institution · 2026
                  </p>
                  <p className="font-display text-lg font-semibold text-white mt-0.5">
                    Monolith Archive Platform
                  </p>
                </div>
                <span className="font-mono-tabular text-xs font-medium text-white/85">
                  3.1x Ticket Reservations
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-10">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="space-y-1.5">
              <dt className="text-xs text-white/60 leading-snug">
                {metric.label}
              </dt>
              <dd className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
