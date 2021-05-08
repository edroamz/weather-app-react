import React from "react";
import Sunny from "@icons/sun-line.svg";

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
        className="flex flex-col"
        style={{
          border: "1px solid rgb(196, 207, 214)",
          borderRadius: "8px",
        }}
      >
        <div
          className="flex-auto flex items-center justify-center"
          style={{ borderBottom: "1px solid rgb(196, 207, 214)" }}
        >
          <h3
            className="flex-auto text-center"
            style={{
              padding: "15px 0",
            }}
          >
            {day}
          </h3>
        </div>
        <div
          className="flex-auto grid"
          style={{
            padding: "10px 0",
            gridTemplateColumns: "1fr",
            rowGap: "20px",
          }}
        >
          <div className="flex items-center justify-center">
            <span
              className="items-center justify-center"
              style={{
                minWidth: "48px",
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
            className="grid items-center justify-center font-light text-center"
            style={{
              marginBottom: "10px",
              gridTemplateColumns: "1fr",
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
