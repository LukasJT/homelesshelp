import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HomelessHelp.net — Find shelters. Volunteer. Understand homelessness.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #134e4a 0%, #0f766e 55%, #5eead4 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "white",
              color: "#0f766e",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 36,
            }}
          >
            H
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
            HomelessHelp<span style={{ color: "#f59e0b" }}>.net</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Find shelters.
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: "#f59e0b" }}>
            Volunteer. Donate.
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Understand homelessness.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 24, opacity: 0.9, maxWidth: 700 }}>
            375+ shelters and crisis resources across the US and Canada — plus guides on what
            actually works.
          </div>
          <div style={{ fontSize: 22, opacity: 0.85 }}>homelesshelp.net</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
