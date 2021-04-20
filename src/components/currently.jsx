import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function currently() {
  return (
    <div className="container mx-auto h-full" style={{ padding: "3em 0" }}>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          justifyContent: "center",
          gridTemplateColumns: "auto 1fr",
          maxWidth: "400px",
          margin: "0 auto",
          gridColumnGap: "25px",
        }}
      >
        <div className="flex--center">
          <Sunny
            style={{
              height: "72px",
              width: "72px",
              strokeWidth: 24,
            }}
          ></Sunny>
        </div>
        <div style={{ display: "grid", rowGap: "10px", textAlign: "left" }}>
          <h2
            style={{ fontSize: "2.85rem", fontWeight: 700, lineHeight: 1.25 }}
          >
            27°{" "}
            <span
              style={{ fontSize: "1.9rem", lineHeight: 1.25, fontWeight: 700 }}
            >
              Clear sky.
            </span>
          </h2>

          <div className="flex" style={{ fontSize: "0.9em" }}>
            <div className="flex-1">
              <strong>High:</strong> 23°
            </div>
            <div className="flex-1">
              <strong>Low:</strong> 20°
            </div>
            <div className="flex-1">
              <strong>Feels like:</strong> 27°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
