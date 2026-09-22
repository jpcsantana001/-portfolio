import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B0D12",
          backgroundImage:
            "linear-gradient(to right, #1a1e29 1px, transparent 1px), linear-gradient(to bottom, #1a1e29 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#5B8DEF",
              display: "flex",
            }}
          />
          <span style={{ color: "#8B92A3", fontSize: 24 }}>
            {personal.status}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 76, color: "#E7E9EE", fontWeight: 600 }}>
          {personal.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#5B8DEF", marginTop: 12 }}>
          {personal.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
