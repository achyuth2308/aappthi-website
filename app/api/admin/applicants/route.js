import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function GET(request) {
    if (!verifyAdminSession(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { prisma } = await import("@/lib/prisma");

        const applicants = await prisma.applicant.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ applicants });
    } catch (err) {
        console.error("[ADMIN APPLICANTS]", err.message);
        return NextResponse.json({
            applicants: [],
            fallback: true,
            error: err.message,
            db_configured: !!process.env.DATABASE_URL
        });
    }
}

