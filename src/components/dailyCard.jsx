import React from "react";

export default function dailyCard({ weekday, maxTemp, minTemp, icon }) {
  return (
    <div className="daily-card">
      <div
        className="flex flex-col"
        style={{
          border: "1px solid rgb(196, 207, 214)",
          borderRadius: "8px",
        }}
      >
        <div className="flex-auto flex items-center justify-center">
          <span
            className="flex-auto text-center"
            style={{
              padding: "15px 0",
              color: "#666",
              fontSize: "0.95em",
              fontWeight: 600,
            }}
          >
            {weekday}
          </span>
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
              {icon}
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
