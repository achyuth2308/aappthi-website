import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function GET(request) {
    if (!verifyAdminSession(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { prisma } = await import("@/lib/prisma");

        const contacts = await prisma.contactMessage.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ contacts });
    } catch (err) {
        console.error("[ADMIN CONTACTS]", err.message);
        return NextResponse.json({ contacts: [], fallback: true });
    }
}
