"use client";

import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import PricingSection from "@/components/home/pricing-section";
import ProcessSection from "@/components/home/process-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";
import WorkSection from "@/components/home/work-section";
import ProjectModal from "@/components/project/project-modal";
import { ProjectModalContext } from "@/types";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<
    ProjectModalContext | undefined
  >(undefined);

  const handleOpenModal = (context?: ProjectModalContext) => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#111113] flex flex-col">
      <main className="grow">
        <HeroSection onOpenProjectModal={() => handleOpenModal()} />
        <AboutSection onOpenProjectModal={() => handleOpenModal()} />
        <WorkSection onOpenProjectModal={handleOpenModal} />
        <ServicesSection onOpenProjectModal={handleOpenModal} />
        <ProcessSection onOpenProjectModal={() => handleOpenModal()} />
        <WhyChooseUsSection onOpenProjectModal={() => handleOpenModal()} />
        <PricingSection onOpenProjectModal={handleOpenModal} />
      </main>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        context={modalContext}
      />
    </div>
  );
}
