"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    MessageSquare, LogOut, LayoutDashboard, Briefcase,
    Loader2, RefreshCw, Clock, CheckCircle, XCircle, Star,
    ChevronDown, Eye, X, Send, Mail, Users, FileText,
} from "lucide-react";

const NAV_ITEMS = [
    { label: "Dashboard", href: "/Jaishiv/dashboard", icon: LayoutDashboard },
    { label: "Contacts", href: "/Jaishiv/contacts", icon: MessageSquare },
    { label: "Applications", href: "/Jaishiv/applications", icon: Briefcase },
];

const STATUS_CONFIG = {
    approved: { label: "Approved", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
    rejected: { label: "Rejected", color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
};

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
                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition ${item.href === "/Jaishiv/applications"
                                    ? "text-white bg-white/10"
                                    : "text-white/60 hover:text-white hover:bg-white/10"
                                    }`}
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

/* ── Status Badge ───────────────────────── */
function StatusBadge({ status }) {
    const config = STATUS_CONFIG[status] || { label: status, color: "bg-gray-100 text-gray-700 border-gray-200", icon: Clock };
    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.color}`}>
            {config.label}
        </span>
    );
}

/* ── Status Dropdown ────────────────────── */
function StatusDropdown({ current, onUpdate, loading }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                disabled={loading}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#C9A84C]/50 transition bg-white"
            >
                {loading ? <Loader2 size={12} className="animate-spin" /> : "Change"}
                <ChevronDown size={12} />
            </button>
            {open && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20">
                    {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                        <button
                            key={key}
                            disabled={key === current}
                            onClick={() => {
                                onUpdate(key);
                                setOpen(false);
                            }}
                            className={`block w-full text-left px-3 py-2 text-xs font-medium transition ${key === current
                                ? "text-gray-300 cursor-default"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {cfg.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ── Reply Modal ────────────────────────── */
function ReplyModal({ applicant, onClose, onSent }) {
    const [reply, setReply] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    async function handleSend() {
        if (!reply.trim()) return;
        setSending(true);
        setError("");
        try {
            const res = await fetch("/api/admin/reply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "applicant",
                    id: applicant.id,
                    replyMessage: reply.trim(),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            onSent(applicant.id);
        } catch (err) {
            setError(err.message);
        } finally {
            setSending(false);
        }
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <h3 className="text-[#0B1F3A] font-bold text-base">Reply to {applicant.name}</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-4 space-y-4">
                        {/* Applicant Info */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Name</span>
                                    <p className="text-[#0B1F3A] font-medium">{applicant.name}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Email</span>
                                    <p className="text-[#0B1F3A] font-medium">{applicant.email}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Phone</span>
                                    <p className="text-[#0B1F3A] font-medium">{applicant.phone}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Position</span>
                                    <p className="text-[#0B1F3A] font-medium">{applicant.positionApplied}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Status</span>
                                    <div className="mt-1"><StatusBadge status={applicant.status} /></div>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Resume</span>
                                    {applicant.resumeUrl ? (
                                        <a
                                            href={applicant.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[#C9A84C] text-sm font-medium hover:underline mt-0.5"
                                        >
                                            <FileText size={12} /> View Resume
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-sm">N/A</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Previous Reply */}
                        {applicant.adminReply && (
                            <div>
                                <label className="block text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">
                                    Previous Reply
                                </label>
                                <div className="bg-green-50/50 border border-green-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                                    {applicant.adminReply}
                                </div>
                            </div>
                        )}

                        {/* Reply Input */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Your Reply
                            </label>
                            <textarea
                                rows={4}
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                placeholder="Type your reply here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/30 focus:border-[#C9A84C] transition resize-none"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSend}
                            disabled={sending || !reply.trim()}
                            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0B1F3A] flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
                            style={{ background: "linear-gradient(135deg, #C9A84C, #E2C06D)" }}
                        >
                            {sending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                            {sending ? "Sending..." : "Send Reply"}
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

/* ── Applications Page ──────────────────── */
export default function AdminApplicationsPage() {
    const router = useRouter();
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(null);
    const [replyApplicant, setReplyApplicant] = useState(null);
    const [toast, setToast] = useState(null);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/Jaishiv/login");
    }

    async function fetchApplicants() {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/applicants");
            if (res.status === 401) {
                router.push("/Jaishiv/login");
                return;
            }
            const data = await res.json();
            setApplicants(data.applicants || []);
        } catch (err) {
            console.error("Failed to fetch applicants:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApplicants();
    }, []);

    async function handleStatusUpdate(id, newStatus) {
        setUpdating(id);
        try {
            const res = await fetch(`/api/admin/applicants/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();

            if (res.ok) {
                setApplicants((prev) =>
                    prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
                );

                if (data.emailSent) {
                    setToast({ type: "success", message: "Status updated and email sent!" });
                } else {
                    setToast({ type: "warning", message: `Status updated, but email failed: ${data.emailError || "Unknown error"}. Check DNS verification.` });
                }
            } else {
                setToast({ type: "error", message: data.error || "Failed to update status" });
            }
        } catch (err) {
            console.error("Status update failed:", err);
            setToast({ type: "error", message: "Network error during update" });
        } finally {
            setUpdating(null);
            setTimeout(() => setToast(null), 5000);
        }
    }

    function handleReplySent(applicantId) {
        setApplicants((prev) =>
            prev.map((a) =>
                a.id === applicantId ? { ...a, repliedAt: new Date().toISOString() } : a
            )
        );
        setReplyApplicant(null);
    }

    // Count stats
    const counts = {
        total: applicants.length,
        approved: applicants.filter((a) => a.status === "approved").length,
        rejected: applicants.filter((a) => a.status === "rejected").length,
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminHeader onLogout={handleLogout} />

            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-lg border flex items-center gap-3 min-w-[320px] ${toast.type === "success" ? "bg-green-50 border-green-200 text-green-800" :
                            toast.type === "warning" ? "bg-amber-50 border-amber-200 text-amber-800" :
                                "bg-red-50 border-red-200 text-red-800"
                            }`}
                    >
                        {toast.type === "success" ? <CheckCircle size={18} /> :
                            toast.type === "warning" ? <Mail size={18} /> : <XCircle size={18} />}
                        <p className="text-sm font-medium">{toast.message}</p>
                        <button onClick={() => setToast(null)} className="ml-auto opacity-50 hover:opacity-100 transition">
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-[#0B1F3A]">Job Applications</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            {counts.total} total · {counts.approved} approved · {counts.rejected} rejected
                        </p>
                    </div>
                    <button
                        onClick={fetchApplicants}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-gray-500 hover:bg-white border border-gray-200 transition"
                    >
                        <RefreshCw size={14} /> Refresh
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    {[
                        { label: "Total", count: counts.total, color: "border-l-[#0B1F3A]", icon: Users },
                        { label: "Approved", count: counts.approved, color: "border-l-green-500", icon: CheckCircle },
                        { label: "Rejected", count: counts.rejected, color: "border-l-red-500", icon: XCircle },
                    ].map((stat) => (
                        <div key={stat.label} className={`bg-white rounded-xl border border-gray-100 border-l-4 ${stat.color} p-4 shadow-sm`}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-gray-400 text-xs font-medium">{stat.label}</span>
                                <stat.icon size={14} className="text-gray-300" />
                            </div>
                            <p className="text-2xl font-bold text-[#0B1F3A]">{stat.count}</p>
                        </div>
                    ))}
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-16">
                            <Loader2 size={24} className="text-[#C9A84C] animate-spin" />
                        </div>
                    ) : applicants.length === 0 ? (
                        <div className="text-center py-16">
                            <Users size={40} className="text-gray-200 mx-auto mb-3" />
                            <p className="text-gray-400 text-sm">No applicants yet</p>
                            <p className="text-gray-300 text-xs mt-1">Applications submitted via /apply will appear here</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-50 bg-gray-50/50">
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Position</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Resume</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Update</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Reply</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {applicants.map((a) => (
                                        <tr key={a.id} className="hover:bg-gray-50/50 transition">
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-semibold text-[#0B1F3A]">{a.name}</p>
                                                <p className="text-xs text-gray-400">{a.phone}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{a.email}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 font-medium">{a.positionApplied}</td>
                                            <td className="px-6 py-4">
                                                {a.resumeUrl ? (
                                                    <a
                                                        href={a.resumeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-medium hover:underline"
                                                    >
                                                        <Eye size={12} /> View
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-300 text-xs">N/A</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <StatusBadge status={a.status} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <StatusDropdown
                                                    current={a.status}
                                                    loading={updating === a.id}
                                                    onUpdate={(newStatus) => handleStatusUpdate(a.id, newStatus)}
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => setReplyApplicant(a)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 text-gray-600 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition bg-white"
                                                >
                                                    <Mail size={12} />
                                                    {a.repliedAt ? "Reply Again" : "Reply"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Reply Modal */}
            {replyApplicant && (
                <ReplyModal
                    applicant={replyApplicant}
                    onClose={() => setReplyApplicant(null)}
                    onSent={handleReplySent}
                />
            )}
        </div>
    );
}
