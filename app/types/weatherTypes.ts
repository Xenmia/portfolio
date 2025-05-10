export type currentWeather = {
  /** Information about the location */
  location: {
    /** City or town name */
    name: string;
    /** Region or state */
    region: string;
    /** Country name */
    country: string;
    /** Latitude */
    lat: number;
    /** Longitude */
    lon: number;
    /** Timezone ID */
    tz_id: string;
    /** Local time at the location */
    localtime: string;
  };
  /** Current weather */
  current: {
    /** Timestamp of the last update */
    last_updated: string;
    /** Temperature in Celsius */
    temp_c: number;
    /** Temperature in Fahrenheit */
    temp_f: number;
    /** 1 if day, 0 if night */
    is_day: number;
    condition: {
      /** Weather description */
      text: string;
      /** URL to weather icon */
      icon: string;
      /** Condition code */
      code: number;
    };
    /** Wind speed in miles per hour */
    wind_mph: number;
    /** Wind speed in kilometers per hour */
    wind_kph: number;
    /** Wind direction in degrees */
    wind_degree: number;
    /** Wind direction as a compass string (e.g., "ENE") */
    wind_dir: string;
    /** Atmospheric pressure in millibars */
    pressure_mb: number;
    /** Atmospheric pressure in inches */
    pressure_in: number;
    /** Precipitation in millimeters */
    precip_mm: number;
    /** Precipitation in inches */
    precip_in: number;
    /** Humidity percentage */
    humidity: number;
    /** Cloud cover percentage */
    cloud: number;
    /** Perceived temperature in Celsius */
    feelslike_c: number;
    /** Perceived temperature in Fahrenheit */
    feelslike_f: number;
    /** Wind chill in Celsius */
    windchill_c: number;
    /** Wind chill in Fahrenheit */
    windchill_f: number;
    /** Heat index in Celsius */
    heatindex_c: number;
    /** Heat index in Fahrenheit */
    heatindex_f: number;
    /** Dew point in Celsius */
    dewpoint_c: number;
    /** Dew point in Fahrenheit */
    dewpoint_f: number;
    /** Visibility in kilometers */
    vis_km: number;
    /** Visibility in miles */
    vis_miles: number;
    /** UV index */
    uv: number;
    /** Wind gust speed in miles per hour */
    gust_mph: number;
    /** Wind gust speed in kilometers per hour */
    gust_kph: number;
  };
}

export type Condition = {
  /** Weather condition text */
  text: string;
  /** URL for weather condition icon */
  icon: string;
  /** Weather condition code */
  code: number;
}

export type Location = {
  /** City name */
  name: string;
  /** Region or state */
  region: string;
  /** Country */
  country: string;
  /** Latitude */
  lat: number;
  /** Longitude */
  lon: number;
  /** Timezone ID */
  tz_id: string;
  /** Local time as Unix timestamp */
  localtime_epoch: number;
  /** Local time */
  localtime: string;
}

export type Current = {
  /** Last update time as Unix timestamp */
  last_updated_epoch: number;
  /** Last update time */
  last_updated: string;
  /** Temperature in Celsius */
  temp_c: number;
  /** Temperature in Fahrenheit */
  temp_f: number;
  /** 1 = Day, 0 = Night */
  is_day: number;
  /** Weather condition */
  condition: Condition;
  /** Wind speed in miles per hour */
  wind_mph: number;
  /** Wind speed in kilometers per hour */
  wind_kph: number;
  /** Wind direction in degrees */
  wind_degree: number;
  /** Wind direction as 16-point compass */
  wind_dir: string;
  /** Pressure in millibars */
  pressure_mb: number;
  /** Pressure in inches */
  pressure_in: number;
  /** Precipitation in millimeters */
  precip_mm: number;
  /** Precipitation in inches */
  precip_in: number;
  /** Humidity percentage */
  humidity: number;
  /** Cloud cover percentage */
  cloud: number;
  /** Feels like temperature in Celsius */
  feelslike_c: number;
  /** Feels like temperature in Fahrenheit */
  feelslike_f: number;
  /** Wind chill temperature in Celsius */
  windchill_c: number;
  /** Wind chill temperature in Fahrenheit */
  windchill_f: number;
  /** Heat index in Celsius */
  heatindex_c: number;
  /** Heat index in Fahrenheit */
  heatindex_f: number;
  /** Dew point in Celsius */
  dewpoint_c: number;
  /** Dew point in Fahrenheit */
  dewpoint_f: number;
  /** Visibility in kilometers */
  vis_km: number;
  /** Visibility in miles */
  vis_miles: number;
  /** UV Index */
  uv: number;
  /** Wind gust in miles per hour */
  gust_mph: number;
  /** Wind gust in kilometers per hour */
  gust_kph: number;
}

