import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, position, message } = body;

        if (!name || !email || !position) {
            return NextResponse.json(
                { error: "Name, email, and position are required." },
                { status: 400 }
            );
        }

        if (process.env.DATABASE_URL) {
            try {
                const { prisma } = await import("@/lib/prisma");
                const application = await prisma.careerApplication.create({
                    data: { name, email, position, resumeUrl: null },
                });
                return NextResponse.json({ success: true, id: application.id }, { status: 201 });
            } catch (dbErr) {
                console.error("DB error:", dbErr);
            }
        }

        console.log("Career application (no DB):", { name, email, position });
        return NextResponse.json({ success: true, message: "Application received." }, { status: 200 });
    } catch (error) {
        console.error("Careers API error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
