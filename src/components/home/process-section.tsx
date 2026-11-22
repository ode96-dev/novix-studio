"use client";

import { processData } from "@/data/data";
import { ArrowUpRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenProjectModal: () => void;
}

const ProcessSection = ({ onOpenProjectModal }: ProcessSectionProps) => {
  return (
    <section
      id="process"
      className="bg-[#fafafa] text-[#111113] py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-black/60">
              <span className="font-mono-tabular text-black/40 mr-2">04</span>
              Delivery Process
            </p>
            <h2
              id="process-main-title"
              className="font-display text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.15] font-bold tracking-tight text-[#111113] text-balance"
            >
              Structured two-week sprints{" "}
              <span className="text-black/45 font-medium">
                built for predictable shipping.
              </span>
            </h2>
          </div>

          <div className="shrink-0">
            <button
              id="process-contact-btn"
              type="button"
              onClick={onOpenProjectModal}
              className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 bg-[#111113] hover:bg-black text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
            >
              <span>Discuss Your Timeline</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch lg:pb-6">
          {processData.map((step) => {
            const isDark = Boolean(step.isFocalDark);

            return (
              <div
                key={step.id}
                id={`process-card-${step.number}`}
                className={`p-7 rounded-2xl flex flex-col justify-between gap-10 transition-colors duration-200 ${
                  isDark
                    ? "bg-[#111113] text-white border border-white/10 lg:translate-y-6"
                    : "bg-white text-[#111113] border border-black/8"
                }`}
              >
                <div className="flex items-center justify-between border-b pb-4 border-current/10">
                  <span
                    className={`font-mono-tabular text-xs font-medium ${
                      isDark ? "text-[#ff594f]" : "text-[#d92d20]"
                    }`}
                  >
                    Step {step.number}
                  </span>
                  <span
                    className={`font-mono-tabular text-xs ${
                      isDark ? "text-white/55" : "text-black/50"
                    }`}
                  >
                    {step.duration}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3
                    className={`font-display text-xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-[#111113]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-[1.6] ${
                      isDark ? "text-white/75" : "text-black/65"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
