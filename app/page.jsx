"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Users, Code, Headphones, Building, ArrowRight, Star, TrendingUp,
    Zap, Globe, CheckCircle, Award, Briefcase, Send,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";
import AwardCard from "@/components/ui/AwardCard";
import CertificateCard from "@/components/ui/CertificateCard";
import TeamCard from "@/components/ui/TeamCard";

/* ── Data ─────────────────────────────────────────── */

const services = [
    {
        icon: Users,
        title: "IT Staffing",
        desc: "Contract staffing, permanent hiring, and remote deployment of top-tier IT talent.",
        color: "from-blue-500/20 to-blue-600/10",
    },
    {
        icon: Code,
        title: "Software Development",
        desc: "Enterprise web applications, custom software, and digital transformation solutions.",
        color: "from-purple-500/20 to-purple-600/10",
    },
    {
        icon: Headphones,
        title: "Non-Voice BPO",
        desc: "Data processing, XML tagging, backend support, and validation services.",
        color: "from-green-500/20 to-green-600/10",
    },
    {
        icon: Building,
        title: "Construction Support",
        desc: "Project coordination, client management, and real estate marketing support.",
        color: "from-orange-500/20 to-orange-600/10",
    },
];

const awardsData = [
    {
        title: "Asia Infrastructure Digital Excellence Award – 2023",
        category: "Smart Rail Monitoring Innovation",
        presentedBy: "Asia Infrastructure Technology Forum",
        year: "2023",
        highlights: [
            "Best Real-Time Monitoring Implementation",
            "Excellence in Construction Data Automation",
        ],
    },
    {
        title: "Global Construction Tech Innovation Award – 2022",
        category: "ERP Deployment in Large-Scale Infrastructure",
        presentedBy: "International Construction Digital Council",
        year: "2022",
        highlights: [
            "Outstanding Budget Control Automation",
            "Digital Documentation Transformation Excellence",
        ],
    },
    {
        title: "Maritime Digital Transformation Award – 2023",
        category: "Port Operations Optimization",
        presentedBy: "Asia-Pacific Maritime Technology Association",
        year: "2023",
        highlights: [],
    },
    // {
    //     title: "Infrastructure Analytics Excellence Award – 2023",
    //     category: "Smart Highway Monitoring",
    //     presentedBy: "National Infrastructure Analytics Forum",
    //     year: "2023",
    //     highlights: [],
    // },
    // {
    //     title: "Smart City Innovation Recognition – 2023",
    //     category: "Urban Digital Governance Platform",
    //     presentedBy: "Urban Innovation Foundation",
    //     year: "2023",
    //     highlights: [],
    // },
];

const certPreview = [
    {
        title: "Highway Safety Innovation Award",
        image: "/Highway Safety Innovation.png",
    },
    {
        title: "Outstanding Maritime Project Leadership",
        image: "/Maritime.png",
    },
    {
        title: "Pioneer in Smart City Technologies",
        image: "/Pionner.png",
    },
];

const projectsData = [
    { title: "Metro Infrastructure Digital Monitoring System", category: "Infrastructure Technology", image: "/Metro Infrastructure Digital Monitoring System.jpeg" },
    { title: "Coastal Bridge Construction ERP Implementation", category: "Enterprise Resource Planning", image: "/Coastal Bridge ERP Implementation.jpeg" },
    { title: "Smart Port Digital Operations Platform", category: "Logistics & Port Management", image: "/Smart Port Digital Operations Platform.jpeg" },
    { title: "National Highway Performance Dashboard", category: "Analytics & Reporting", image: "/National Highway Performance Dashboard.jpeg" },
    { title: "Smart City Urban Planning System", category: "Smart City Solutions", image: "/Smart City Urban Planning System.jpeg" },
];

