import * as React from "react";
import { DailyCard } from "@Pages/HomePage";
import Heading from "@Components/Heading";
import WeatherIcon from "@Components/WeatherIcon";
import ContainerBox from "@Components/ContainerBox";
import { GetShortWeekdayFromUnixUTCTimestamp } from "@Utils/dateUtils";

interface IDailyListProps {
  daily: IDaily[];
}

interface IDaily {
  dt: number;
  temp: ITemp;
  weather: IWeather[];
}

interface ITemp {
  min: number;
  max: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export default function dailyForecast({ daily }: IDailyListProps) {
  return (
    <section id="daily-forecast" className="daily-forecast">
      <ContainerBox>
        <div
          style={{
            paddingTop: "6rem",
            paddingBottom: "5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Heading level="h2" className="daily-forecast__heading">
            Daily forecast
          </Heading>
          <div className="daily-forecast__wrapper">
            {daily?.map((i: IDaily, index: number) => {
              const weekday =
                index === 0
                  ? "Today"
                  : GetShortWeekdayFromUnixUTCTimestamp(i.dt);

              return (
                <DailyCard
                  key={index}
                  weekday={weekday}
                  maxTemp={Math.round(i.temp.max)}
                  minTemp={Math.round(i.temp.min)}
                  icon={
                    <WeatherIcon
                      className="weather-icon"
                      icon={i.weather[0].icon}
                    ></WeatherIcon>
                  }
                ></DailyCard>
              );
            })}
          </div>
        </div>
      </ContainerBox>
    </section>
  );
}
