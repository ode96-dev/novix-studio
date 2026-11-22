"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectModalContext } from "@/types";
import { projectsData } from "@/data/data";
import ResilientImage from "../images/resilient-image";

interface WorkSectionProps {
  onOpenProjectModal: (context?: ProjectModalContext) => void;
}

const WorkSection = ({ onOpenProjectModal }: WorkSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(4);
  const activeProject = projectsData[activeIndex];

  return (
    <section
      id="work"
      className="bg-[#f4f4f6] text-[#111113] py-16 sm:py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14 lg:mb-16">
          <p className="text-sm font-medium text-black/60">
            <span className="font-mono-tabular text-black/40 mr-2">02</span>
            Selected Work
          </p>
          <h2
            id="work-main-title"
            className="font-display text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#111113] text-balance"
          >
            Build, launch, and scale with measurable confidence.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            role="tablist"
            aria-label="Case study index"
            className="grid grid-cols-5 gap-1 sm:gap-2 px-1 sm:px-3 relative z-10"
          >
            {projectsData.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  id={`work-tab-${project.number}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="featured-work-card"
                  aria-label={`${project.number} ${project.title}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{ backgroundColor: project.tabSurface }}
                  className={`min-h-11 min-w-0 px-2 sm:px-4 py-2.5 rounded-t-xl font-mono-tabular text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30] ${
                    isActive
                      ? "text-white -translate-y-1 pb-3.5 shadow-md ring-1 ring-white/25"
                      : "text-white/70 hover:text-white translate-y-1 opacity-85 hover:opacity-100"
                  }`}
                >
                  <span className="shrink-0">{project.number}</span>
                  <span className="hidden lg:inline truncate font-sans text-xs font-normal text-white/85">
                    {project.title}
                  </span>
                </button>
              );
            })}
          </div>

          <article
            id="featured-work-card"
            role="tabpanel"
            aria-labelledby={`work-tab-${activeProject.number}`}
            className="relative rounded-2xl overflow-hidden border border-black/10 bg-[#0e0e10] shadow-lg z-20 md:min-h-115 lg:min-h-135 flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full md:aspect-auto md:absolute md:inset-0 bg-neutral-950 overflow-hidden">
              <ResilientImage
                key={activeProject.id}
                src={activeProject.image}
                alt={`${activeProject.title} — ${activeProject.category} case study`}
                className="w-full h-full object-cover animate-panel-reveal"
                fallbackTitle={activeProject.title}
              />

              <div
                aria-hidden="true"
                className="md:hidden absolute inset-0 bg-linear-to-t from-[#0e0e10] via-black/20 to-transparent"
              />
              <span className="md:hidden absolute top-4 left-4 font-mono-tabular text-xl font-semibold text-white/90">
                {activeProject.number}
              </span>

              <div
                aria-hidden="true"
                className="hidden md:block absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/25"
              />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-10 gap-6 md:gap-12">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="hidden md:inline font-mono-tabular text-3xl lg:text-4xl font-semibold text-white/90">
                  {activeProject.number}
                </span>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-white/80">
                  {activeProject.deliverables.map((item, i) => (
                    <React.Fragment key={item}>
                      {i > 0 && (
                        <span aria-hidden="true" className="text-white/40">
                          ·
                        </span>
                      )}
                      <span>{item}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
                <div className="max-w-xl space-y-2">
                  <p className="text-xs font-medium text-white/75">
                    {activeProject.client} <span aria-hidden="true">·</span>{" "}
                    {activeProject.category} <span aria-hidden="true">·</span>{" "}
                    <span className="font-mono-tabular">
                      {activeProject.year}
                    </span>
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {activeProject.description}
                  </p>
                  <p className="font-mono-tabular text-xs font-medium text-[#ff6b63] pt-1">
                    Outcome: {activeProject.outcome}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    id="work-inquire-btn"
                    type="button"
                    onClick={() =>
                      onOpenProjectModal({
                        service: activeProject.deliverables[0],
                        referenceCase: `${activeProject.number} — ${activeProject.title}`,
                      })
                    }
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 min-h-11 px-5 py-2.5 bg-white hover:bg-neutral-200 text-[#111113] text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
                  >
                    <span>Inquire Similar Scope</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
