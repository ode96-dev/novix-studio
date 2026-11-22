"use client";

import { ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  onOpenProjectModal: () => void;
}

const AboutSection = ({ onOpenProjectModal }: AboutSectionProps) => {
  return (
    <section
      id="about-section"
      className="bg-[#fafafa] text-[#111113] py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-black/60">
              <span className="font-mono-tabular text-black/40 mr-2">01</span>
              About Novix
            </p>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <div className="space-y-7">
              <h2
                id="about-statement"
                className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.2] font-semibold tracking-tight text-[#111113] max-w-3xl text-balance"
              >
                Built for product teams that reject generic templates—combining{" "}
                <span className="text-black/45 font-medium">
                  conversion strategy, visual systems, and clean web engineering
                </span>{" "}
                to ship work that compounds.
              </h2>

              <div>
                <button
                  id="about-talk-btn"
                  type="button"
                  onClick={onOpenProjectModal}
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 bg-[#111113] hover:bg-black text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
                >
                  <span>Book an Intro Call</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-black/8">
              <blockquote
                id="about-review-card"
                className="md:col-span-7 flex flex-col justify-between gap-6 md:pr-8 md:border-r md:border-black/8"
              >
                <p className="text-base sm:text-lg leading-[1.6] text-[#111113]">
                  “Replacing our legacy site with Novix’s modular CMS cut page
                  load times by 62% and lifted qualified demo bookings 2.1x
                  within sixty days.”
                </p>
                <footer className="flex items-center gap-3 text-xs text-black/65">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-[#111113] text-white font-display font-semibold text-xs inline-flex items-center justify-center shrink-0"
                  >
                    SM
                  </span>
                  <div>
                    <cite className="not-italic font-semibold text-[#111113] block">
                      Sarah Mitchell
                    </cite>
                    <span>Founder, Nova Optics · San Francisco</span>
                  </div>
                </footer>
              </blockquote>

              <div
                id="about-clients-card"
                className="md:col-span-5 flex flex-col justify-between gap-6"
              >
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#111113] tabular-nums">
                    54
                  </p>
                  <p className="text-sm text-black/65 mt-1">
                    Completed client engagements since 2021
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-black/8">
                  <div>
                    <dt className="text-xs text-black/55">
                      On-time sprint rate
                    </dt>
                    <dd className="font-mono-tabular text-base font-semibold text-[#111113] mt-0.5">
                      96.3%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-black/55">Median Lighthouse</dt>
                    <dd className="font-mono-tabular text-base font-semibold text-[#111113] mt-0.5">
                      99 / 100
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
