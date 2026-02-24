"use client";

import { motion } from "framer-motion";

export default function TeamCard({ member, index = 0 }) {
    // Generate initials from name
    const initials = member.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2);

    // Color palette for avatar backgrounds
    const colors = [
        "from-blue-600 to-blue-800",
        "from-purple-600 to-purple-800",
        "from-teal-600 to-teal-800",
        "from-green-600 to-green-800",
        "from-orange-600 to-orange-800",
        "from-red-600 to-red-800",
        "from-indigo-600 to-indigo-800",
        "from-pink-600 to-pink-800",
        "from-cyan-600 to-cyan-800",
        "from-yellow-600 to-yellow-800",
        "from-slate-600 to-slate-800",
    ];

    const colorClass = colors[index % colors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C9A84C]/20 transition-all duration-300 p-5"
        >
            <div className="flex items-start gap-4">
                {/* Avatar Placeholder */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0 shadow-md`}>
                    <span className="text-white font-bold text-lg">{initials}</span>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-[#0B1F3A] font-bold text-base group-hover:text-[#C9A84C] transition-colors duration-200">
                        {member.name}
                    </h3>
                    <p className="text-[#C9A84C] text-xs font-semibold mb-2">{member.role}</p>
                    {member.description && (
                        <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
