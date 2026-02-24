"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Star,
    Trophy,
    Shield,
    Zap,
    Globe,
    ChevronRight,
    Building2,
    Award,
} from "lucide-react";
import CertificateCard from "@/components/ui/CertificateCard";

/* ── Certificate Gallery Data ───────────────────────── */
const certificates = [
    {
        title: "Highway Safety Innovation Award",
        description:
            "Recognition for innovation in highway safety systems, highlighting the use of data-driven monitoring, real-time reporting, and digital analytics.",
        image: "/Highway Safety Innovation.png",
    },
    {
        title: "Outstanding Certificate of Excellence – Highway Safety",
        description:
            "Awarded for exemplary contribution to sustainable and technology-driven highway safety initiatives.",
        image: "/Highway Safety.png",
    },
    {
        title: "Outstanding Maritime Project Leadership",
        description:
            "Recognition for leadership in maritime and port-related infrastructure projects.",
        image: "/Maritime.png",
    },
    {
        title: "Pioneer in Smart City Technologies",
        description:
            "Honoring innovation in smart city platforms and urban technology solutions.",
        image: "/Pionner.png",
    },
];

/* ── Awards Grid Data ─────────────────────────────── */
const awards = [
    {
        id: "asia-infra",
        badge: "SMART",
        badgeColor:
            "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
        icon: Zap,
        iconBg: "bg-yellow-400/10 text-yellow-400",
        title: "Asia Infrastructure Digital Excellence Award – 2023",
        forum: "ASIA INFRASTRUCTURE TECHNOLOGY FORUM",
        milestone: "Metro Infrastructure Digital Monitoring System",
        highlights: [
            "Best Real-Time Monitoring",
            "Smart Analytics Platform",
        ],
        certColor: "from-amber-50 to-yellow-50",
        borderColor: "border-amber-200",
        accentColor: "#C9A84C",
        year: "2023",
        presentedBy: "Asia Infrastructure Technology Forum",
    },
    {
        id: "construction",
        badge: "ERP",
        badgeColor:
            "text-blue-400 bg-blue-400/10 border-blue-400/30",
        icon: Shield,
        iconBg: "bg-blue-400/10 text-blue-400",
        title: "Global Construction Tech Innovation Award – 2022",
        forum: "INTERNATIONAL CONSTRUCTION DIGITAL COUNCIL",
        milestone: "Coastal Bridge Construction ERP Implementation",
        highlights: [
            "Digital Process Innovation",
            "ERP Excellence Award",
        ],
        certColor: "from-blue-50 to-teal-50",
        borderColor: "border-teal-200",
        accentColor: "#1a8c7f",
        year: "2022",
        presentedBy:
            "International Construction Digital Council",
    },
];

/* ── Certificate Card ─────────────────────────────── */
function CertCard({ award }) {
    return (
        <div
            className={`relative rounded-xl bg-gradient-to-br ${award.certColor} border-2 ${award.borderColor} p-5 overflow-hidden`}
            style={{ minHeight: 170 }}
        >
            <div className="text-center py-2">
                <p className="text-xs opacity-60 mb-1">
                    Presented by the
                </p>
                <p
                    className="text-xs italic mb-2"
                    style={{ color: award.accentColor }}
                >
                    {award.presentedBy}
                </p>
                <div
                    className="w-8 h-px mx-auto mb-2"
                    style={{ background: award.accentColor }}
                />
                <p
                    className="text-xs font-bold leading-tight"
                    style={{ color: award.accentColor }}
                >
                    {award.title.split("–")[0].trim()}
                </p>
                <p className="text-xs opacity-50 mt-1">
                    {award.year}
                </p>
                <div className="mt-2 text-xs opacity-40">
                    Aapthi Marketing Solutions Pvt Ltd
                </div>
            </div>
        </div>
    );
}

