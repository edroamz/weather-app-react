import React from "react";
import SearchBox from "@components/searchBox.jsx";
import HourlyCard from "@components/hourlyCard.jsx";
import DailyCard from "@components/dailyCard.jsx";
import Map from "@components/map.jsx";
import Sunny from "@svgs/sunny-outline.svg";
import hourlyForecast from "./data/hourlyForecast.json";
import dailyForecast from "./data/dailyForecast.json";

const App = () => (
  <>
    <main>
      <section id="search">
        <div className="container mx-auto pt-16">
          <SearchBox></SearchBox>
        </div>
      </section>
      <section id="current-weather">
        <div className="container mx-auto h-full pt-16">
          <div
            className="grid justify-center text-center"
            style={{
              gridTemplateColumns: "1fr",
              margin: "0 auto",
              rowGap: "15px",
            }}
          >
            <div className="flex items-center justify-center">
              <Sunny
                style={{
                  height: "38px",
                  width: "38px",
                  color: "#0076ff",
                }}
              ></Sunny>
            </div>
            <div className="grid text-left" style={{ rowGap: "15px" }}>
              <h2
                className="font-medium text-center"
                style={{
                  fontSize: "2rem",
                  lineHeight: 1.25,
                }}
              >
                27° Clear sky.
              </h2>

              <div
                className="grid items-center justify-center"
                style={{
                  gridTemplateColumns: "repeat(3, auto)",
                  columnGap: "2.5em",
                }}
              >
                <div>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    High:{" "}
                    <span
                      className="font-normal"
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      23°
                    </span>
                  </span>
                </div>
                <div>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Low:{" "}
                    <span
                      className="font-normal"
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      20°
                    </span>
                  </span>
                </div>
                <div>
                  <span
                    className="font-medium"
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Feels like:{" "}
                    <span
                      className="font-normal"
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      27°
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hourly-forecast">
        <div className="container mx-auto h-full py-20">
          <div className="flex">
            {hourlyForecast &&
              hourlyForecast.map((i, index) => {
                return (
                  <HourlyCard
                    key={index}
                    hour={i.hour}
                    temperature={i.temperature}
                  ></HourlyCard>
                );
              })}
          </div>
        </div>
      </section>
      <Map></Map>
      <section id="daily-forecast">
        <div className="container mx-auto h-full py-20">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              gridColumnGap: "10px",
            }}
          >
            {dailyForecast &&
              dailyForecast.map((i, index) => {
                return (
                  <DailyCard
                    key={index}
                    day={i.day}
                    maxTemp={i.maxTemp}
                    minTemp={i.minTemp}
                  >
                    daily
                  </DailyCard>
                );
              })}
          </div>
        </div>
      </section>
    </main>
    <footer
      className="bg-light-grey"
      style={{ borderTop: "1px solid #eaeaea" }}
    >
      <div>
        <div className="container mx-auto h-full py-20">
          <div
            className="grid items-center justify-center text-center"
            style={{
              rowGap: "1.5em",
            }}
          >
            <p>
              Copyright © {new Date().getFullYear()} Eduardo R. Ambriz. All
              rights reserved.
            </p>
            <p className="font-light">
              This site is built with Webpack & Reactjs from scratch and hosted
              on Netlify. The source code is hosted on{" "}
              <a
                className="font-medium"
                style={{
                  color: "rgb(0, 118, 255)",
                  textDecoration: "none",
                }}
                href="https://github.com/edroamz/weather-app-react"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default App;
