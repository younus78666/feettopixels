import { NextRequest, NextResponse } from "next/server"
import { verifyPassword, createSession, getSessionCookieConfig, getLogoutCookieConfig } from "@/lib/admin/auth"

// In-memory rate limiting for auth attempts
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = loginAttempts.get(ip)

  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  record.count++
  if (record.count > MAX_ATTEMPTS) {
    return true
  }
  return false
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many login attempts. Try again in 15 minutes." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { password } = body

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      )
    }

    // Limit password length to prevent DoS
    if (password.length > 256) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 400 }
      )
    }

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

    // Reset rate limit on successful login
    loginAttempts.delete(ip)

    const token = await createSession()
    const cookieConfig = getSessionCookieConfig(token)

    const response = NextResponse.json({ success: true })
    response.cookies.set(cookieConfig)

    return response
  } catch (error) {
    console.error("Auth error:", error)
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  const cookieConfig = getLogoutCookieConfig()
  const response = NextResponse.json({ success: true })
  response.cookies.set(cookieConfig)
  return response
}
