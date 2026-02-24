"use client";

import { motion } from "framer-motion";

export default function GlassmorphismCard({
    children,
    className = "",
    dark = false,
    delay = 0,
    hover = true,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
            className={`${dark ? "glass-card" : "glass-card-light"} p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
}
