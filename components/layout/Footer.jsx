import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
    company: [
        { href: "/about", label: "About Us" },
        { href: "/team", label: "Our Team" },
        { href: "/awards", label: "Awards" },
        { href: "/careers", label: "Careers" },
    ],
    services: [
        { href: "/services#it-staffing", label: "IT Staffing" },
        { href: "/services#software-dev", label: "Software Development" },
        { href: "/services#non-voice", label: "Non-Voice BPO" },
        { href: "/services#construction", label: "Construction Support" },
    ],
    insights: [
        { href: "/global-exposure", label: "Global Market Exposure" },
        { href: "/industry-engagements", label: "Industry Engagements" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact Us" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#07172b] text-white">
            {/* CTA Banner */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                                Ready to Transform Your Business?
                            </h3>
                            <p className="text-white/60 text-sm">
                                Partner with us for enterprise-grade IT and workforce solutions.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-[#0B1F3A] rounded-lg whitespace-nowrap hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                        >
                            Request Consultation
                        </Link>
                    </div>
                </div>
            </div>

            {/* Links Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/Aapthi_logo.png"
                                alt="Aapthi Marketing Solutions"
                                width={44}
                                height={44}
                                className="rounded-lg object-contain"
                            />
                            <div>
                                <div className="text-white font-bold text-sm leading-tight">Aapthi Marketing</div>
                                <div className="text-[#C9A84C] text-xs font-medium opacity-80">Solutions Pvt Ltd</div>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Empowering businesses with smart IT & workforce solutions across India and Asia-Pacific.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/company/aapthimarketing/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C9A84C]/20 flex items-center justify-center text-white/50 hover:text-[#C9A84C] transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={15} />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C9A84C]/20 flex items-center justify-center text-white/50 hover:text-[#C9A84C] transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter size={15} />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#C9A84C]/20 flex items-center justify-center text-white/50 hover:text-[#C9A84C] transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook size={15} />
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.services.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors duration-150"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                                <span className="text-white/55 text-sm">
                                    Aapthi Marketing Solutions Pvt Ltd,<br />
                                    PR2W+2RH, Nai Duniya, Revenue <br />
                                    Colony, Indira Gandhi Nagar, Indore,<br />
                                    Madhya Pradesh, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={15} className="text-[#C9A84C] shrink-0" />
                                <a href="mailto:hr@aapthisolutions.com" className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors">
                                    hr@aapthisolutions.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={15} className="text-[#C9A84C] shrink-0" />
                                <a href="tel:+91 9499886597" className="text-white/55 text-sm hover:text-[#C9A84C] transition-colors">
                                    +91 9499886597
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/35 text-xs">
                        © {new Date().getFullYear()} Aapthi Marketing Solutions Pvt Ltd. All rights reserved.
                    </p>
                    <p className="text-white/25 text-xs text-center">
                        Company logos and names referenced on this site are for informational and demo purposes only.
                    </p>
                </div>
            </div>
        </footer>
    );
}
