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
        <div className="container mx-auto" style={{ padding: "4em 0 0 0" }}>
          <SearchBox></SearchBox>
        </div>
      </section>
      <section id="current-weather">
        <div
          className="container mx-auto h-full"
          style={{ padding: "4em 0 1em 0" }}
        >
          <div
            style={{
              display: "grid",
              textAlign: "center",
              justifyContent: "center",
              gridTemplateColumns: "1fr",
              margin: "0 auto",
              rowGap: "15px",
            }}
          >
            <div className="flex--center">
              <Sunny
                style={{
                  height: "38px",
                  width: "38px",
                  color: "#0076ff",
                }}
              ></Sunny>
            </div>
            <div style={{ display: "grid", rowGap: "15px", textAlign: "left" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  textAlign: "center",
                }}
              >
                27° Clear sky.
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  columnGap: "2.5em",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "1.1em",
                    }}
                  >
                    High:{" "}
                    <span
                      style={{
                        marginLeft: "0.35em",
                        fontWeight: 400,
                        color: "#666",
                      }}
                    >
                      23°
                    </span>
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "1.1em",
                    }}
                  >
                    Low:{" "}
                    <span
                      style={{
                        marginLeft: "0.35em",
                        fontWeight: 400,
                        color: "#666",
                      }}
                    >
                      20°
                    </span>
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "1.1em",
                    }}
                  >
                    Feels like:{" "}
                    <span
                      style={{
                        marginLeft: "0.35em",
                        fontWeight: 400,
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
        <div className="container mx-auto h-full" style={{ padding: "5em 0" }}>
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
        <div className="container mx-auto h-full" style={{ padding: "5em 0" }}>
          <div
            className=""
            style={{
              display: "grid",
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
        <div className="container mx-auto h-full" style={{ padding: "5em 0" }}>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "1.5em",
              textAlign: "center",
            }}
          >
            <p>
              Copyright © {new Date().getFullYear()} Eduardo R. Ambriz. All
              rights reserved.
            </p>
            <p style={{ fontWeight: 300 }}>
              This site is built with Webpack & Reactjs from scratch and hosted
              on Netlify. The source code is hosted on{" "}
              <a
                style={{
                  color: "rgb(0, 118, 255)",
                  fontWeight: 500,
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
