"use client";

import { motion } from "framer-motion";
import { Globe2, Users, MessageSquare } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";



const engagements = [
    { icon: Globe2, title: "Asia-Pacific Business Forums", desc: "Our senior leadership participates in regional business discussions covering digital transformation, economic integration, and cross-border enterprise strategy." },
    { icon: Users, title: "Industry Networking Sessions", desc: "We engage with professionals across IT, infrastructure, BPO, and real estate sectors to stay abreast of market developments and best practices." },
    { icon: MessageSquare, title: "Knowledge Exchange Programs", desc: "Our teams participate in structured knowledge-sharing forums to continuously improve our understanding of global business models and emerging technologies." },
];

export default function IndustryEngagementsPage() {
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
                            Global Engagement
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            International Business Engagements
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Our leadership team participates in Asia-Pacific business networking sessions and industry discussions, strengthening our strategic perspective and global awareness.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Engagement Model</p>
                            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-5">Staying Connected to the Global Business Landscape</h2>
                            <p className="text-gray-500 leading-relaxed mb-4">
                                At Aapthi Marketing Solutions, we believe that enterprise advisory capability begins with deep market awareness. Our management team actively engages with the international business community through structured networking, research participation, and industry dialogue.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-4">
                                These engagements allow us to bring global perspectives to our talent solutions, software development practices, and BPO operations — ensuring that our clients benefit from internationally-informed strategic thinking.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                We focus particularly on the Asia-Pacific region, where dynamic economic growth and rapid digital transformation are reshaping industries at an unprecedented pace.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-5"
                        >
                            {[
                                { label: "Primary Focus", value: "Asia-Pacific Markets" },
                                { label: "Engagement Types", value: "Networking, Research, Industry Forums" },
                                { label: "Sectors Covered", value: "IT, Infrastructure, Finance, FMCG" },
                                { label: "Participation", value: "Leadership & Senior Management" },
                            ].map((item, i) => (
                                <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-500 text-sm">{item.label}</span>
                                    <span className="text-[#0B1F3A] font-semibold text-sm text-right">{item.value}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Engagement Types */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {engagements.map((eng, i) => (
                            <GlassmorphismCard key={eng.title} delay={i * 0.1}>
                                <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center mb-4">
                                    <eng.icon size={22} className="text-[#C9A84C]" />
                                </div>
                                <h3 className="text-[#0B1F3A] font-bold text-base mb-2">{eng.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{eng.desc}</p>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Note */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100">
                        <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider mb-3">Editorial Note</p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            This page describes our organization's general approach to international business awareness and networking. All references to industry engagements reflect the ongoing learning and professional development activities of our management team. No specific event dates, locations, or third-party organizations are claimed or implied.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
