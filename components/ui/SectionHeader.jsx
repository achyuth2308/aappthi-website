import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle, light = false, centered = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-12 ${centered ? "text-center" : ""}`}
        >
            {eyebrow && (
                <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                    {eyebrow}
                </p>
            )}
            <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0B1F3A]"
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`text-base sm:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-white/60" : "text-gray-500"}`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
