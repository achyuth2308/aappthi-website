"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CertificateCard({ cert, index = 0, compact = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C9A84C]/20 transition-all duration-300 overflow-hidden"
        >
            {/* Certificate Image */}
            <div className={`relative w-full overflow-hidden bg-gray-50 ${compact ? "h-44" : "h-56"}`}>
                <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h3
                    className={`text-[#0B1F3A] font-bold leading-snug group-hover:text-[#C9A84C] transition-colors duration-200 ${compact ? "text-xs" : "text-sm"
                        }`}
                >
                    {cert.title}
                </h3>
                {!compact && cert.description && (
                    <p className="text-gray-400 text-xs leading-relaxed mt-2">{cert.description}</p>
                )}
            </div>
        </motion.div>
    );
}
