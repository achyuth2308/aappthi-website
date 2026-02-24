import { NextResponse } from "next/server";
import { setAdminSession } from "@/lib/admin-auth";

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

        const adminEmail = process.env.ADMIN_EMAIL || "admin@aapthi.com";
        const adminPassword = process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET || "admin123";

        if (email !== adminEmail || password !== adminPassword) {
            return NextResponse.json(
                { error: "Invalid credentials." },
                { status: 401 }
            );
        }

        const response = NextResponse.json({
            success: true,
            message: "Authenticated.",
        });

        setAdminSession(response);
        return response;
    } catch (err) {
        console.error("[ADMIN LOGIN]", err);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
