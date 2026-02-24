"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Handshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";




const values = [
    { icon: Target, title: "Integrity", desc: "We operate with full transparency, ethical standards, and accountability across every engagement." },
    { icon: Heart, title: "Client-Centricity", desc: "Our clients' success is our success — every decision we make is guided by client outcomes." },
    { icon: Eye, title: "Excellence", desc: "We maintain uncompromising quality standards in talent, technology, and service delivery." },
    { icon: Handshake, title: "Partnership", desc: "We build long-term relationships, not just transactions. Trust is our most valuable asset." },
];

const timeline = [
    { year: "Foundation", event: "Aapthi Marketing Solutions established with a focus on IT staffing and BPO services." },
    { year: "Expansion", event: "Extended service lines to include software development and real estate support." },
    { year: "Growth", event: "Scaled operations and deepened domain expertise across multiple industry verticals." },
    { year: "Today", event: "A diversified enterprise services partner trusted by corporate clients across India." },
];

const services = [
    "Real Estate Support & Marketing",
    "Building & Construction Coordination",
    "Software Application Development",
    "Non-Voice Business Process Services",
    "IT Staffing & Talent Acquisition",
    "Contract & Permanent Hiring",
];

export default function AboutPage() {
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
                            About Us
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            A Diversified Enterprise Solutions Partner
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Aapthi Marketing Solutions Pvt Ltd is a professional services company committed to delivering measurable value across IT, technology, and business support domains.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Who We Are</p>
                            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-5">
                                Professional Excellence Across Four Business Domains
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-5">
                                Aapthi Marketing Solutions Pvt Ltd is a diversified organization delivering high-quality services across Real Estate Support, Building & Construction Coordination, Software Application Development, and Non-Voice Business Process Services.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Founded on the principles of operational excellence and client partnership, we bring deep domain knowledge, disciplined processes, and a results-oriented approach to every engagement. Our diverse team of professionals spans technology, operations, and business strategy.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {services.map((s) => (
                                    <div key={s} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                                        <span className="text-gray-600 text-sm">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-5"
                        >
                            <div className="bg-[#0B1F3A] rounded-2xl overflow-hidden">
                                {/* Company Image */}
                                <div className="relative w-full h-52">
                                    <Image
                                        src="/Aapthi_company.png"
                                        alt="Aapthi Marketing Solutions Pvt Ltd"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-3 left-4">
                                        <p className="text-white font-bold text-base leading-tight">
                                            Aapthi Marketing
                                        </p>
                                        <p className="text-[#C9A84C] font-semibold text-sm">
                                            Solutions Pvt Ltd
                                        </p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}>
                                            <Target size={20} className="text-[#0B1F3A]" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg">Our Mission</h3>
                                    </div>
                                    <p className="text-white/60 leading-relaxed text-sm">
                                        To deliver reliable, high-quality enterprise services that enable our clients to focus on their core business while we handle the complexity of talent, technology, and operations.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0B1F3A]/5">
                                        <Eye size={20} className="text-[#C9A84C]" />
                                    </div>
                                    <h3 className="text-[#0B1F3A] font-bold text-lg">Our Vision</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    To become the most trusted enterprise services partner for businesses across India and Asia-Pacific — recognized for integrity, innovation, and consistent delivery of stakeholder value.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="What Guides Us"
                        title="Our Core Values"
                        subtitle="These principles shape every decision we make and every relationship we build."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <GlassmorphismCard key={v.title} delay={i * 0.1}>
                                <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center mb-4">
                                    <v.icon size={22} className="text-[#C9A84C]" />
                                </div>
                                <h3 className="text-[#0B1F3A] font-bold text-lg mb-2">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-navy-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our Journey"
                        title="Company Timeline"
                        subtitle="A steady progression of growth, diversification, and deepening expertise."
                        light
                    />
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-[#C9A84C]/30" />
                        <div className="space-y-8">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative flex gap-6 pl-16"
                                >
                                    <div className="absolute left-3.5 -translate-x-1/2 top-1 w-5 h-5 rounded-full border-2 border-[#C9A84C] bg-[#0B1F3A] flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                                    </div>
                                    <div className="glass-card p-5 flex-1">
                                        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-1">{item.year}</p>
                                        <p className="text-white/75 text-sm leading-relaxed">{item.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Business Philosophy</p>
                        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
                            How We Think About Business
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-6">
                            We believe the best business relationships are built on mutual accountability, consistent performance, and strategic alignment. Every solution we design is crafted with long-term value in mind — not just immediate deliverables.
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Our teams are trained to approach each challenge with structured thinking, industry insight, and the flexibility to adapt to the unique context of every client and every market. We invest in our people because great people create great outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
