'use client';

import React, {useState, useEffect} from 'react';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import Link from "next/link";
import {ProjectModalContext} from "@/types";
import ProjectModal from "@/components/project/project-modal";


const NAV_LINKS = [
    {name: 'Work', href: '#work'},
    {name: 'Services', href: '#services'},
    {name: 'Process', href: '#process'},
    {name: 'Pricing', href: '#pricing'},
    {name: 'FAQ', href: '#faq'},
];


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('work');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContext, setModalContext] = useState<ProjectModalContext | undefined>(undefined);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 32);
        };
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenModal = (context?: ProjectModalContext) => {
        setModalContext(context);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header
                id="main-navbar"
                className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    scrolled
                        ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10'
                        : 'bg-[#0a0a0a]/75 backdrop-blur-sm border-b border-white/6'
                }`}
            >
                <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
                    <Link
                        id="nav-logo"
                        href="#"
                        className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3b30] rounded-sm"
                    >
                        novix®
                    </Link>

                    <nav
                        id="desktop-nav-menu"
                        aria-label="Primary navigation"
                        className="hidden md:flex items-center gap-7"
                    >
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.name.toLowerCase();
                            return (
                                <a
                                    key={link.name}
                                    id={`nav-link-${link.name.toLowerCase()}`}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.name.toLowerCase())}
                                    className={`relative py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3b30] ${
                                        isActive ? 'text-white' : 'text-white/65 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 right-0 bottom-1 h-px bg-[#ff3b30] transition-transform duration-200 origin-left ${
                                            isActive ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            id="nav-start-project-btn"
                            type="button"
                            onClick={() => handleOpenModal()}
                            className="hidden md:inline-flex items-center gap-2 min-h-10 px-4 py-2 text-[13px] font-medium text-[#111113] bg-white hover:bg-neutral-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3b30]"
                        >
                            <span>Start Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true"/>
                        </button>

                        <button
                            id="nav-mobile-toggle-btn"
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center text-white/85 hover:text-white border border-white/15 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#ff3b30]"
                            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <nav
                        id="mobile-nav-menu"
                        aria-label="Mobile navigation"
                        className="md:hidden bg-[#0e0e10] border-t border-white/10 px-4 py-4 flex flex-col gap-1"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.name.toLowerCase());
                                    setMobileMenuOpen(false);
                                }}
                                className="min-h-11 px-3 flex items-center text-sm font-medium text-white/80 hover:text-white border-b border-white/[0.06] last:border-b-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-3">
                            <button
                                id="mobile-start-project-btn"
                                type="button"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handleOpenModal()
                                }}
                                className="w-full min-h-11 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#111113] bg-white hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                            >
                                <span>Start Project</span>
                                <ArrowUpRight className="w-4 h-4" aria-hidden="true"/>
                            </button>
                        </div>
                    </nav>
                )}
            </header>
            <ProjectModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                context={modalContext}
            />
        </>
    );
};

export default Navbar;
