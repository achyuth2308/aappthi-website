"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    {
        label: "Global",
        children: [
            { href: "/global-exposure", label: "Market Exposure" },
            { href: "/industry-engagements", label: "Industry Engagements" },
        ],
    },
    { href: "/awards", label: "Awards" },
    { href: "/team", label: "Team" },
    { href: "/careers", label: "Careers" },
    { href: "/apply", label: "Apply" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setDropdownOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#07172b]/95 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src="/Aapthi_logo.png"
                                alt="Aapthi Marketing Solutions"
                                width={44}
                                height={44}
                                className="rounded-lg object-contain"
                                priority
                            />
                            <div className="hidden sm:block">
                                <div className="text-white font-bold text-sm leading-tight group-hover:text-[#C9A84C] transition-colors duration-200">
                                    Aapthi Marketing
                                </div>
                                <div className="text-[#C9A84C] text-xs font-medium tracking-wider uppercase opacity-80">
                                    Solutions Pvt Ltd
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div
                                        key={link.label}
                                        className="relative"
                                        onMouseEnter={() => setDropdownOpen(true)}
                                        onMouseLeave={() => setDropdownOpen(false)}
                                    >
                                        <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/80 hover:text-[#C9A84C] transition-colors duration-200 font-medium">
                                            {link.label}
                                            <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                                        </button>
                                        <AnimatePresence>
                                            {dropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 mt-1 w-52 glass-card shadow-xl py-2"
                                                >
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-[#C9A84C] hover:bg-white/5 transition-colors duration-150"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium animated-underline transition-colors duration-200 ${pathname === link.href
                                            ? "text-[#C9A84C]"
                                            : "text-white/80 hover:text-[#C9A84C]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* CTA + Mobile toggle */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-[#0B1F3A] rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
                                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                            >
                                Request Consultation
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0B1F3A] shadow-2xl lg:hidden overflow-y-auto"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <span className="text-white font-bold">Navigation</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-1 text-white hover:text-[#C9A84C]"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label}>
                                        <div className="px-3 py-2 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider mt-3">
                                            {link.label}
                                        </div>
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-5 py-2.5 text-sm text-white/70 hover:text-[#C9A84C] hover:bg-white/5 rounded-lg transition-colors duration-150"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 ${pathname === link.href
                                            ? "text-[#C9A84C] bg-white/5"
                                            : "text-white/80 hover:text-[#C9A84C] hover:bg-white/5"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center py-3 text-sm font-semibold text-[#0B1F3A] rounded-lg"
                                    style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                                >
                                    Request Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}
