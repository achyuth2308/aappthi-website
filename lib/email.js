import { Resend } from "resend";
import {
    applicationReceivedHTML,
    statusUpdatedHTML,
    contactReplyHTML,
    applicantReplyHTML,
} from "./email-templates";

// Resend client — configured via env vars
function getResendClient() {
    if (!process.env.RESEND_API_KEY) {
        console.log("[EmailProvider] Skipped: Resend not configured");
        return null;
    }
    return new Resend(process.env.RESEND_API_KEY);
}

/**
 * Send "Application Received" email to applicant
 */
export async function sendApplicationReceivedEmail(name, email, position) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        await resend.emails.send({
            from: process.env.EMAIL_FROM || "Aapthi Marketing Solutions <noreply@aapthi.com>",
            to: email,
            subject: "Application Received — Aapthi Marketing Solutions",
            html: applicationReceivedHTML(name, position),
        });
        console.log(`[EMAIL] Application received email sent to ${email}`);
    } catch (err) {
        console.error("[EMAIL] Failed to send application received email:", err.message);
    }
}

/**
 * Send "Status Updated" email to applicant
 */
export async function sendStatusUpdateEmail(name, email, status, position) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        await resend.emails.send({
            from: process.env.EMAIL_FROM || "Aapthi Marketing Solutions <noreply@aapthi.com>",
            to: email,
            subject: "Application Status Updated — Aapthi Marketing Solutions",
            html: statusUpdatedHTML(name, status, position),
        });
        console.log(`[EMAIL] Status update email sent to ${email} (${status})`);
    } catch (err) {
        console.error("[EMAIL] Failed to send status update email:", err.message);
    }
}

/**
 * Send reply email to a contact enquiry
 */
export async function sendContactReplyEmail(name, email, originalMessage, replyMessage) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        await resend.emails.send({
            from: process.env.EMAIL_FROM || "Aapthi Marketing Solutions <noreply@aapthi.com>",
            to: email,
            subject: "Reply to Your Enquiry — Aapthi Marketing Solutions",
            html: contactReplyHTML(name, originalMessage, replyMessage),
        });
        console.log(`[EMAIL] Contact reply email sent to ${email}`);
    } catch (err) {
        console.error("[EMAIL] Failed to send contact reply email:", err.message);
        throw err; // re-throw so caller knows it failed
    }
}

/**
 * Send reply email to a job applicant
 */
export async function sendApplicantReplyEmail(name, email, position, replyMessage) {
    try {
        const resend = getResendClient();
        if (!resend) return;
        await resend.emails.send({
            from: process.env.EMAIL_FROM || "Aapthi Marketing Solutions <noreply@aapthi.com>",
            to: email,
            subject: `Regarding Your Application — Aapthi Marketing Solutions`,
            html: applicantReplyHTML(name, position, replyMessage),
        });
        console.log(`[EMAIL] Applicant reply email sent to ${email}`);
    } catch (err) {
        console.error("[EMAIL] Failed to send applicant reply email:", err.message);
        throw err; // re-throw so caller knows it failed
    }
}
