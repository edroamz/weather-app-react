import React from "react";
import Sunny from "@svgs/sunny-outline.svg";

export default function dailyCard({ day, maxTemp, minTemp }) {
  return (
    <div
      className=""
      style={
        {
          /*boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.05)",*/
        }
      }
    >
      <div
        className="flex"
        style={{
          flexDirection: "column",
          border: "1px solid rgb(196, 207, 214)",
          borderRadius: "8px",
        }}
      >
        <div
          className="flex-auto flex--center"
          style={{ borderBottom: "1px solid rgb(196, 207, 214)" }}
        >
          <h3
            className="flex-auto"
            style={{
              textAlign: "center",
              fontWeight: 500,
              padding: "15px 0",
            }}
          >
            {day}
          </h3>
        </div>
        <div
          className="flex-auto"
          style={{
            padding: "10px 0",
            display: "grid",
            gridTemplateColumns: "1fr",
            rowGap: "20px",
          }}
        >
          <div className="flex--center">
            <span
              style={{
                minWidth: "48px",
                alignItems: "center",
                justifyContent: "center",
                // border: "1px solid #eee",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "inline-flex",
              }}
            >
              <Sunny
                className="mx-auto"
                style={{
                  height: "32px",
                  width: "32px",
                  strokeWidth: 24,
                  // color: "#0070f3",
                }}
              ></Sunny>
            </span>
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: 300,
              marginBottom: "10px",
              display: "grid",
              gridTemplateColumns: "1fr",
              alignItems: "center",
              justifyContent: "center",
              rowGap: "7.5px",
            }}
          >
            <p>H {maxTemp}°</p>
            <p>L {minTemp}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}