import { Resend } from "resend";
import {
    applicationReceivedHTML,
    statusUpdatedHTML,
    contactReplyHTML,
    applicantReplyHTML,
} from "./email-templates";

// Resend client — configured via env vars
function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
        console.warn("[EmailProvider] Skipped: RESEND_API_KEY not found or empty");
        return null;
    }
    console.log("[EmailProvider] Initializing Resend client...");
    return new Resend(apiKey);
}

/**
 * Send "Application Received" email to applicant
 */
export async function sendApplicationReceivedEmail(name, email, position) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
        const result = await resend.emails.send({
            from: fromEmail,
            to: email,
            bcc: process.env.ADMIN_EMAIL, // Notification to admin
            subject: "Application Received — Aapthi Marketing Solutions",
            html: applicationReceivedHTML(name, position),
        });

        if (result.error) {
            console.error("[EMAIL] Resend API error:", result.error);
            return { success: false, error: result.error };
        }

        console.log(`[EMAIL] Application received email sent to ${email}`);
        return { success: true, data: result.data };
    } catch (err) {
        console.error("[EMAIL] Failed to send application received email:", err.message);
        return { success: false, error: err.message };
    }
}

/**
 * Send "Status Updated" email to applicant
 */
export async function sendStatusUpdateEmail(name, email, status, position) {
    console.log(`[EMAIL] Attempting to send status update email to ${email} (status: ${status})`);
    try {
        const resend = getResendClient();
        if (!resend) {
            console.error("[EMAIL] Aborted: Resend client not initialized");
            return;
        }

        const fromEmail = process.env.EMAIL_FROM || "Aapthi Marketing Solutions <noreply@aapthi.com>";
        console.log(`[EMAIL] Using FROM address: ${fromEmail}`);

        const result = await resend.emails.send({
            from: fromEmail,
            to: email,
            bcc: process.env.ADMIN_EMAIL,
            subject: "Application Status Updated — Aapthi Marketing Solutions",
            html: statusUpdatedHTML(name, status, position),
        });

        if (result.error) {
            console.error("[EMAIL] Resend API error:", result.error);
            return { success: false, error: result.error };
        } else {
            console.log(`[EMAIL] Status update email sent successfully! ID: ${result.data?.id}`);
            return { success: true, data: result.data };
        }
    } catch (err) {
        console.error("[EMAIL] Unexpected error sending status update email:", err);
        return { success: false, error: err.message };
    }
}

/**
 * Send reply email to a contact enquiry
 */
export async function sendContactReplyEmail(name, email, originalMessage, replyMessage) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
        const result = await resend.emails.send({
            from: fromEmail,
            to: email,
            bcc: process.env.ADMIN_EMAIL,
            subject: "Reply to Your Enquiry — Aapthi Marketing Solutions",
            html: contactReplyHTML(name, originalMessage, replyMessage),
        });

        if (result.error) {
            console.error("[EMAIL] Resend API error:", result.error);
            return { success: false, error: result.error };
        }

        console.log(`[EMAIL] Contact reply email sent to ${email}`);
        return { success: true, data: result.data };
    } catch (err) {
        console.error("[EMAIL] Failed to send contact reply email:", err.message);
        return { success: false, error: err.message };
    }
}

/**
 * Send reply email to a job applicant
 */
export async function sendApplicantReplyEmail(name, email, position, replyMessage) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
        const result = await resend.emails.send({
            from: fromEmail,
            to: email,
            bcc: process.env.ADMIN_EMAIL,
            subject: `Regarding Your Application — Aapthi Marketing Solutions`,
            html: applicantReplyHTML(name, position, replyMessage),
        });

        if (result.error) {
            console.error("[EMAIL] Resend API error:", result.error);
            return { success: false, error: result.error };
        }

        console.log(`[EMAIL] Applicant reply email sent to ${email}`);
        return { success: true, data: result.data };
    } catch (err) {
        console.error("[EMAIL] Failed to send applicant reply email:", err.message);
        return { success: false, error: err.message };
    }
}
