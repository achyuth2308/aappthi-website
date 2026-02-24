"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, Upload, CheckCircle, Send } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";

const openings = [
    { title: "Senior React Developer", type: "Full-time", dept: "Software Development", exp: "3-5 years" },
    { title: "IT Staffing Coordinator", type: "Full-time", dept: "HR & Recruitment", exp: "2-4 years" },
    { title: "Data Processing Analyst", type: "Full-time", dept: "Non-Voice BPO", exp: "1-3 years" },
    { title: "Project Coordinator", type: "Full-time", dept: "Operations", exp: "2-4 years" },
    { title: "QA Test Analyst", type: "Full-time", dept: "Quality Assurance", exp: "2-3 years" },
];

export default function CareersPage() {
    const [formData, setFormData] = useState({ name: "", email: "", position: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/careers/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) setSubmitted(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

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
                            Join Our Team
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Careers at Aapthi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Build a meaningful career at a company that values expertise, growth, and client impact.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Current Openings"
                        title="Active Opportunities"
                        subtitle="We are actively hiring for the following roles. Apply below or send your resume to our HR team."
                    />
                    <div className="space-y-4 mb-16">
                        {openings.map((job, i) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="glass-card-light rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                                        <Briefcase size={18} className="text-[#C9A84C]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#0B1F3A] font-bold text-base">{job.title}</h3>
                                        <p className="text-gray-500 text-sm">{job.dept} · {job.type} · {job.exp}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                                        setFormData((prev) => ({ ...prev, position: job.title }));
                                    }}
                                    className="px-4 py-2 text-sm font-semibold text-[#0B1F3A] rounded-lg whitespace-nowrap hover:scale-105 transition-all"
                                    style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                                >
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Internship */}
                    <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-16">
                        <h3 className="text-[#0B1F3A] font-bold text-xl mb-3">Internship Programme</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Aapthi Marketing Solutions welcomes fresh graduates and final-year students for internship opportunities across software development, HR, data analytics, and project coordination. Our structured internship program provides hands-on experience, mentorship, and a pathway to full-time employment.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Software Development", "HR & Recruitment", "Data Analytics", "Project Coordination", "UX Design"].map((area) => (
                                <span key={area} className="px-3 py-1 text-xs font-medium text-[#0B1F3A] bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Apply Form */}
                    <div id="apply-form">
                        <SectionHeader
                            eyebrow="Apply Now"
                            title="Submit Your Application"
                            subtitle="Fill in your details and our HR team will reach out within 3 business days."
                        />
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="max-w-lg mx-auto text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={28} className="text-green-600" />
                                </div>
                                <h3 className="text-[#0B1F3A] font-bold text-xl mb-2">Application Submitted</h3>
                                <p className="text-gray-500 text-sm">Thank you for your interest. Our HR team will review your application and contact you shortly.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onSubmit={handleSubmit}
                                className="max-w-2xl mx-auto space-y-5"
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Position Applying For *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.position}
                                        onChange={(e) => setFormData((p) => ({ ...p, position: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all"
                                        placeholder="e.g. Senior React Developer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Note</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all resize-none"
                                        placeholder="Briefly describe your experience and interest..."
                                    />
                                </div>
                                <div className="p-4 rounded-xl border-2 border-dashed border-gray-200 flex items-center gap-3 text-gray-400 hover:border-[#C9A84C]/30 transition-colors cursor-pointer">
                                    <Upload size={18} />
                                    <span className="text-sm">Resume upload — send your CV directly to <strong className="text-[#C9A84C]">hr@aapthi.com</strong></span>
                                </div>
                                <div className="flex items-center justify-between gap-4 pt-2">
                                    <p className="text-gray-400 text-xs">
                                        Or email your resume directly to{" "}
                                        <a href="mailto:hr@aapthi.com" className="text-[#C9A84C] hover:underline">hr@aapthi.com</a>
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B1F3A] rounded-xl hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                        style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                                    >
                                        {loading ? "Submitting..." : (<><Send size={16} /> Submit Application</>)}
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