export type Day = {
  /** Maximum temperature in Celsius */
  maxtemp_c: number;
  /** Maximum temperature in Fahrenheit */
  maxtemp_f: number;
  /** Minimum temperature in Celsius */
  mintemp_c: number;
  /** Minimum temperature in Fahrenheit */
  mintemp_f: number;
  /** Average temperature in Celsius */
  avgtemp_c: number;
  /** Average temperature in Fahrenheit */
  avgtemp_f: number;
  /** Maximum wind speed in miles per hour */
  maxwind_mph: number;
  /** Maximum wind speed in kilometers per hour */
  maxwind_kph: number;
  /** Total precipitation in millimeters */
  totalprecip_mm: number;
  /** Total precipitation in inches */
  totalprecip_in: number;
  /** Total snow in centimeters */
  totalsnow_cm: number;
  /** Average visibility in kilometers */
  avgvis_km: number;
  /** Average visibility in miles */
  avgvis_miles: number;
  /** Average humidity percentage */
  avghumidity: number;
  /** Will it rain today? (1 = Yes, 0 = No) */
  daily_will_it_rain: number;
  /** Chance of rain percentage */
  daily_chance_of_rain: number;
  /** Will it snow today? (1 = Yes, 0 = No) */
  daily_will_it_snow: number;
  /** Chance of snow percentage */
  daily_chance_of_snow: number;
  /** Weather condition */
  condition: Condition;
  /** UV Index */
  uv: number;
}

export type Astro = {
  /** Sunrise time */
  sunrise: string;
  /** Sunset time */
  sunset: string;
  /** Moonrise time */
  moonrise: string;
  /** Moonset time */
  moonset: string;
  /** Moon phase */
  moon_phase: string;
  /** Moon illumination percentage */
  moon_illumination: number;
  /** Is the moon up? (1 = Yes, 0 = No) */
  is_moon_up: number;
  /** Is the sun up? (1 = Yes, 0 = No) */
  is_sun_up: number;
}

export type Hour = {
  /** Time as Unix timestamp */
  time_epoch: number;
  /** Time */
  time: string;
  /** Temperature in Celsius */
  temp_c: number;
  /** Temperature in Fahrenheit */
  temp_f: number;
  /** 1 = Day, 0 = Night */
  is_day: number;
  /** Weather condition */
  condition: Condition;
  /** Wind speed in miles per hour */
  wind_mph: number;
  /** Wind speed in kilometers per hour */
  wind_kph: number;
  /** Wind direction in degrees */
  wind_degree: number;
  /** Wind direction as 16-point compass */
  wind_dir: string;
  /** Pressure in millibars */
  pressure_mb: number;
  /** Pressure in inches */
  pressure_in: number;
  /** Precipitation in millimeters */
  precip_mm: number;
  /** Precipitation in inches */
  precip_in: number;
  /** Snow in centimeters */
  snow_cm: number;
  /** Humidity percentage */
  humidity: number;
  /** Cloud cover percentage */
  cloud: number;
  /** Feels like temperature in Celsius */
  feelslike_c: number;
  /** Feels like temperature in Fahrenheit */
  feelslike_f: number;
  /** Wind chill temperature in Celsius */
  windchill_c: number;
  /** Wind chill temperature in Fahrenheit */
  windchill_f: number;
  /** Heat index in Celsius */
  heatindex_c: number;
  /** Heat index in Fahrenheit */
  heatindex_f: number;
  /** Dew point in Celsius */
  dewpoint_c: number;
  /** Dew point in Fahrenheit */
  dewpoint_f: number;
  /** Will it rain? (1 = Yes, 0 = No) */
  will_it_rain: number;
  /** Chance of rain percentage */
  chance_of_rain: number;
  /** Will it snow? (1 = Yes, 0 = No) */
  will_it_snow: number;
  /** Chance of snow percentage */
  chance_of_snow: number;
  /** Visibility in kilometers */
  vis_km: number;
  /** Visibility in miles */
  vis_miles: number;
  /** Wind gust in miles per hour */
  gust_mph: number;
  /** Wind gust in kilometers per hour */
  gust_kph: number;
  /** UV Index */
  uv: number;
}

export type ForecastDay = {
  /** Forecast date */
  date: string;
  /** Date as Unix timestamp */
  date_epoch: number;
  /** Daily forecast */
  day: Day;
  /** Astronomical data */
  astro: Astro;
  /** Hourly forecast */
  hour: Hour[];
}

export type Forecast = {
  /** Array of forecast days */
  forecastday: ForecastDay[];
}

export type WeatherResponse = {
  /** Location data */
  location: Location;
  /** Current weather */
  current: Current;
  /** Weather forecast */
  forecast: Forecast;
}