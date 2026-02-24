"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Code, Headphones, Building, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";
import Link from "next/link";



const services = [
    {
        id: "it-staffing",
        icon: Users,
        title: "IT Staffing",
        subtitle: "Talent Acquisition & Deployment",
        image: "/it_staffing_service.png",
        desc: "We source, screen, and deploy top technology professionals across contract, permanent, and remote models — aligned precisely to your business requirements.",
        features: [
            "Contract Staffing — Flexible short-to-long term placements",
            "Permanent Hiring — Executive and specialist searches",
            "Remote Deployment — Managed offshore talent teams",
            "Technical Assessment — Domain-specific screening",
            "Onboarding Support — Seamless integration assistance",
        ],
        overlay: "from-blue-900/70 to-blue-950/50",
        bg: "bg-blue-50",
    },
    {
        id: "software-dev",
        icon: Code,
        title: "Software Development",
        subtitle: "Digital Product Engineering",
        image: "/enterprise_partnership_service.png",
        desc: "From corporate websites to complex enterprise platforms, our development teams design and deliver scalable, maintainable software that serves real business needs.",
        features: [
            "Corporate Website Development",
            "Enterprise Web Applications",
            "Custom Software Solutions",
            "API Integration & Management",
            "Maintenance & Enhancement Services",
        ],
        overlay: "from-purple-900/70 to-purple-950/50",
        bg: "bg-purple-50",
    },
    {
        id: "non-voice",
        icon: Headphones,
        title: "Non-Voice Business Services",
        subtitle: "Backend Process Management",
        image: "/data_processing_service.png",
        desc: "Reliable, accurate, and scalable back-office support services that free your team to focus on strategic activities while we ensure operational precision.",
        features: [
            "Data Processing & Management",
            "XML Tagging & Annotation",
            "Backend Business Support",
            "Data Validation & Quality Control",
            "Document Management Services",
        ],
        overlay: "from-green-900/70 to-green-950/50",
        bg: "bg-green-50",
    },
    {
        id: "construction",
        icon: Building,
        title: "Construction & Real Estate Support",
        subtitle: "Project & Client Management",
        image: "/Smart City Urban Planning System.jpeg",
        desc: "Specialized coordination and support services for the construction and real estate sector — from project tracking to client relationship management.",
        features: [
            "Project Coordination & Tracking",
            "Real Estate Marketing Support",
            "Client Relationship Management",
            "Documentation & Compliance Support",
            "Vendor & Contractor Coordination",
        ],
        overlay: "from-orange-900/70 to-orange-950/50",
        bg: "bg-orange-50",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy-gradient pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                        >
                            Our Services
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            End-to-End Enterprise Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Four core service lines. One focused mission: enable your business to perform at its peak.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {services.map((svc, i) => (
                        <div
                            key={svc.id}
                            id={svc.id}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={i % 2 !== 0 ? "lg:col-start-2" : ""}
                            >
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${svc.bg} mb-4`}>
                                    <svc.icon size={14} className="text-gray-600" />
                                    <span className="text-gray-600 text-xs font-medium">{svc.subtitle}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">{svc.title}</h2>
                                <p className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
                                <ul className="space-y-3">
                                    {svc.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={11} className="text-[#C9A84C]" />
                                            </div>
                                            <span className="text-gray-600 text-sm">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] rounded-xl hover:scale-105 transition-all duration-200"
                                        style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`relative rounded-2xl overflow-hidden min-h-72 ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                            >
                                {/* Real service image */}
                                <Image
                                    src={svc.image}
                                    alt={svc.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Colored gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${svc.overlay} flex flex-col items-center justify-center p-10`}>
                                    <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                                        <svc.icon size={36} className="text-white" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2 text-center">{svc.title}</h3>
                                    <p className="text-white/80 text-sm text-center">{svc.subtitle}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Need a Custom Solution?</h2>
                    <p className="text-gray-500 mb-6">Our team of experts will design a tailored engagement model that fits your exact requirements.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-[#0B1F3A] font-semibold rounded-xl hover:scale-105 transition-all duration-200"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                    >
                        Request Consultation
                    </Link>
                </div>
            </section>
        </>
    );
}
