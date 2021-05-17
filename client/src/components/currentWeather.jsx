import React from "react";
import Container from "@components/common/container.jsx";
import Paragraph from "@components/common/paragraph.jsx";
import LocationIcon from "@icons/navigate.svg";
import Heading from "@components/common/heading.jsx";
import WeatherIcon from "@helpers/getOpenWeatherIconHelper.jsx";
import Text from "@components/common/text.jsx";

export default function currentWeather({
  city: { name: cityName, country },
  current,
}) {
  const { temp, pressure, humidity, feels_like, clouds, uvi, weather } =
    current;
  const { icon, main, description } = weather[0];

  return (
    <section id="current-weather">
      <div style={{ paddingTop: "2rem" }}>
        <div
          className="container mx-auto"
          style={{
            textAlign: "center",
            fontSize: "1.1em",
          }}
        >
          <LocationIcon
            style={{
              display: "inline-block",
              marginRight: "5px",
              height: "14px",
              width: "14px",
            }}
          ></LocationIcon>
          <Text
            style={{
              textDecorationLine: "underline",
              textDecorationThickness: "from-font",
            }}
          >
            {cityName}, {country}
          </Text>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <div className="container mx-auto h-full">
          <div
            className="grid justify-center text-center"
            style={{
              gridTemplateColumns: "1fr",
              margin: "0 auto",
              rowGap: "15px",
            }}
          >
            <div className="grid text-left" style={{ rowGap: "15px" }}>
              <Heading
                level={2}
                className="text-center"
                style={{
                  fontSize: "38px",
                  lineHeight: "38px",
                  display: "flex",
                  height: "38px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {current?.weather && (
                  <WeatherIcon
                    className="weather-icon--current"
                    style={{ height: "inherit", marginRight: "15px" }}
                    iconCode={icon}
                  ></WeatherIcon>
                )}{" "}
                <Text style={{ marginRight: "15px" }}>{Math.round(temp)}°</Text>{" "}
                <Text>{main}.</Text>
              </Heading>
              <Paragraph
                style={{
                  fontSize: "1.25rem",
                  textTransform: "capitalize",
                }}
              >
                {description}
              </Paragraph>

              <div
                className="grid items-center justify-center"
                style={{
                  gridTemplateColumns: "repeat(9, auto)",
                  columnGap: "0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                <div>
                  <Text
                    className=""
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Pressure:{" "}
                    <Text
                      className=""
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      {pressure} hPa
                    </Text>
                  </Text>
                </div>
                <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                <div>
                  <Text
                    className=""
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Humidity:{" "}
                    <Text
                      className=""
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      {humidity}%
                    </Text>
                  </Text>
                </div>
                <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                <div>
                  <Text
                    className=""
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Feels like:{" "}
                    <Text
                      className=""
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      {Math.round(feels_like)}°
                    </Text>
                  </Text>
                </div>
                <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                <div>
                  <Text
                    className=""
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    Clouds:{" "}
                    <Text
                      className=""
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      {clouds}%
                    </Text>
                  </Text>
                </div>
                <div style={{ color: "hsl(203deg 18% 65%)" }}>—</div>
                <div>
                  <Text
                    className=""
                    style={{
                      fontSize: "1.1em",
                    }}
                  >
                    UV index:{" "}
                    <Text
                      className=""
                      style={{
                        marginLeft: "0.35em",
                        color: "#666",
                      }}
                    >
                      {uvi}
                    </Text>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
