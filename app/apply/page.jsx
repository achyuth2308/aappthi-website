"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const positions = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Data Science Specialist",
    "UX Designer",
    "QA Engineer",
    "Project Manager",
    "HR Executive",
    "IT Support Specialist",
    "Business Analyst",
];

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
    });
    const [resume, setResume] = useState(null);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (status === "success") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [status]);


    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleFileChange(e) {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type !== "application/pdf") {
                setErrorMsg("Please upload a PDF file only.");
                setResume(null);
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setErrorMsg("File size must be under 5MB.");
                setResume(null);
                return;
            }
            setErrorMsg("");
            setResume(file);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");

        if (!formData.name || !formData.email || !formData.phone || !formData.position) {
            setErrorMsg("Please fill in all required fields.");
            return;
        }
        if (!resume) {
            setErrorMsg("Please upload your resume (PDF).");
            return;
        }

        setStatus("loading");

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("position", formData.position);
            data.append("resume", resume);

            const res = await fetch("/api/apply", { method: "POST", body: data });
            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.error || "Something went wrong.");
            }
            setStatus("success");
        } catch (err) {
            setErrorMsg(err.message);
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="min-h-screen bg-[#F8F9FA] pt-28 pb-20">
                <div className="max-w-2xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 sm:p-14 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, delay: 0.1 }}
                            className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle size={52} className="text-green-500" />
                        </motion.div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4">
                            Application Submitted!
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed mb-3">
                            Thank you, <strong className="text-[#0B1F3A]">{formData.name}</strong>!
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            Your application for <strong className="text-[#0B1F3A]">{formData.position}</strong> has been received.
                            Our team will review your profile and reach out to you at <strong className="text-[#0B1F3A]">{formData.email}</strong>.
                        </p>
                        <div className="w-full h-px bg-gray-100 mb-8" />
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0B1F3A] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                        >
                            Back to Home
                        </a>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="bg-navy-gradient pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 mb-4"
                        >
                            <Send size={14} className="text-[#C9A84C]" />
                            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Career Application</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Apply Now
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Submit your application to join our team. We review every application carefully.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Form */}
            <div className="bg-[#F8F9FA] py-16">
                <div className="max-w-2xl mx-auto px-4">

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Full Name *</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] transition"
                                placeholder="Your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Email Address *</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Phone Number *</label>
                            <div className="flex rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-[#C9A84C]/30 focus-within:border-[#C9A84C] transition-all overflow-hidden">
                                <span className="flex items-center px-3 text-sm font-semibold text-[#0B1F3A] bg-gray-50 border-r border-gray-200 select-none shrink-0">+91</span>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                        // First digit must be 6–9 (valid Indian mobile)
                                        if (digits.length > 0 && !/^[6-9]/.test(digits)) return;
                                        setFormData((prev) => ({ ...prev, phone: digits }));
                                    }}
                                    maxLength={10}
                                    pattern="[6-9][0-9]{9}"
                                    inputMode="numeric"
                                    className="flex-1 px-3 py-3 bg-white text-sm focus:outline-none"
                                    placeholder="XXXXX-XXXXX"
                                />
                            </div>
                        </div>

                        {/* Position */}
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Position Applied *</label>
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] transition bg-white"
                            >
                                <option value="">Select a position</option>
                                {positions.map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Resume (PDF only, max 5MB) *</label>
                            <label className="flex items-center gap-3 px-4 py-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#C9A84C]/50 cursor-pointer transition bg-gray-50">
                                <Upload size={20} className="text-gray-400" />
                                <div className="flex-1">
                                    {resume ? (
                                        <span className="text-[#0B1F3A] text-sm font-medium">{resume.name}</span>
                                    ) : (
                                        <span className="text-gray-400 text-sm">Click to upload your resume</span>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* Error */}
                        {errorMsg && (
                            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200">
                                <AlertCircle size={16} className="text-red-500 shrink-0" />
                                <p className="text-red-600 text-sm">{errorMsg}</p>
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 rounded-xl text-sm font-semibold text-[#0B1F3A] hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" /> Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Application <Send size={16} />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </>
    );
}
