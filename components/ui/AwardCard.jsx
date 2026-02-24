"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

export default function AwardCard({ award, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C9A84C]/20 transition-all duration-300 overflow-hidden"
        >
            {/* Image Placeholder */}
            <div className="relative h-44 bg-gradient-to-br from-[#0B1F3A] to-[#162d52] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(circle at 30% 40%, rgba(201,168,76,0.3) 0%, transparent 60%)",
                }} />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-3">
                        <Award size={24} className="text-[#C9A84C]" />
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-widest">Award Certificate</p>
                </div>
                {/* Year badge */}
                {award.year && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30">
                        <span className="text-[#C9A84C] text-xs font-bold">{award.year}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-[#0B1F3A] font-bold text-base leading-snug mb-1 group-hover:text-[#C9A84C] transition-colors duration-200">
                    {award.title}
                </h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">
                    {award.category}
                </p>

                {/* Presented By */}
                {award.presentedBy && (
                    <div className="flex items-center gap-2 mb-3 py-2 px-3 rounded-lg bg-gray-50 border border-gray-100">
                        <span className="text-gray-400 text-xs">Presented by</span>
                        <span className="text-[#0B1F3A] text-xs font-semibold">{award.presentedBy}</span>
                    </div>
                )}

                {/* Highlights */}
                {award.highlights && award.highlights.length > 0 && (
                    <div className="space-y-1.5">
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Recognition</p>
                        {award.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-1.5">
                                <ChevronRight size={10} className="text-[#C9A84C] shrink-0" />
                                <span className="text-gray-500 text-xs">{h}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
