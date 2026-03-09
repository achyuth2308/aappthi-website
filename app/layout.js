import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/layout/PublicShell";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata = {
    title: {
        default: "Aapthi Marketing Solutions Pvt Ltd — Enterprise IT & Business Solutions",
        template: "%s | Aapthi Marketing Solutions",
    },
    description:
        "Aapthi Marketing Solutions Pvt Ltd delivers premium IT staffing, software development, non-voice BPO, and real estate support services to enterprises across India and Asia-Pacific.",
    keywords: [
        "IT staffing",
        "software development",
        "BPO services",
        "real estate support",
        "enterprise solutions",
        "Aapthi Marketing Solutions",
    ],
    authors: [{ name: "Aapthi Marketing Solutions Pvt Ltd" }],
    creator: "Aapthi Marketing Solutions Pvt Ltd",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://aapthisolutions.com",
        siteName: "Aapthi Marketing Solutions",
        title: "Aapthi Marketing Solutions Pvt Ltd",
        description:
            "Enterprise IT & Workforce Solutions — Smart, Reliable, Global.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aapthi Marketing Solutions Pvt Ltd",
        description: "Enterprise IT & Workforce Solutions",
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "L5QKvoJgNH3Y5gasQCqqwwUlVJqT77ZdCJy1ey0yPjA",
    },
    icons: {
        icon: "/Aapthi_logo.png",
        shortcut: "/Aapthi_logo.png",
        apple: "/Aapthi_logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "https://aapthisolutions.com",
                            "logo": "https://aapthisolutions.com/Aapthi_logo.png",
                        }),
                    }}
                />
                <PublicShell>{children}</PublicShell>
            </body>
        </html>
    );
}
