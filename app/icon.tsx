import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #134e4a, #0f766e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 320,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        H
      </div>
    ),
    { ...size },
  );
}
