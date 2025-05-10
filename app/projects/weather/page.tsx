"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Location, Current, Forecast } from "@/app/types/weatherTypes";

type Weather = {
  location: Location;
  current: Current;
  forecast: Forecast;
};

const Weather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [tUnit, setTUnit] = useState<"c" | "f">("c");
  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=7e9ee0e3ef3740aebaa112047252704&q=auto:ip&day=5"
    )
      .then((r) => r.json())
      .then((data) => setWeather(data));
  }, []);
  if (!weather) return <Loading />;

  const switchTUnit = () => {
    if (tUnit === "c") {
      setTUnit("f");
    } else {
      setTUnit("c");
    }
  };

  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark">
      {weather.current[`temp_${tUnit}`]}
      {weather.location.name}
      <button onClick={switchTUnit}>Change degree</button>
    </div>
  );
};

export default Weather;
