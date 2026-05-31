import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FeetToPixels - Free Pixel Conversion Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent circle top-left */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.12)",
          }}
        />
        {/* Accent circle bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.12)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(34, 211, 238, 0.15)",
            border: "1px solid rgba(34, 211, 238, 0.3)",
            borderRadius: 100,
            padding: "8px 24px",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#22d3ee", fontSize: 14, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Free Online Tools
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f8fafc",
            lineHeight: 1.1,
            textAlign: "center",
            letterSpacing: "-0.03em",
            marginBottom: 20,
          }}
        >
          FeetToPixels
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            textAlign: "center",
            fontWeight: 400,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Convert pixels to inches, cm, feet, rem and more.
          Every tool is DPI-aware and free.
        </div>

        {/* Tool pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 48,
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 900,
          }}
        >
          {["Pixels to Inches", "DPI Calculator", "PX to REM", "Feet to Pixels", "PPI Calculator"].map((tool) => (
            <div
              key={tool}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "10px 20px",
                color: "#cbd5e1",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {tool}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#475569",
            fontSize: 18,
          }}
        >
          feettopixels.com
        </div>
      </div>
    ),
    { ...size }
  );
}
