import React from "react";

export default function hourlyCard({ hour, temp, icon }) {
  return (
    <div className="hourly-card">
      <div className="hourly-card__box">
        <div className="hourly-card__box__hour">{hour}</div>
        <div>{icon}</div>
        <div className="hourly-card__box__temp">{temp}°</div>
      </div>
    </div>
  );
}
