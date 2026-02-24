/**
 * HTML email templates for Aapthi Marketing Solutions
 */

const COMPANY = "Aapthi Marketing Solutions Pvt Ltd";
const BRAND_COLOR = "#C9A84C";
const NAVY = "#0B1F3A";

function baseLayout(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:${NAVY};padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:${BRAND_COLOR};font-size:20px;letter-spacing:1px;">${COMPANY}</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #e9ecef;">
            <p style="margin:0;color:#999;font-size:12px;">&copy; ${new Date().getFullYear()} ${COMPANY}. All rights reserved.</p>
            <p style="margin:4px 0 0;color:#bbb;font-size:11px;">This is an automated message. Please do not reply.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function applicationReceivedHTML(name, position) {
  return baseLayout(`
    <h2 style="margin:0 0 16px;color:${NAVY};font-size:22px;">Application Received</h2>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Dear <strong>${name}</strong>,
    </p>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Thank you for applying for the position of <strong style="color:${NAVY};">${position}</strong> at ${COMPANY}.
    </p>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">
      We have successfully received your application and resume. Our recruitment team will review your profile and get back to you shortly.
    </p>
    <div style="background:#f8f9fa;border-left:4px solid ${BRAND_COLOR};padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px;">
      <p style="margin:0;color:${NAVY};font-size:14px;font-weight:bold;">What happens next?</p>
      <ul style="margin:8px 0 0;padding-left:18px;color:#666;font-size:13px;line-height:1.8;">
        <li>Profile review by our HR team</li>
        <li>Shortlisting based on qualifications</li>
        <li>Interview scheduling (if shortlisted)</li>
      </ul>
    </div>
    <p style="color:#999;font-size:13px;margin:0;">
      If you have any questions, contact us at <a href="mailto:hr@aapthi.com" style="color:${BRAND_COLOR};">hr@aapthi.com</a>.
    </p>
  `);
}

export function statusUpdatedHTML(name, status, position) {
  const statusColors = {
    pending: "#f59e0b",
    shortlisted: "#3b82f6",
    approved: "#10b981",
    rejected: "#ef4444",
  };
  const statusMessages = {
    pending: "Your application is currently under review.",
    shortlisted: "Congratulations! You have been shortlisted for further evaluation. Our team will contact you soon to schedule the next steps.",
    approved: "We are pleased to inform you that your application has been approved! Our HR team will reach out to you shortly with onboarding details.",
    rejected: "After careful consideration, we have decided to move forward with other candidates at this time. We encourage you to apply for future openings.",
  };

  const color = statusColors[status] || "#999";
  const message = statusMessages[status] || "Your application status has been updated.";

  return baseLayout(`
    <h2 style="margin:0 0 16px;color:${NAVY};font-size:22px;">Application Status Update</h2>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Dear <strong>${name}</strong>,
    </p>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 20px;">
      Your application for <strong style="color:${NAVY};">${position}</strong> has been updated.
    </p>
    <div style="text-align:center;margin:0 0 24px;">
      <span style="display:inline-block;padding:8px 24px;border-radius:20px;background:${color}15;border:1px solid ${color}30;color:${color};font-weight:bold;font-size:14px;text-transform:uppercase;letter-spacing:1px;">
        ${status}
      </span>
    </div>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">
      ${message}
    </p>
    <p style="color:#999;font-size:13px;margin:0;">
      For queries, contact <a href="mailto:hr@aapthi.com" style="color:${BRAND_COLOR};">hr@aapthi.com</a>.
    </p>
  `);
}

export function contactReplyHTML(name, originalMessage, replyMessage) {
  return baseLayout(`
    <h2 style="margin:0 0 16px;color:${NAVY};font-size:22px;">Reply to Your Enquiry</h2>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Dear <strong>${name}</strong>,
    </p>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Thank you for reaching out to ${COMPANY}. Here is our response to your enquiry:
    </p>
    <div style="background:#f0f9ff;border-left:4px solid ${BRAND_COLOR};padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 16px;">
      <p style="margin:0 0 6px;color:#999;font-size:12px;font-weight:bold;text-transform:uppercase;">Your Message</p>
      <p style="margin:0;color:#666;font-size:14px;line-height:1.6;font-style:italic;">${originalMessage}</p>
    </div>
    <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px;">
      <p style="margin:0 0 6px;color:#999;font-size:12px;font-weight:bold;text-transform:uppercase;">Our Reply</p>
      <p style="margin:0;color:#333;font-size:15px;line-height:1.7;">${replyMessage}</p>
    </div>
    <p style="color:#999;font-size:13px;margin:0;">
      For further queries, contact <a href="mailto:info@aapthi.com" style="color:${BRAND_COLOR};">info@aapthi.com</a>.
    </p>
  `);
}

export function applicantReplyHTML(name, position, replyMessage) {
  return baseLayout(`
    <h2 style="margin:0 0 16px;color:${NAVY};font-size:22px;">Regarding Your Application</h2>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      Dear <strong>${name}</strong>,
    </p>
    <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 16px;">
      This is regarding your application for the position of <strong style="color:${NAVY};">${position}</strong> at ${COMPANY}.
    </p>
    <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px;">
      <p style="margin:0 0 6px;color:#999;font-size:12px;font-weight:bold;text-transform:uppercase;">Message from HR</p>
      <p style="margin:0;color:#333;font-size:15px;line-height:1.7;">${replyMessage}</p>
    </div>
    <p style="color:#999;font-size:13px;margin:0;">
      For queries, contact <a href="mailto:hr@aapthi.com" style="color:${BRAND_COLOR};">hr@aapthi.com</a>.
    </p>
  `);
}
