"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Conditionally renders the public Navbar and Footer.
 * Hidden on /admin routes so the admin layout controls its own chrome.
 */
export default function PublicShell({ children }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    return (
        <>
            {!isAdmin && <Navbar />}
            <main>{children}</main>
            {!isAdmin && <Footer />}
        </>
    );
}
