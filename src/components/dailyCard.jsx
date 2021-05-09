import React from "react";

export default function dailyCard({ weekday, maxTemp, minTemp, icon }) {
  return (
    <div className="daily-card ">
      <div className="daily-card__box ">
        <span className="daily-card__box__weekday">{weekday}</span>
        <div className="daily-card__box__icon">{icon}</div>
        <div className="daily-card__box__temps ">
          <span>H {maxTemp}°</span>
          <span>L {minTemp}°</span>
        </div>
      </div>
    </div>
  );
}
