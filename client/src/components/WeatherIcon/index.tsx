import * as React from "react";
import ClearSkyDayIcon from "./assets/sun-line.svg";
import FewCloudsDayIcon from "./assets/sun-cloudy-line.svg";
import ScatteredCloudsDayIcon from "./assets/cloudy-2-line.svg";
import BrokenCloudsDayIcon from "./assets/cloudy-2-line.svg";
import ShowerRainDayIcon from "./assets/showers-line.svg";
import RainDayIcon from "./assets/rainy-line.svg";
import ThunderstormDayIcon from "./assets/thunderstorms-line.svg";
import SnowDayIcon from "./assets/snowy-line.svg";
import MistDayIcon from "./assets/mist-line.svg";
import ClearSkyNightIcon from "./assets/moon-clear-line.svg";
import FewCloudsNightIcon from "./assets/moon-cloudy-line.svg";
import ScatteredCloudsNightIcon from "./assets/cloudy-2-line.svg";
import BrokenCloudsNightIcon from "./assets/cloudy-2-line.svg";
import ShowerRainNightIcon from "./assets/showers-line.svg";
import RainNightIcon from "./assets/rainy-line.svg";
import ThunderstormNightIcon from "./assets/thunderstorms-line.svg";
import SnowNightIcon from "./assets/snowy-line.svg";
import MistNightIcon from "./assets/mist-line.svg";

interface ICustomIcons {
  [key: string]: JSX.Element;
}

interface IOpenWeatherIcon {
  icon: string;
  [key: string]: any;
}

export default function WeatherIcon({ icon, ...rest }: IOpenWeatherIcon) {
  const customIcons: ICustomIcons = {
    "01d": <ClearSkyDayIcon {...rest}></ClearSkyDayIcon>,
    "02d": <FewCloudsDayIcon {...rest}></FewCloudsDayIcon>,
    "03d": <ScatteredCloudsDayIcon {...rest}></ScatteredCloudsDayIcon>,
    "04d": <BrokenCloudsDayIcon {...rest}></BrokenCloudsDayIcon>,
    "09d": <ShowerRainDayIcon {...rest}></ShowerRainDayIcon>,
    "10d": <RainDayIcon {...rest}></RainDayIcon>,
    "11d": <ThunderstormDayIcon {...rest}></ThunderstormDayIcon>,
    "13d": <SnowDayIcon {...rest}></SnowDayIcon>,
    "50d": <MistDayIcon {...rest}></MistDayIcon>,
    "01n": <ClearSkyNightIcon {...rest}></ClearSkyNightIcon>,
    "02n": <FewCloudsNightIcon {...rest}></FewCloudsNightIcon>,
    "03n": <ScatteredCloudsNightIcon {...rest}></ScatteredCloudsNightIcon>,
    "04n": <BrokenCloudsNightIcon {...rest}></BrokenCloudsNightIcon>,
    "09n": <ShowerRainNightIcon {...rest}></ShowerRainNightIcon>,
    "10n": <RainNightIcon {...rest}></RainNightIcon>,
    "11n": <ThunderstormNightIcon {...rest}></ThunderstormNightIcon>,
    "13n": <SnowNightIcon {...rest}></SnowNightIcon>,
    "50n": <MistNightIcon {...rest}></MistNightIcon>,
  };

  return customIcons[icon];
}
