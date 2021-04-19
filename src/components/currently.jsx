import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function currently() {
  return (
    <div className="bg-light-grey">
      <div className="container mx-auto h-full" style={{ padding: "30px 0" }}>
        <div
          style={{
            display: "grid",
            textAlign: "center",
            justifyContent: "center",
            gridTemplateColumns: "auto 1fr",
            maxWidth: "400px",
            margin: "0 auto",
            gridColumnGap: "35px",
          }}
        >
          <div className="flex--center">
            <Sunny
              style={{ height: "72px", width: "72px", strokeWidth: 14 }}
            ></Sunny>
          </div>
          <div style={{ display: "grid", textAlign: "left" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.25 }}>
              27°{" "}
              <sup
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  verticalAlign: "super",
                }}
              >
                C / F
              </sup>
            </h2>
            <h3 style={{ fontSize: "2rem", lineHeight: 1.25, fontWeight: 700 }}>
              Clear sky
            </h3>
            <div
              className="flex"
              style={{ marginTop: "25px", fontSize: "0.9em" }}
            >
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
    </div>
  );
}
