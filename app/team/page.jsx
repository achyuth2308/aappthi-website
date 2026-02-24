"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassmorphismCard from "@/components/ui/GlassmorphismCard";



const team = [
    {
        name: "Rajesh Subramaniam",
        role: "HR Manager",
        dept: "Human Resources",
        bio: "Over 12 years of experience in talent strategy and HR operations across the IT and BPO sectors. Specializes in workforce planning and organizational development.",
        initials: "RS",
        color: "from-blue-600 to-blue-800",
    },
    {
        name: "Priya Venkataraman",
        role: "HR Executive",
        dept: "Human Resources",
        bio: "Experienced HR professional managing end-to-end recruitment cycles, employee engagement programs, and compliance frameworks across multiple business units.",
        initials: "PV",
        color: "from-purple-600 to-purple-800",
    },
    {
        name: "Arjun Krishnamurthy",
        role: "Talent Acquisition Specialist",
        dept: "Recruitment",
        bio: "Dedicated talent sourcing expert with strong domain knowledge in IT staffing, technical assessment design, and candidate experience management.",
        initials: "AK",
        color: "from-teal-600 to-teal-800",
    },
    {
        name: "Meena Chandrasekaran",
        role: "Full Stack Trainer",
        dept: "Technology Training",
        bio: "Senior full-stack developer and certified trainer specializing in modern JavaScript frameworks, backend architectures, and cloud deployment practices.",
        initials: "MC",
        color: "from-green-600 to-green-800",
    },
    {
        name: "Karthik Balaji",
        role: "Frontend Trainer",
        dept: "Technology Training",
        bio: "Expert in React, Next.js, and UI/UX best practices with extensive experience in delivering structured frontend training programs for enterprise development teams.",
        initials: "KB",
        color: "from-orange-600 to-orange-800",
    },
    {
        name: "Divya Srinivasan",
        role: "Backend & API Trainer",
        dept: "Technology Training",
        bio: "Specializes in Node.js, Java Spring Boot, RESTful API design, and database management. Experienced in delivering backend training for both beginners and experienced professionals.",
        initials: "DS",
        color: "from-red-600 to-red-800",
    },
    {
        name: "Vikram Narayanan",
        role: "Data Science Specialist",
        dept: "Analytics",
        bio: "Data scientist with expertise in machine learning, predictive analytics, and business intelligence. Works across infrastructure, logistics, and financial data domains.",
        initials: "VN",
        color: "from-indigo-600 to-indigo-800",
    },
    {
        name: "Ananya Rajan",
        role: "UX Designer",
        dept: "Design",
        bio: "Human-centered design professional focused on enterprise UX, accessibility, and design systems. Proficient in Figma, prototyping, and user research methodologies.",
        initials: "AR",
        color: "from-pink-600 to-pink-800",
    },
    {
        name: "Suresh Murugappan",
        role: "Project Manager",
        dept: "Operations",
        bio: "PMP-certified project manager with extensive experience delivering complex IT and business process projects on time and within budget across multiple industry verticals.",
        initials: "SM",
        color: "from-cyan-600 to-cyan-800",
    },
    {
        name: "Lakshmi Parthasarathy",
        role: "QA Engineer",
        dept: "Quality Assurance",
        bio: "Quality assurance specialist experienced in functional testing, automation frameworks, API testing, and performance validation for enterprise software applications.",
        initials: "LP",
        color: "from-yellow-600 to-yellow-800",
    },
    {
        name: "Deepan Selvakumar",
        role: "IT Support Specialist",
        dept: "IT Operations",
        bio: "Level II IT support professional managing infrastructure maintenance, system administration, helpdesk operations, and endpoint security across the organization.",
        initials: "DS",
        color: "from-slate-600 to-slate-800",
    },
];

export default function TeamPage() {
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
                            Our People
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-5"
                        >
                            Meet Our Team
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg leading-relaxed"
                        >
                            Experienced professionals across HR, technology, data science, and operations — united by a commitment to enterprise excellence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Leadership & Experts"
                        title="The Professionals Behind Our Success"
                        subtitle="Each team member brings specialized expertise and a dedication to delivering measurable client value."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <GlassmorphismCard key={member.name} delay={i * 0.05}>
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center shrink-0`}>
                                        <span className="text-white font-bold text-sm">{member.initials}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[#0B1F3A] font-bold text-base">{member.name}</h3>
                                        <p className="text-[#C9A84C] text-xs font-semibold mb-0.5">{member.role}</p>
                                        <p className="text-gray-400 text-xs mb-3">{member.dept}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                                    </div>
                                </div>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section-padding bg-[#F8F9FA]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Join Our Team</h2>
                    <p className="text-gray-500 mb-6">We are always looking for talented professionals who share our commitment to excellence and client-focused delivery.</p>
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 px-8 py-4 text-[#0B1F3A] font-semibold rounded-xl hover:scale-105 transition-all duration-200"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                    >
                        View Open Positions
                    </a>
                </div>
            </section>
        </>
    );
}
