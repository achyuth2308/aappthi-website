import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 8; // 8 hours

function getSecret() {
    return process.env.ADMIN_SECRET || "change-this-to-a-strong-secret";
}

/** Create a signed session token */
function createToken() {
    const payload = `admin:${Date.now()}`;
    const hmac = crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
    return `${Buffer.from(payload).toString("base64")}.${hmac}`;
}

/** Verify a signed session token */
function verifyToken(token) {
    try {
        const [payloadB64, hmac] = token.split(".");
        if (!payloadB64 || !hmac) return false;
        const payload = Buffer.from(payloadB64, "base64").toString();
        const expected = crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
        if (hmac !== expected) return false;
        // Check expiry
        const timestamp = parseInt(payload.split(":")[1], 10);
        if (Date.now() - timestamp > MAX_AGE * 1000) return false;
        return true;
    } catch {
        return false;
    }
}

/** Set admin session cookie on a NextResponse */
export function setAdminSession(response) {
    const token = createToken();
    response.cookies.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: MAX_AGE,
    });
    return response;
}

/** Verify admin session from a NextRequest — returns true/false */
export function verifyAdminSession(request) {
    const cookie = request.cookies.get(COOKIE_NAME);
    if (!cookie?.value) return false;
    return verifyToken(cookie.value);
}

/** Clear admin session cookie on a NextResponse */
export function clearAdminSession(response) {
    response.cookies.set(COOKIE_NAME, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
    return response;
}
