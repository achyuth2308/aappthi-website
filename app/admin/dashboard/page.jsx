"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    MessageSquare, Users, Clock, CheckCircle, Mail,
    Loader2, LogOut, LayoutDashboard, BookOpen, Briefcase,
} from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Contacts", href: "/admin/contacts", icon: MessageSquare },
    { label: "Applications", href: "/admin/applications", icon: Briefcase },
];

function AdminHeader({ onLogout }) {
    return (
        <div className="bg-[#0B1F3A] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <h1 className="text-white font-bold text-lg">Admin Dashboard</h1>
                        <p className="text-white/40 text-xs">Aapthi Marketing Solutions</p>
                    </div>
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/60 text-sm hover:text-white hover:bg-white/10 transition"
                            >
                                <item.icon size={14} />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <button
                    onClick={onLogout}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 text-sm hover:text-white hover:bg-white/10 transition"
                >
                    <LogOut size={14} /> Logout
                </button>
            </div>
        </div>
    );
}

export default function AdminDashboardPage() {
    const router = useRouter();
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    }

    useEffect(() => {
        async function fetchStats() {
            try {
                const [contactsRes, applicantsRes] = await Promise.all([
                    fetch("/api/admin/contacts"),
                    fetch("/api/admin/applicants"),
                ]);

                if (contactsRes.status === 401 || applicantsRes.status === 401) {
                    router.push("/admin/login");
                    return;
                }

                const contactsData = await contactsRes.json();
                const applicantsData = await applicantsRes.json();

                const contacts = contactsData.contacts || [];
                const applicants = applicantsData.applicants || [];

                setStats({
                    totalContacts: contacts.length,
                    unrepliedContacts: contacts.filter((c) => !c.isReplied).length,
                    totalApplicants: applicants.length,
                    pendingApplicants: applicants.filter((a) => a.status === "pending").length,
                    shortlistedApplicants: applicants.filter((a) => a.status === "shortlisted").length,
                    approvedApplicants: applicants.filter((a) => a.status === "approved").length,
                });
            } catch (err) {
                console.error("Failed to fetch stats:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, [router]);

    const STAT_CARDS = stats
        ? [
            { label: "Total Contacts", value: stats.totalContacts, icon: MessageSquare, color: "border-l-blue-500", bg: "bg-blue-50" },
            { label: "Unreplied", value: stats.unrepliedContacts, icon: Mail, color: "border-l-amber-500", bg: "bg-amber-50" },
            { label: "Total Applicants", value: stats.totalApplicants, icon: Users, color: "border-l-indigo-500", bg: "bg-indigo-50" },
            { label: "Pending", value: stats.pendingApplicants, icon: Clock, color: "border-l-orange-500", bg: "bg-orange-50" },
            { label: "Shortlisted", value: stats.shortlistedApplicants, icon: BookOpen, color: "border-l-cyan-500", bg: "bg-cyan-50" },
            { label: "Approved", value: stats.approvedApplicants, icon: CheckCircle, color: "border-l-green-500", bg: "bg-green-50" },
        ]
        : [];

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminHeader onLogout={handleLogout} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1F3A]">Overview</h2>
                    <p className="text-gray-400 text-sm mt-1">Quick summary of contact enquiries and job applications</p>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 size={28} className="text-[#C9A84C] animate-spin" />
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                            {STAT_CARDS.map((card, i) => (
                                <motion.div
                                    key={card.label}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`bg-white rounded-xl border border-gray-100 border-l-4 ${card.color} p-5 shadow-sm`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-xs font-medium">{card.label}</span>
                                        <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center`}>
                                            <card.icon size={14} className="text-gray-500" />
                                        </div>
                                    </div>
                                    <p className="text-3xl font-bold text-[#0B1F3A]">{card.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/admin/contacts" className="group">
                                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#C9A84C]/30 transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                            <MessageSquare size={18} className="text-blue-500" />
                                        </div>
                                        <h3 className="text-[#0B1F3A] font-bold text-base group-hover:text-[#C9A84C] transition">
                                            Contact Queries
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">View and reply to contact form submissions</p>
                                </div>
                            </Link>
                            <Link href="/admin/applications" className="group">
                                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#C9A84C]/30 transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <Briefcase size={18} className="text-indigo-500" />
                                        </div>
                                        <h3 className="text-[#0B1F3A] font-bold text-base group-hover:text-[#C9A84C] transition">
                                            Job Applications
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-sm">Manage applicants, update status, and send replies</p>
                                </div>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
