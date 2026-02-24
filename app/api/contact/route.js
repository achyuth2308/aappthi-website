import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Save to DB if configured
        if (process.env.DATABASE_URL) {
            try {
                const { prisma } = await import("@/lib/prisma");
                const contact = await prisma.contactMessage.create({
                    data: { name, email, phone: phone || null, message },
                });
                return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
            } catch (dbErr) {
                console.error("DB error:", dbErr);
            }
        }

        console.log("Contact form submission (no DB):", { name, email, phone, message });
        return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: "Contact API is active." });
}
