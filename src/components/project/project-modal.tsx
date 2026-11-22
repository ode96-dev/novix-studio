"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { ProjectModalContext } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: ProjectModalContext;
}

const SERVICES_LIST = [
  "Website Design",
  "Framer / Webflow",
  "Next.js Engineering",
  "Workflow Automation",
  "Brand System",
  "SEO & Performance",
];

const BUDGET_OPTIONS = [
  "$499 – $1,500",
  "$1,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

const ProjectModal = ({ isOpen, onClose, context }: ProjectModalProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Website Design",
  ]);
  const [budget, setBudget] = useState<string>("$1,500 – $5,000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (context?.service) {
      const matched = SERVICES_LIST.find((s) =>
        context.service!.toLowerCase().includes(s.split(" ")[0].toLowerCase()),
      );
      if (matched) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedServices([matched]);
      }
    }

    if (context?.plan?.includes("Single")) {
      setBudget("$499 – $1,500");
    } else if (context?.plan?.includes("Multi-Project")) {
      setBudget("$1,500 – $5,000");
    }

    if (context?.referenceCase) {
      setDetails(`Reference case study: ${context.referenceCase}\n`);
    }
  }, [isOpen, context]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv)
        ? prev.length > 1
          ? prev.filter((s) => s !== srv)
          : prev
        : [...prev, srv],
    );
  };

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid work email address.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          budget,
          services: selectedServices,
          details: details.trim(),
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        referenceId?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setErrorMsg(
          data.error || "Unable to submit brief. Please check your entries.",
        );
        return;
      }

      setSubmittedRef(data.referenceId || "NVX-CONFIRMED");
    } catch {
      setErrorMsg("Network error while submitting brief. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedRef(null);
    setErrorMsg("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-panel-reveal"
    >
      <div
        id="project-inquiry-modal"
        className="relative w-full max-w-xl bg-[#111114] border border-white/15 text-white rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 min-h-10 min-w-10 rounded-lg bg-white/6 hover:bg-white/15 text-white/75 hover:text-white inline-flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ff3b30]"
          aria-label="Close project inquiry dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submittedRef ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <p className="font-mono-tabular text-xs text-white/55">
                Reference {submittedRef}
              </p>
              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold text-white"
              >
                Brief Received
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Thank you,{" "}
                <span className="text-white font-medium">{name}</span>. A
                principal partner will review your brief (
                {selectedServices.join(", ")}) and reply to{" "}
                <span className="text-white font-medium">{email}</span> within
                one business day.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="min-h-11 px-6 py-2.5 bg-white hover:bg-neutral-200 text-[#111113] text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Return to Page
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="space-y-1.5 pr-10">
              <p className="text-xs font-medium text-white/55">
                Start a Project · Novix® Studio
              </p>
              <h3
                id="project-modal-title"
                className="font-display text-2xl font-bold tracking-tight text-white"
              >
                Share your project scope
              </h3>
              {context?.plan && (
                <p className="text-xs text-[#ff6b63] font-medium">
                  Selected tier: {context.plan}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-white/75">
                Required capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {SERVICES_LIST.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      aria-pressed={isSelected}
                      className={`min-h-9 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                        isSelected
                          ? "bg-white text-[#111113] border-white font-semibold"
                          : "bg-white/4 hover:bg-white/10 text-white/75 border-white/15"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-white/75">
                Estimated budget
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {BUDGET_OPTIONS.map((opt) => {
                  const active = budget === opt;
                  return (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudget(opt)}
                      aria-pressed={active}
                      className={`min-h-9.5 px-2.5 py-2 rounded-lg text-xs font-mono-tabular text-center transition-colors whitespace-nowrap cursor-pointer border ${
                        active
                          ? "bg-[#ff3b30] text-white border-[#ff3b30] font-semibold"
                          : "bg-white/4 hover:bg-white/10 text-white/75 border-white/15"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="modal-name"
                  className="block text-xs font-medium text-white/75"
                >
                  Full Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full min-h-10.5 px-3.5 py-2 bg-white/5 border border-white/15 rounded-lg text-sm text-white placeholder-white/35 focus:outline-none focus:border-white/50"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-medium text-white/75"
                >
                  Work Email
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-10.5 px-3.5 py-2 bg-white/5 border border-white/15 rounded-lg text-sm text-white placeholder-white/35 focus:outline-none focus:border-white/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="modal-details"
                className="block text-xs font-medium text-white/75"
              >
                Target timeline &amp; goals (optional)
              </label>
              <textarea
                id="modal-details"
                rows={3}
                placeholder="Share your launch window, existing URL, or key deliverables..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded-lg text-sm text-white placeholder-white/35 focus:outline-none focus:border-white/50 resize-none"
              />
            </div>

            {errorMsg && (
              <p role="alert" className="text-xs font-medium text-[#ff6b63]">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-11 py-3 bg-white hover:bg-neutral-200 disabled:opacity-60 text-[#111113] font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
            >
              <span>
                {isSubmitting ? "Submitting Brief..." : "Send Project Brief"}
              </span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
