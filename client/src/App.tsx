import * as React from "react";
import { useState } from "react";
import Text from "@Components/Text";
import Header from "@Layout/Header";
import Footer from "@Layout/Footer";
import { useQuery, gql } from "@apollo/client";
import {
  SearchCity,
  CurrentWeather,
  HourlyForecast,
  DailyForecast,
} from "@Pages/HomePage";
import GoogleMaps from "@Components/GoogleMaps";

const App = () => {
  const [apiData, setApiData] = useState<IOpenWeather>({
    lat: 0.0,
    lon: 0.0,
    current: null,
    hourly: null,
    daily: null,
  });
  const [city, setCity] = useState<ICity>({
    id: 0,
    lat: 0.0,
    lon: 0.0,
    name: "",
    country: "",
  });

  interface ICity {
    id: number;
    lat: number;
    lon: number;
    name: string;
    country: string;
  }

  interface IOpenWeather {
    lat: number;
    lon: number;
    current: ICurrent | null;
    hourly: IHourly[] | null;
    daily: IDaily[] | null;
  }

  interface ICurrent {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    uvi: number;
    clouds: number;
    weather: IWeather[];
  }

  interface IHourly {
    dt: number;
    temp: number;
    weather: IWeather[];
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

  interface IOpenWeatherData {
    OpenWeather: IOpenWeather;
  }

  interface IOpenWeatherVars {
    lat: number;
    lon: number;
    units: string;
  }

  const GET_WEATHER = gql`
    query GetOpenWeather($lat: Float!, $lon: Float!, $units: String!) {
      OpenWeather(lat: $lat, lon: $lon, units: $units) {
        lat
        lon
        current {
          dt
          temp
          feels_like
          pressure
          humidity
          uvi
          clouds
          weather {
            main
            description
            icon
          }
        }
        hourly {
          dt
          temp
          weather {
            icon
          }
        }
        daily {
          dt
          temp {
            min
            max
          }
          weather {
            icon
          }
        }
      }
    }
  `;

  const { lat, lon } = city;
  const units: string = "metric";

  const { loading, error } = useQuery<IOpenWeatherData, IOpenWeatherVars>(
    GET_WEATHER,
    {
      variables: { lat, lon, units },
      onCompleted: ({ OpenWeather }: IOpenWeatherData) => {
        console.log(OpenWeather);
        setApiData({
          lat: OpenWeather.lat,
          lon: OpenWeather.lon,
          current: OpenWeather.current,
          hourly: OpenWeather.hourly,
          daily: OpenWeather.daily,
        });
      },
    }
  );

  return (
    <>
      <Header></Header>
      <main>
        <SearchCity setCity={setCity}></SearchCity>
        {(() => {
          if (error) return <Text>{`Error! ${error.message}`}</Text>;

          if (loading) return <Text>Loading...</Text>;

          if (city.id) {
            return (
              <>
                {apiData.current ? (
                  <CurrentWeather
                    city={city}
                    current={apiData.current}
                  ></CurrentWeather>
                ) : null}
                {apiData.hourly?.length ? (
                  <HourlyForecast hourly={apiData.hourly}></HourlyForecast>
                ) : null}
                {lat && lon ? (
                  <GoogleMaps
                    lat={lat}
                    lng={lon}
                    title={`${city.name.toUpperCase()}, ${city.country.toUpperCase()}`}
                  ></GoogleMaps>
                ) : null}
                {apiData.daily?.length ? (
                  <DailyForecast daily={apiData.daily}></DailyForecast>
                ) : null}
              </>
            );
          }
        })()}
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
