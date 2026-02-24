"use client";

import { motion } from "framer-motion";
import { Globe, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";



const sectors = [
    { name: "Food & Beverage Industry", desc: "Study of global FMCG supply chains, retail distribution, and franchise expansion models." },
    { name: "Banking & Financial Services", desc: "Analysis of retail banking digital transformation, payment infrastructure, and financial technology integration." },
    { name: "Telecom Infrastructure", desc: "Examination of network deployment strategies, digital service bundles, and enterprise connectivity solutions." },
    { name: "Utilities & Infrastructure", desc: "Research on smart grid systems, public infrastructure analytics, and energy management platforms." },
];

const companies = [
    { name: "Jollibee Foods Corporation", sector: "Food & Beverage" },
    { name: "Universal Robina Corporation", sector: "Food & Beverage" },
    { name: "Century Pacific Food", sector: "Food & Beverage" },
    { name: "Nutri-Asia", sector: "Food & Beverage" },
    { name: "BDO Unibank", sector: "Banking" },
    { name: "SM Investments Corporation", sector: "Diversified" },
    { name: "PLDT", sector: "Telecom" },
    { name: "Meralco", sector: "Utilities" },
];

export default function GlobalExposurePage() {
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
                            Global Perspective
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Global Market Exposure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            We actively study international business models to ensure our advisory and service delivery reflects global best practices and emerging market dynamics.
                        </motion.p>
                    </div>
                </div>
            </section>



            {/* Sectors */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Industries We Study"
                        title="International Business Model Research"
                        subtitle="Our leadership team continuously analyzes global market leaders to bring world-class strategic insights to our clients."
                    />
                    <div className="grid sm:grid-cols-2 gap-6 mb-16">
                        {sectors.map((sector, i) => (
                            <GlassmorphismCard key={sector.name} delay={i * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                                        <Globe size={18} className="text-[#C9A84C]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#0B1F3A] font-bold text-base mb-1.5">{sector.name}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{sector.desc}</p>
                                    </div>
                                </div>
                            </GlassmorphismCard>
                        ))}
                    </div>

                    {/* Reference Companies */}
                    <div>
                        <h3 className="text-[#0B1F3A] font-bold text-xl mb-2">Industry Companies We Follow & Analyze</h3>
                        <p className="text-gray-500 text-sm mb-8">
                            The following Asia-Pacific market leaders are studied as reference organizations for business model analysis, operational benchmarking, and market trend research.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {companies.map((co, i) => (
                                <motion.div
                                    key={co.name}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="p-5 rounded-xl border border-gray-100 bg-[#F8F9FA] hover:border-[#C9A84C]/30 hover:bg-white transition-all duration-200"
                                >
                                    <p className="text-[#0B1F3A] font-semibold text-sm mb-1">{co.name}</p>
                                    <p className="text-gray-400 text-xs">{co.sector}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-xs mt-4 italic">
                            * Logos and company names are shown for industry reference in this demo website only.
                        </p>
                    </div>
                </div>
            </section>

            {/* Research Approach */}
            <section className="section-padding bg-navy-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionHeader
                        eyebrow="Our Approach"
                        title="How We Use Global Insights"
                        subtitle="International market research directly enriches the quality of our strategic advisory, talent deployment, and enterprise solutions."
                        light
                    />
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { title: "Benchmarking", desc: "We compare operational models across markets to identify efficiency opportunities for our clients." },
                            { title: "Trend Analysis", desc: "We track sector-specific technology adoption patterns and business model evolution globally." },
                            { title: "Strategic Advisory", desc: "Insights from international leaders inform the guidance we provide to enterprise clients." },
                        ].map((item, i) => (
                            <GlassmorphismCard key={item.title} dark delay={i * 0.1}>
                                <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
