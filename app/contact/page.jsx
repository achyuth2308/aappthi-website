"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, CheckCircle, Send, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";

const contactInfo = [
    { icon: MapPin, label: "Address", value: "Aapthi Marketing Solutions Pvt Ltd\nPR2W+2RH, Nai Duniya, Revenue Colony, Indira Gandhi Nagar, Indore, Madhya Pradesh 452009" },
    { icon: MapPin, label: "Address", value: "Aapthi Marketing Solutions Pvt Ltd\nHotel white castle, Dadri Main Rd, Bhangel, Sector 82, Noida, Uttar Pradesh 201304" },
    { icon: MapPin, label: "Address", value: "Aapthi Marketing Solutions Pvt Ltd\n3rd Floor, Image Hospitals Ln, Pratap Nagar, Nagarjuna Nagar colony, Yella Reddy Guda, Hyderabad, Telangana 500073" },
    { icon: Mail, label: "Email", value: "hr@aapthisolutions.com", href: "mailto:hr@aapthisolutions.com" },
    { icon: Phone, label: "Phone", value: "+91 9499886597", href: "tel:+91 9499886597" },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
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
                            Get In Touch
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Contact Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Ready to explore how Aapthi Marketing Solutions can support your business goals? We would love to hear from you.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Info */}
                        <div>
                            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Details</p>
                            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-5">
                                We Are Here to Help
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                Whether you need a staffing solution, a software project, or strategic BPO support, our team is ready to discuss your requirements and design the right engagement for your business.
                            </p>
                            <div className="space-y-5 mb-10">
                                {contactInfo.map((info, index) => (
                                    <div key={`${info.label}-${index}`} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                                            <info.icon size={18} className="text-[#C9A84C]" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs font-medium mb-0.5">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-[#0B1F3A] font-medium text-sm hover:text-[#C9A84C] transition-colors whitespace-pre-line">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-[#0B1F3A] font-medium text-sm whitespace-pre-line">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4 mb-10">
                                <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 flex items-center justify-center shrink-0">
                                    <Clock size={18} className="text-[#C9A84C]" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-medium mb-1">Business Hours</p>
                                    <div className="space-y-0.5">
                                        <p className="text-[#0B1F3A] font-medium text-sm">Monday – Friday: 9:00 AM – 7:00 PM</p>
                                        <p className="text-[#0B1F3A] font-medium text-sm">Saturday: Closed</p>
                                        <p className="text-[#0B1F3A] font-medium text-sm">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Location */}
                            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
                                <iframe
                                    src="https://www.google.com/maps?q=17.431639,78.447222&z=17&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />

                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={28} className="text-green-600" />
                                    </div>
                                    <h3 className="text-[#0B1F3A] font-bold text-xl mb-2">Message Sent</h3>
                                    <p className="text-gray-500 text-sm max-w-xs">
                                        Thank you for reaching out. Our team will respond within 1-2 business days.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div id="contact-form" className="bg-[#F8F9FA] rounded-2xl p-8">
                                        <h3 className="text-[#0B1F3A] font-bold text-xl mb-6">Send a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={form.name}
                                                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all"
                                                        placeholder="Your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={form.email}
                                                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                                                <div className="flex rounded-xl border border-gray-200 bg-white focus-within:ring-2 focus-within:ring-[#C9A84C]/30 focus-within:border-[#C9A84C] transition-all overflow-hidden">
                                                    <span className="flex items-center px-3 text-sm font-semibold text-[#0B1F3A] bg-gray-50 border-r border-gray-200 select-none shrink-0">+91</span>
                                                    <input
                                                        type="tel"
                                                        value={form.phone}
                                                        onChange={(e) => {
                                                            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                                            // First digit must be 6–9 (valid Indian mobile)
                                                            if (digits.length > 0 && !/^[6-9]/.test(digits)) return;
                                                            setForm((p) => ({ ...p, phone: digits }));
                                                        }}
                                                        maxLength={10}
                                                        pattern="[6-9][0-9]{9}"
                                                        inputMode="numeric"
                                                        className="flex-1 px-3 py-3 text-sm bg-white focus:outline-none"
                                                        placeholder="XXXXX-XXXXX"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] text-sm transition-all resize-none"
                                                    placeholder="Tell us about your business requirements..."
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#0B1F3A] rounded-xl hover:scale-[1.02] transition-all disabled:opacity-60"
                                                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                                            >
                                                {loading ? "Sending..." : (<><Send size={16} /> Send Message</>)}
                                            </button>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
