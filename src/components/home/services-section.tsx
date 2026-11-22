"use client";

import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { ProjectModalContext } from "@/types";
import { servicesData } from "@/data/data";
import ResilientImage from "../images/resilient-image";

interface ServicesSectionProps {
  onOpenProjectModal: (context?: ProjectModalContext) => void;
}

const ServicesSection = ({ onOpenProjectModal }: ServicesSectionProps) => {
  const [expandedId, setExpandedId] = useState<string>("service-01");

  const toggleService = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="services"
      className="bg-[#0a0a0a] text-white py-20 lg:py-28 border-b border-white/10"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 lg:mb-20">
          <p className="text-sm font-medium text-white/60">
            <span className="font-mono-tabular text-white/40 mr-2">03</span>
            Capabilities
          </p>
          <h2
            id="services-main-title"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.03em] text-white text-balance"
          >
            <span className="text-white/55 font-medium">
              Crafted with rigor.
            </span>{" "}
            Built for measurable growth.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-white/10 border-t border-b border-white/10">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;
            const panelId = `service-panel-${service.id}`;

            return (
              <div
                key={service.id}
                id={`service-item-${service.id}`}
                className="py-6 sm:py-8"
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleService(service.id)}
                  className="w-full min-h-11 flex items-center justify-between gap-4 text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3b30] rounded-sm"
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono-tabular text-2xl sm:text-4xl font-semibold text-white/35 group-hover:text-white/75 transition-colors duration-150">
                      {service.number}
                    </span>
                    <span className="font-display text-xl sm:text-3xl font-semibold text-white tracking-tight">
                      {service.title}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="w-10 h-10 rounded-lg border border-white/15 bg-white/4 group-hover:border-white/35 flex items-center justify-center text-white/75 group-hover:text-white shrink-0 transition-colors duration-150"
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isExpanded && (
                  <div
                    id={panelId}
                    className="mt-6 pt-6 border-t border-white/6 sm:pl-17 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-panel-reveal"
                  >
                    <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-16/10">
                      <ResilientImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                        fallbackTitle={service.title}
                      />
                    </div>

                    <div className="lg:col-span-6 space-y-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                        {service.capabilities.map((cap, idx) => (
                          <React.Fragment key={cap}>
                            {idx > 0 && <span aria-hidden="true">·</span>}
                            <span>{cap}</span>
                          </React.Fragment>
                        ))}
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-tabular text-white/80">
                          {service.turnaround}
                        </span>
                      </div>

                      <p className="text-[15px] leading-[1.65] tracking-[0.005em] text-white/75">
                        {service.description}
                      </p>

                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            onOpenProjectModal({ service: service.title })
                          }
                          className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 bg-white hover:bg-neutral-200 text-[#111113] text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
                        >
                          <span>{service.actionLabel}</span>
                          <ArrowUpRight
                            className="w-4 h-4"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