/* ── Page ─────────────────────────────────────────── */
export default function AwardsPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="bg-navy-gradient pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 mb-6"
                        >
                            <Trophy size={14} className="text-[#C9A84C]" />
                            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-[0.2em]">
                                Industry Honors
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Excellence{" "}
                            <span className="text-[#C9A84C]">Recognized</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Our commitment to digital transformation
                            has been celebrated by leading global
                            infrastructure and technology forums.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* FEATURED AWARD WITH REAL IMAGE */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <div
                        className="rounded-3xl overflow-hidden shadow-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, #0B1F3A 0%, #152d52 60%, #0f2840 100%)",
                        }}
                    >
                        <div className="grid lg:grid-cols-2 min-h-[340px]">

                            {/* LEFT IMAGE */}
                            {/* LEFT IMAGE */}
                            <div className="flex items-center justify-center p-10">
                                <div className="w-full max-w-md">
                                    <Image
                                        src="/Mindspace.jpeg"
                                        alt="Mindspace Achievement Awards Certificate"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto rounded-2xl shadow-2xl border border-[#C9A84C]/20"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* RIGHT TEXT */}
                            <div className="flex flex-col justify-center p-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 mb-5 w-fit">
                                    <Star
                                        size={11}
                                        fill="#C9A84C"
                                        className="text-[#C9A84C]"
                                    />
                                    <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">
                                        Grand Excellence
                                    </span>
                                </div>

                                <h2 className="text-4xl font-black text-white mb-4">
                                    Mindspace Achievement{" "}
                                    <span className="text-[#C9A84C]">
                                        Awards
                                    </span>
                                </h2>

                                <p className="text-white/60 text-sm mb-6">
                                    Prestigious recognition for
                                    organizational excellence and
                                    technical innovation in the
                                    infrastructure digital landscape.
                                </p>

                                <div className="flex gap-3">
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-white/40 text-xs">
                                            Presented By
                                        </p>
                                        <p className="text-white text-sm font-semibold">
                                            Mindspace Consortium
                                        </p>
                                    </div>

                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                        <p className="text-white/40 text-xs">
                                            Year
                                        </p>
                                        <p className="text-white text-sm font-semibold">
                                            2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Awards Showcase */}
            <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
                            Awards & Recognitions
                        </h2>
                        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#C9A84C] to-[#E2C06D] rounded-full mb-4" />
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Industry recognitions reflecting our leadership in infrastructure
                            digital transformation, analytics innovation, and enterprise technology.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* Card */}
                        {[
                            {
                                title: "Metro Infrastructure Digital Monitoring System",
                                award: "Asia Infrastructure Digital Excellence Award – 2023",
                                category: "Smart Rail Monitoring Innovation",
                                by: "Asia Infrastructure Technology Forum",
                                highlights: [
                                    "Best Real-Time Monitoring Implementation",
                                    "Excellence in Construction Data Automation"
                                ]
                            },
                            {
                                title: "Coastal Bridge Construction ERP Implementation",
                                award: "Global Construction Tech Innovation Award – 2022",
                                category: "ERP Deployment in Large Infrastructure",
                                by: "International Construction Digital Council",
                                highlights: [
                                    "Outstanding Budget Control Automation",
                                    "Digital Documentation Transformation"
                                ]
                            },
                            {
                                title: "Smart Port Digital Operations Platform",
                                award: "Maritime Digital Transformation Award – 2023",
                                category: "Port Operations Optimization",
                                by: "Asia-Pacific Maritime Technology Association",
                                highlights: [
                                    "Cargo Turnaround Efficiency",
                                    "Integrated Vendor Management"
                                ]
                            },
                            {
                                title: "National Highway Performance Dashboard",
                                award: "Infrastructure Analytics Excellence Award – 2023",
                                category: "Smart Highway Monitoring",
                                by: "Global Transport Data Summit",
                                highlights: [
                                    "Data-Driven Maintenance Innovation",
                                    "Real-Time Field Reporting"
                                ]
                            },
                            {
                                title: "Smart City Urban Planning & Analytics",
                                award: "Smart City Innovation Recognition – 2023",
                                category: "Urban Digital Governance",
                                by: "International Smart Cities Consortium",
                                highlights: [
                                    "Unified Infrastructure Dashboard",
                                    "Government Workflow Automation"
                                ]
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl p-7 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >

                                {/* Gold Accent Top Border */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A84C] to-[#E2C06D]" />

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-[#0B1F3A] mb-4">
                                    🏆 {item.title}
                                </h3>

                                {/* Info */}
                                <p className="text-sm mb-1">
                                    <span className="font-semibold">Award:</span> {item.award}
                                </p>
                                <p className="text-sm mb-1">
                                    <span className="font-semibold">Category:</span> {item.category}
                                </p>
                                <p className="text-sm mb-4">
                                    <span className="font-semibold">Presented By:</span> {item.by}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {item.highlights.map((h, j) => (
                                        <li key={j} className="flex gap-2">
                                            <span className="text-[#C9A84C] font-bold">✓</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CERTIFICATE GALLERY */}
            <section className="py-16 px-4 bg-[#F8F9FA]">
                <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert) => (
                        <CertificateCard
                            key={cert.title}
                            cert={cert}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
}