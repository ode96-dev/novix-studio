"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/data";
import ResilientImage from "../images/resilient-image";

const FAQSection = () => {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#0a0a0a] text-white py-20 lg:py-28 border-b border-white/10"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-14 lg:mb-20">
          <p className="text-sm font-medium text-white/60">
            <span className="font-mono-tabular text-white/40 mr-2">08</span>
            Frequently Asked Questions
          </p>
          <h2
            id="faq-main-title"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white"
          >
            Common questions.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className="bg-[#121214] border border-white/10 rounded-xl transition-colors duration-150"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full min-h-14 px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30] rounded-xl"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-white/95 group-hover:text-white">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white shrink-0 transition-colors"
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/6 text-sm sm:text-[15px] text-white/70 leading-[1.65] tracking-[0.005em] animate-panel-reveal"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 min-h-80">
            <ResilientImage
              src={"/images/studio_team_editorial_1795217715822.jpg"}
              alt="Novix Studio designers discussing typographic proofs"
              className="w-full h-full object-cover"
              fallbackTitle="Novix Studio Workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
