import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import crypto from "crypto"

const COOKIE_NAME = "admin-session"
const SESSION_DURATION = 4 * 60 * 60 // 4 hours (reduced from 24h for security)

function getSecret(): Uint8Array {
  const secret = process.env.ADMIN_SECRET
  if (!secret) throw new Error("ADMIN_SECRET environment variable is required")
  return new TextEncoder().encode(secret)
}

export function verifyPassword(password: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) throw new Error("ADMIN_PASSWORD environment variable is required")

  // Timing-safe comparison to prevent timing attacks
  const a = Buffer.from(password)
  const b = Buffer.from(adminPassword)
  if (a.length !== b.length) {
    // Still do a comparison to maintain constant time
    crypto.timingSafeEqual(a, Buffer.alloc(a.length))
    return false
  }
  return crypto.timingSafeEqual(a, b)
}

export async function createSession(): Promise<string> {
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(getSecret())

  return token
}

export async function verifySession(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecret())
    return true
  } catch {
    return false
  }
}

export async function getSessionFromCookies(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get(COOKIE_NAME)
    if (!sessionCookie?.value) return false
    return verifySession(sessionCookie.value)
  } catch {
    return false
  }
}

export function getSessionCookieConfig(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const, // strict for admin panel security
    maxAge: SESSION_DURATION,
    path: "/",
  }
}

export function getLogoutCookieConfig() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 0,
    path: "/",
  }
}
