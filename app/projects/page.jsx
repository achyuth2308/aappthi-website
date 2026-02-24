"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Server, Globe, BarChart3, Building2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";
import Link from "next/link";



const projects = [
    {
        icon: Monitor,
        title: "Metro Infrastructure Digital Monitoring System",
        category: "Infrastructure Technology",
        year: "2023",
        image: "/Metro Infrastructure Digital Monitoring System.jpeg",
        desc: "Delivered a comprehensive digital monitoring platform for urban metro infrastructure, integrating real-time sensor data, predictive maintenance alerts, and executive dashboards for operational leadership teams.",
        tech: ["IoT Integration", "Real-Time Analytics", "Executive Dashboards", "Alert Management"],
        overlay: "from-blue-900/80 to-blue-950/60",
    },
    {
        icon: Server,
        title: "Coastal Bridge ERP Implementation",
        category: "Enterprise Resource Planning",
        year: "2023",
        image: "/Coastal Bridge ERP Implementation.jpeg",
        desc: "Coordinated end-to-end ERP system deployment for a coastal bridge infrastructure project, streamlining procurement, asset management, workforce scheduling, and financial reporting into a unified digital platform.",
        tech: ["ERP Deployment", "Process Automation", "Financial Integration", "Asset Management"],
        overlay: "from-purple-900/80 to-purple-950/60",
    },
    {
        icon: Globe,
        title: "Smart Port Digital Operations Platform",
        category: "Logistics & Port Management",
        year: "2022",
        image: "/Smart Port Digital Operations Platform.jpeg",
        desc: "Designed and implemented a digital operations platform for port management, enabling real-time vessel tracking, cargo documentation, berth scheduling, and performance analytics for port authorities.",
        tech: ["Vessel Tracking", "Cargo Management", "Berth Scheduling", "Performance Analytics"],
        overlay: "from-teal-900/80 to-teal-950/60",
    },
    {
        icon: BarChart3,
        title: "National Highway Performance Dashboard",
        category: "Analytics & Reporting",
        year: "2022",
        image: "/National Highway Performance Dashboard.jpeg",
        desc: "Developed a centralized analytics dashboard aggregating performance data from national highway corridors, providing government stakeholders with actionable insights on traffic patterns, infrastructure health, and maintenance cycles.",
        tech: ["Data Aggregation", "Visualization", "Government Reporting", "KPI Tracking"],
        overlay: "from-orange-900/80 to-orange-950/60",
    },
    {
        icon: Building2,
        title: "Smart City Urban Planning System",
        category: "Smart City Solutions",
        year: "2021",
        image: "/Smart City Urban Planning System.jpeg",
        desc: "Supported the digital architecture for a smart city planning initiative, providing data processing, spatial analytics support, and stakeholder reporting tools for urban development officials.",
        tech: ["Urban Analytics", "Spatial Data", "Stakeholder Reporting", "Planning Tools"],
        overlay: "from-green-900/80 to-green-950/60",
    },
];

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy-gradient pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                        >
                            Our Work
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Project Portfolio
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            A selection of enterprise digital transformation engagements demonstrating our capabilities across infrastructure, logistics, and analytics domains.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* IMAGE */}
                            <div className="relative w-full lg:w-1/2 h-[320px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.overlay} opacity-80`}
                                />

                                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                                    <project.icon className="text-white" size={24} />
                                </div>
                            </div>

                            {/* TEXT */}
                            <div className="lg:w-1/2">
                                <p className="text-xs uppercase tracking-wider text-[#C9A84C] mb-2">
                                    {project.category} • {project.year}
                                </p>

                                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-xs font-medium text-[#0B1F3A] bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Have a Project in Mind?</h2>
                    <p className="text-gray-500 mb-6">Our enterprise solutions team is ready to help you plan, design, and execute your next digital transformation initiative.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-[#0B1F3A] font-semibold rounded-xl hover:scale-105 transition-all duration-200"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                    >
                        Start a Conversation <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}