const teamData = [
    { name: "Priyanka Reddy", role: "HR Manager", description: "Over 12 years of experience in talent strategy and HR operations across the IT and BPO sectors." },
    { name: "Karthik Sharma", role: "Senior HR Executive", description: "Experienced HR professional managing end-to-end recruitment cycles and employee engagement programs." },
    { name: "Nandini Rao", role: "Talent Acquisition Specialist", description: "Dedicated talent sourcing expert with strong domain knowledge in IT staffing and technical screening." },
    { name: "Arjun Naidu", role: "Full Stack Developer & Trainer", description: "Senior full-stack developer specializing in modern JavaScript frameworks and cloud deployment." },
    { name: "Meghana Iyer", role: "Frontend Development Trainer", description: "Expert in React, Next.js, and UI/UX best practices with structured training experience." },
    { name: "Vikram Joshi", role: "Backend & API Trainer", description: "Specializes in Node.js, Spring Boot, RESTful API design, and database management." },
    { name: "Suresh Patel", role: "Data Science Specialist", description: "Expertise in machine learning, predictive analytics, and business intelligence solutions." },
    { name: "Aditi Mehta", role: "UX Designer", description: "Human-centered design professional focused on enterprise UX, accessibility, and design systems." },
    { name: "Rahul Verma", role: "Project Manager", description: "PMP-certified project manager delivering complex IT projects on time and within budget." },
    { name: "Sneha Kapoor", role: "QA Engineer", description: "Quality assurance specialist in functional testing, automation frameworks, and API testing." },
    { name: "Ravi Kumar", role: "IT Support Specialist", description: "Infrastructure maintenance, system administration, and endpoint security management." },
];

const stats = [
    { end: 150, suffix: "+", label: "Enterprise Clients" },
    { end: 8, suffix: "+", label: "Years Experience" },
    { end: 500, suffix: "+", label: "Professionals Placed" },
    { end: 4, suffix: "", label: "Service Verticals" },
];

/* ── Page ─────────────────────────────────────────── */

