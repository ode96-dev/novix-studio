"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface LegalModalProps {
  doc: "terms" | "privacy" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ doc, onClose }) => {
  useEffect(() => {
    if (!doc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [doc, onClose]);

  if (!doc) return null;

  const isTerms = doc === "terms";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-panel-reveal"
    >
      <div className="relative w-full max-w-lg bg-white text-[#111113] border border-black/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-black/50">Novix® Studio</p>
            <h3
              id="legal-modal-title"
              className="font-display text-xl font-bold mt-1"
            >
              {isTerms ? "Terms of Use" : "Privacy Policy"}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal notice"
            className="min-h-10 min-w-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-black/70 hover:text-black inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="text-sm text-black/75 leading-relaxed space-y-3 border-t border-black/8 pt-4">
          {isTerms ? (
            <>
              <p>
                All project engagements with Novix® Studio are governed by a
                signed Master Services Agreement and Statement of Work
                specifying deliverables, sprint milestones, and intellectual
                property transfer upon final payment.
              </p>
              <p>
                Displayed starting rates reflect baseline single-sprint and
                multi-project retainers; final pricing is confirmed in writing
                prior to kickoff.
              </p>
            </>
          ) : (
            <>
              <p>
                Project brief details submitted through this site—including your
                name, work email, and scope notes—are used solely by Novix®
                Studio partners to prepare your consultation and proposal.
              </p>
              <p>
                We never sell, rent, or distribute client contact information to
                third-party brokers. For data deletion requests, contact
                hello@novixstudio.com.
              </p>
            </>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-10 px-5 py-2 bg-[#111113] hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
