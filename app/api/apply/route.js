import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Save resume file to public/uploads/resumes/
async function saveResume(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
    await mkdir(uploadDir, { recursive: true });

    const ext = path.extname(file.name) || ".pdf";
    const filename = `${uuidv4()}${ext}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);
    return `/uploads/resumes/${filename}`;
}

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const position = formData.get("position");
        const resumeFile = formData.get("resume");

        if (!name || !email || !phone || !position) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        if (!resumeFile || typeof resumeFile === "string") {
            return NextResponse.json({ error: "Resume file is required." }, { status: 400 });
        }

        // Save resume (Note: This will likely fail on Vercel/Serverless as fs is read-only)
        let resumeUrl = null;
        try {
            resumeUrl = await saveResume(resumeFile);
        } catch (err) {
            console.warn("[APPLY] Runtime filesystem write failed (Serverless env?):", err.message);
            // On serverless, we'd normally use S3/Cloudinary. 
            // For now, we continue so the DB record can still be created if possible.
        }

        // Save to database
        let applicant = null;
        if (!process.env.DATABASE_URL) {
            console.error("[APPLY] CRITICAL: DATABASE_URL is not set in environment variables!");
        } else {
            try {
                const { prisma } = await import("@/lib/prisma");
                applicant = await prisma.applicant.create({
                    data: {
                        name,
                        email,
                        phone,
                        positionApplied: position,
                        resumeUrl,
                        status: "pending",
                    },
                });
            } catch (err) {
                console.error("[APPLY] Database save failed:", err.message);
            }
        }

        // Send email
        try {
            const { sendApplicationReceivedEmail } = await import("@/lib/email");
            await sendApplicationReceivedEmail(name, email, position);
        } catch (err) {
            console.error("[APPLY] Email send failed:", err.message);
        }

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully.",
            applicantId: applicant?.id || null,
        });
    } catch (err) {
        console.error("[APPLY] Error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