export default function HomePage() {
    return (
        <>
            {/* ─── 1. HERO ─────────────────────────────── */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)" }}
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(100,149,237,0.15) 0%, transparent 70%)" }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
                            <span className="text-[#C9A84C] text-xs font-medium tracking-wide">
                                Enterprise IT & Workforce Solutions
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Empowering Businesses with{" "}
                            <span className="text-gold-gradient">Smart IT &</span>{" "}
                            Workforce Solutions
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            Aapthi Marketing Solutions delivers end-to-end enterprise services — from IT staffing and software development to non-voice BPO and construction support — trusted by businesses across India and Asia-Pacific.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0B1F3A] font-semibold rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                            >
                                Request Consultation <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-xl border border-white/20 hover:border-[#C9A84C]/50 hover:bg-white/5 transition-all duration-200"
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent" />
                </motion.div>
            </section>

            {/* ─── 2. ABOUT COMPANY ────────────────────── */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                                About Us
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-5">
                                Aapthi Marketing Solutions Pvt Ltd
                            </h2>
                            <p className="text-gray-500 text-base leading-relaxed mb-5">
                                Aapthi Marketing Solutions Pvt Ltd is a diversified company delivering services across Real Estate Support, Building & Construction Coordination, Software Application Development, and Non-Voice Business Process Services.
                            </p>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">Construction & Real Estate</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Structured project coordination, marketing support, and client management.</p>
                                </div>
                                <div>
                                    <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">IT Division</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Web Development, Web Applications, and custom software solutions. Scalable, secure, performance-driven applications.</p>
                                </div>
                                <div>
                                    <h4 className="text-[#0B1F3A] font-bold text-sm mb-1">Non-Voice Services</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Back-office operations, data processing, and business support.</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm italic">
                                Focus: Quality execution, structured processes, and long-term business relationships.
                            </p>
                        </motion.div>

                        {/* Right: Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                                <Image
                                    src="/Aapthi_company.png"
                                    alt="Aapthi Marketing Solutions Pvt Ltd"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5">
                                    <p className="text-white font-bold text-lg leading-tight">Aapthi Marketing</p>
                                    <p className="text-[#C9A84C] text-sm font-semibold">Solutions Pvt Ltd</p>
                                    <p className="text-white/50 text-xs mt-1">Enterprise Services Partner</p>
                                </div>
                            </div>
                            {/* Decorative card */}
                            <div className="absolute -bottom-4 -left-4 w-28 h-20 rounded-xl bg-[#C9A84C] shadow-lg flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-[#0B1F3A] font-bold text-2xl">8+</p>
                                    <p className="text-[#0B1F3A] text-xs font-medium">Years</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 3. SERVICES OVERVIEW ────────────────── */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="What We Do"
                        title="Comprehensive Business Solutions"
                        subtitle="From technology staffing to digital transformation — we provide the full spectrum of enterprise services your business needs to grow."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((svc, i) => (
                            <GlassmorphismCard key={svc.title} delay={i * 0.1}>
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 border border-white/20`}>
                                    <svc.icon size={22} className="text-[#0B1F3A]" />
                                </div>
                                <h3 className="text-[#0B1F3A] font-bold text-lg mb-2">{svc.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-medium hover:gap-2 transition-all duration-200"
                                >
                                    Learn More <ArrowRight size={14} />
                                </Link>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. AWARDS & RECOGNITIONS ────────────── */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Recognition"
                        title="Awards & Recognitions"
                        subtitle="Our commitment to digital transformation has been celebrated by leading global infrastructure and technology forums."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awardsData.map((award, i) => (
                            <AwardCard key={award.title} award={award} index={i} />
                        ))}
                    </div>
                    {/* Certificate Highlights Sub-section */}
                    <div className="mt-12">
                        <h3 className="text-center text-[#0B1F3A] font-bold text-lg mb-2">
                            Certificate{" "}
                            <span style={{ color: "#C9A84C" }}>Highlights</span>
                        </h3>
                        <p className="text-center text-gray-400 text-sm mb-6">
                            A selection of our official recognitions and certificates.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {certPreview.map((cert, i) => (
                                <CertificateCard key={cert.title} cert={cert} index={i} compact />
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-gray-400 text-xs mt-8 italic">
                        * Awards listed are part of a concept demonstration website.
                    </p>
                    <div className="text-center mt-6">
                        <Link
                            href="/awards"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B1F3A] rounded-xl hover:scale-105 transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                        >
                            View All Awards & Certifications <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── 5. SUCCESS PROJECTS (Placeholder) ───── */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our Work"
                        title="Success Projects"
                        subtitle="Enterprise digital transformation initiatives delivered with precision and measurable impact."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsData.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative h-44">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 via-transparent to-transparent" />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-[#C9A84C] font-medium uppercase tracking-wider mb-1">{project.category}</p>
                                    <h3 className="text-[#0B1F3A] font-bold text-sm leading-snug group-hover:text-[#C9A84C] transition-colors">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] rounded-xl hover:bg-[#162d52] transition-colors duration-200"
                        >
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── 6. TEAM OVERVIEW ────────────────────── */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our People"
                        title="Meet Our Team"
                        subtitle="Experienced professionals across HR, technology, data science, and operations — united by a commitment to enterprise excellence."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {teamData.map((member, i) => (
                            <TeamCard key={member.name} member={member} index={i} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/team"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] rounded-xl hover:bg-[#162d52] transition-colors duration-200"
                        >
                            Full Team Page <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── 7. ANIMATED STATS ───────────────────── */}
            <section className="bg-navy-gradient border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl lg:text-5xl font-bold text-gold-gradient mb-2">
                                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                                </p>
                                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 8. CTA APPLY NOW ────────────────────── */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 mb-5">
                            <Briefcase size={14} className="text-[#C9A84C]" />
                            <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">We Are Hiring</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-4">
                            Ready to Join Our Team?
                        </h2>
                        <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto">
                            We are always looking for talented professionals who share our commitment to excellence and client-focused delivery. Apply now and take the next step in your career.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/apply"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0B1F3A] font-semibold rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                            >
                                Apply Now <Send size={16} />
                            </Link>
                            <Link
                                href="/careers"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#0B1F3A] font-medium rounded-xl border border-gray-200 bg-white hover:border-[#C9A84C]/50 transition-all duration-200"
                            >
                                View Open Positions <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 9. FOOTER is handled by layout.js ─── */}
        </>
    );
}
