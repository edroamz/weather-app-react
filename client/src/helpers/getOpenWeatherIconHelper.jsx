import React from "react";
import ClearSkyDayIcon from "@icons/sun-line.svg";
import FewCloudsDayIcon from "@icons/sun-cloudy-line.svg";
import ScatteredCloudsDayIcon from "@icons/cloudy-2-line.svg";
import BrokenCloudsDayIcon from "@icons/cloudy-2-line.svg";
import ShowerRainDayIcon from "@icons/showers-line.svg";
import RainDayIcon from "@icons/rainy-line.svg";
import ThunderstormDayIcon from "@icons/thunderstorms-line.svg";
import SnowDayIcon from "@icons/snowy-line.svg";
import MistDayIcon from "@icons/mist-line.svg";
import ClearSkyNightIcon from "@icons/moon-clear-line.svg";
import FewCloudsNightIcon from "@icons/moon-cloudy-line.svg";
import ScatteredCloudsNightIcon from "@icons/cloudy-2-line.svg";
import BrokenCloudsNightIcon from "@icons/cloudy-2-line.svg";
import ShowerRainNightIcon from "@icons/showers-line.svg";
import RainNightIcon from "@icons/rainy-line.svg";
import ThunderstormNightIcon from "@icons/thunderstorms-line.svg";
import SnowNightIcon from "@icons/snowy-line.svg";
import MistNightIcon from "@icons/mist-line.svg";

export default function WeatherIcon({ iconCode, ...rest }) {
  const customIcons = {
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

  return customIcons[iconCode];
}
