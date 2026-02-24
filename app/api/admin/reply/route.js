import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function POST(request) {
    if (!verifyAdminSession(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { type, id, replyMessage } = await request.json();

        if (!type || !id || !replyMessage) {
            return NextResponse.json(
                { error: "type, id, and replyMessage are required." },
                { status: 400 }
            );
        }

        const { prisma } = await import("@/lib/prisma");

        if (type === "contact") {
            // Find the contact
            const contact = await prisma.contactMessage.findUnique({
                where: { id: parseInt(id, 10) },
            });

            if (!contact) {
                return NextResponse.json(
                    { error: "Contact message not found." },
                    { status: 404 }
                );
            }

            // Send reply email
            try {
                const { sendContactReplyEmail } = await import("@/lib/email");
                await sendContactReplyEmail(
                    contact.name,
                    contact.email,
                    contact.message,
                    replyMessage
                );
            } catch (emailErr) {
                console.error("[ADMIN REPLY] Email failed:", emailErr.message);
                return NextResponse.json(
                    { error: "Failed to send reply email." },
                    { status: 500 }
                );
            }

            // Update DB
            const updated = await prisma.contactMessage.update({
                where: { id: parseInt(id, 10) },
                data: {
                    isReplied: true,
                    replyMessage,
                    repliedAt: new Date(),
                },
            });

            return NextResponse.json({ success: true, contact: updated });
        }

        if (type === "applicant") {
            // Find the applicant
            const applicant = await prisma.applicant.findUnique({
                where: { id: String(id) },
            });

            if (!applicant) {
                return NextResponse.json(
                    { error: "Applicant not found." },
                    { status: 404 }
                );
            }

            // Send reply email
            try {
                const { sendApplicantReplyEmail } = await import("@/lib/email");
                await sendApplicantReplyEmail(
                    applicant.name,
                    applicant.email,
                    applicant.positionApplied,
                    replyMessage
                );
            } catch (emailErr) {
                console.error("[ADMIN REPLY] Email failed:", emailErr.message);
                return NextResponse.json(
                    { error: "Failed to send reply email." },
                    { status: 500 }
                );
            }

            // Update DB
            const updated = await prisma.applicant.update({
                where: { id: String(id) },
                data: {
                    adminReply: replyMessage,
                    repliedAt: new Date(),
                },
            });

            return NextResponse.json({ success: true, applicant: updated });
        }

        return NextResponse.json(
            { error: "type must be 'contact' or 'applicant'." },
            { status: 400 }
        );
    } catch (err) {
        console.error("[ADMIN REPLY]", err);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
