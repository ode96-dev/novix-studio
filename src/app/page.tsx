"use client";

import HeroSection from "@/components/home/hero-section";
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
      </main>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        context={modalContext}
      />
    </div>
  );
}
