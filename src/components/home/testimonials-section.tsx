import React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/data";
import ResilientImage from "../images/resilient-image";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-white text-[#111113] py-20 lg:py-28 border-b border-black/8"
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-14 lg:mb-16">
          <p className="text-sm font-medium text-black/60">
            <span className="font-mono-tabular text-black/40 mr-2">07</span>
            Client Outcomes
          </p>
          <h2
            id="testimonials-main-title"
            className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] font-bold tracking-[-0.03em] text-[#111113] text-balance"
          >
            Trusted by teams shipping{" "}
            <span className="text-black/45 font-medium">
              critical launches.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonialsData.map((item) => {
            if (item.isPhotoCard && item.bgImage) {
              return (
                <article
                  key={item.id}
                  id={`testimonial-card-${item.id}`}
                  className="relative rounded-2xl overflow-hidden min-h-90 p-7 flex flex-col justify-between text-white border border-black/10 bg-neutral-950"
                >
                  <ResilientImage
                    src={item.bgImage}
                    alt={`${item.company} architectural project backdrop`}
                    className="absolute inset-0 w-full h-full object-cover"
                    fallbackTitle={item.company}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/65"
                  />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white font-display font-semibold text-xs inline-flex items-center justify-center shrink-0"
                      >
                        {item.initials}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white leading-tight">
                          {item.author}
                        </h3>
                        <p className="text-xs text-white/75">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="relative z-10 text-sm sm:text-[15px] leading-[1.6] text-white/90 my-6">
                    “{item.quote}”
                  </p>

                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="font-mono-tabular text-xs font-medium text-[#ff6b63]">
                      {item.outcomeMetric}
                    </span>
                    <span className="font-mono-tabular text-xs text-white/75">
                      {item.date}
                    </span>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="bg-[#fafafa] p-7 rounded-2xl border border-black/8 flex flex-col justify-between gap-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="w-9 h-9 rounded-full bg-[#111113] text-white font-display font-semibold text-xs inline-flex items-center justify-center shrink-0"
                    >
                      {item.initials}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111113] leading-tight">
                        {item.author}
                      </h3>
                      <p className="text-xs text-black/60">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-0.5 text-[#f59e0b]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#f59e0b]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-[1.6] text-[#111113]/90">
                  “{item.quote}”
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-black/8">
                  <span className="font-mono-tabular text-xs font-semibold text-[#d92d20]">
                    {item.outcomeMetric}
                  </span>
                  <span className="font-mono-tabular text-xs text-black/50">
                    {item.date}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
