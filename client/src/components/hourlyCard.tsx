import * as React from "react";

interface IHourlyCardProps {
  hour: string | number;
  temp: number;
  icon: any;
}

export default function hourlyCard({ hour, temp, icon }: IHourlyCardProps) {
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
