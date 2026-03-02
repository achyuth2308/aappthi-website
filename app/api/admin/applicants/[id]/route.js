import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/admin-auth";

const VALID_STATUSES = ["approved", "rejected"];

export async function PUT(request, { params }) {
    if (!verifyAdminSession(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const { status } = await request.json();

        if (!status || !VALID_STATUSES.includes(status)) {
            return NextResponse.json(
                { error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}` },
                { status: 400 }
            );
        }

        const { prisma } = await import("@/lib/prisma");

        const applicant = await prisma.applicant.update({
            where: { id },
            data: { status },
        });

        // Send status update email
        let emailSent = false;
        let emailError = null;
        try {
            const { sendStatusUpdateEmail } = await import("@/lib/email");
            const result = await sendStatusUpdateEmail(
                applicant.name,
                applicant.email,
                status,
                applicant.positionApplied
            );
            emailSent = result?.success || false;
            emailError = result?.error || null;
        } catch (err) {
            console.error("[ADMIN] Email send failed:", err.message);
            emailError = err.message;
        }

        return NextResponse.json({ success: true, applicant, emailSent, emailError });
    } catch (err) {
        console.error("[ADMIN UPDATE]", err);
        return NextResponse.json({ error: "Failed to update applicant." }, { status: 500 });
    }
}

