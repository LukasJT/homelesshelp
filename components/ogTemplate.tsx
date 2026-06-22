import { ImageResponse } from "next/og";

export function makeOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #134e4a 0%, #0f766e 55%, #5eead4 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "white",
              color: "#0f766e",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 32,
            }}
          >
            H
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: -0.5 }}>
            HomelessHelp<span style={{ color: "#f59e0b" }}>.net</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 1040 }}>
          {eyebrow && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#f59e0b",
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "block",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 26, opacity: 0.92, lineHeight: 1.4, marginTop: 12 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div style={{ fontSize: 20, opacity: 0.85 }}>homelesshelp.net</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
