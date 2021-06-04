import * as React from "react";
import Heading from "./common/heading";
import DailyCard from "./dailyCard";
import { GetShortWeekdayFromUnixUTCTimestamp } from "../utils/dateUtils";
import WeatherIcon from "./../helpers/getOpenWeatherIconHelper";
import Container from "./common/container";

interface IDailyList {
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

export default function dailyForecast({ daily }: IDailyList) {
  return (
    <section id="daily-forecast" className="daily-forecast">
      <Container>
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
      </Container>
    </section>
  );
}
