import * as React from "react";

interface IHourlyCard {
  hour: string | number;
  temp: number;
  icon: any;
}

export default function hourlyCard({ hour, temp, icon }: IHourlyCard) {
  return (
    <div className="hourly-card">
      <div className="hourly-card__box">
        <div className="hourly-card__box__hour">{hour}</div>
        <div className="hourly-card__box__icon">{icon}</div>
        <div className="hourly-card__box__temp">{temp}°</div>
      </div>
    </div>
  );
}
