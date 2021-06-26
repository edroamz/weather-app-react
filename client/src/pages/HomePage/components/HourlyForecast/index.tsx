import * as React from "react";
import { Fragment } from "react";
import { HourlyCard } from "@Pages/HomePage";
import Heading from "@Components/Heading";
import ContainerBox from "@Components/ContainerBox";
import TransparentBox from "@Components/TransparentBox";
import ScrollableBox from "@Components/ScrollableBox";
import VerticalLineSeparator from "@Components/VerticalLineSeparator";
import WeatherIcon from "@Components/WeatherIcon";
import { GetHoursFromUnixUTCTimestamp } from "@Utils/dateUtils";

interface IHourlyListProps {
  hourly: IHourly[];
}

interface IHourly {
  dt: number;
  temp: number;
  weather: IWeather[];
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export default function hourlyForecast({ hourly }: IHourlyListProps) {
  return (
    <section id="hourly-forecast" className="hourly-forecast">
      <div
        style={{
          padding: "5rem 0 2rem",
        }}
      >
        <ContainerBox>
          <div style={{ padding: "0 1rem" }}>
            <Heading level="h2" className="hourly-forecast__heading">
              Hourly forecast
            </Heading>
          </div>
        </ContainerBox>
        <div style={{ position: "relative" }}>
          <TransparentBox from="left" to="right"></TransparentBox>
          <TransparentBox from="right" to="left"></TransparentBox>
          <ScrollableBox>
            <div className="hourly-forecast__wrapper">
              {hourly?.map((i: IHourly, index: number) => {
                const hour =
                  index === 0 ? "Now" : GetHoursFromUnixUTCTimestamp(i.dt);
                const temp = Math.round(i.temp);
                const icon = (
                  <WeatherIcon
                    className="weather-icon"
                    icon={i.weather[0].icon}
                  ></WeatherIcon>
                );

                return (
                  <Fragment key={index}>
                    <HourlyCard
                      hour={hour}
                      temp={temp}
                      icon={icon}
                    ></HourlyCard>
                    {hourly.length - 1 !== index && (
                      <VerticalLineSeparator></VerticalLineSeparator>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </ScrollableBox>
        </div>
      </div>
    </section>
  );
}
