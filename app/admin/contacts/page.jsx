"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    MessageSquare, LogOut, LayoutDashboard, Briefcase,
    Loader2, RefreshCw, Mail, CheckCircle, Clock,
    X, Send, Eye,
} from "lucide-react";

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
                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition ${item.href === "/admin/contacts"
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

/* ── Reply Modal ────────────────────────── */
function ReplyModal({ contact, onClose, onSent }) {
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
                    type: "contact",
                    id: contact.id,
                    replyMessage: reply.trim(),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            onSent(contact.id);
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
                        <h3 className="text-[#0B1F3A] font-bold text-base">Reply to {contact.name}</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-4 space-y-4">
                        {/* Contact Info */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Name</span>
                                    <p className="text-[#0B1F3A] font-medium">{contact.name}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Email</span>
                                    <p className="text-[#0B1F3A] font-medium">{contact.email}</p>
                                </div>
                                {contact.phone && (
                                    <div>
                                        <span className="text-gray-400 text-xs font-medium">Phone</span>
                                        <p className="text-[#0B1F3A] font-medium">{contact.phone}</p>
                                    </div>
                                )}
                                <div>
                                    <span className="text-gray-400 text-xs font-medium">Date</span>
                                    <p className="text-[#0B1F3A] font-medium">
                                        {new Date(contact.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Original Message */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Original Message
                            </label>
                            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                                {contact.message}
                            </div>
                        </div>

                        {/* Previous Reply */}
                        {contact.isReplied && contact.replyMessage && (
                            <div>
                                <label className="block text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">
                                    Previous Reply
                                </label>
                                <div className="bg-green-50/50 border border-green-100 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
                                    {contact.replyMessage}
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

/* ── Contacts Page ─────────────────────── */
export default function AdminContactsPage() {
    const router = useRouter();
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [replyContact, setReplyContact] = useState(null);

    async function handleLogout() {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    }

    async function fetchContacts() {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/contacts");
            if (res.status === 401) {
                router.push("/admin/login");
                return;
            }
            const data = await res.json();
            setContacts(data.contacts || []);
        } catch (err) {
            console.error("Failed to fetch contacts:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    function handleReplySent(contactId) {
        setContacts((prev) =>
            prev.map((c) =>
                c.id === contactId ? { ...c, isReplied: true } : c
            )
        );
        setReplyContact(null);
    }

    const unrepliedCount = contacts.filter((c) => !c.isReplied).length;

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminHeader onLogout={handleLogout} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-[#0B1F3A]">Contact Queries</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            {contacts.length} total · {unrepliedCount} unreplied
                        </p>
                    </div>
                    <button
                        onClick={fetchContacts}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-gray-500 hover:bg-white border border-gray-200 transition"
                    >
                        <RefreshCw size={14} /> Refresh
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-16">
                            <Loader2 size={24} className="text-[#C9A84C] animate-spin" />
                        </div>
                    ) : contacts.length === 0 ? (
                        <div className="text-center py-16">
                            <MessageSquare size={40} className="text-gray-200 mx-auto mb-3" />
                            <p className="text-gray-400 text-sm">No contact queries yet</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-50 bg-gray-50/50">
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {contacts.map((c) => (
                                        <tr key={c.id} className="hover:bg-gray-50/50 transition">
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-semibold text-[#0B1F3A]">{c.name}</p>
                                                <p className="text-xs text-gray-400">
                                                    {new Date(c.createdAt).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{c.email}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{c.phone || "—"}</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600 max-w-[200px] truncate">
                                                    {c.message}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                {c.isReplied ? (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                                                        <CheckCircle size={12} /> Replied
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                                                        <Clock size={12} /> Pending
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => setReplyContact(c)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 text-gray-600 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition bg-white"
                                                >
                                                    {c.isReplied ? <Eye size={12} /> : <Mail size={12} />}
                                                    {c.isReplied ? "View / Reply" : "Reply"}
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
            {replyContact && (
                <ReplyModal
                    contact={replyContact}
                    onClose={() => setReplyContact(null)}
                    onSent={handleReplySent}
                />
            )}
        </div>
    );
}
