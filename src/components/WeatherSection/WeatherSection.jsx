import React, { useContext } from 'react';
import LocationWeather from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { Section } from './WeatherSection.styled';
import { HomePageContext } from 'pages/Homepage';

export const WeatherSection = () => {
  const { locationForecast, forecastSection, locationWeather, weatherSection } =
    useContext(HomePageContext);

  return (
    <Section>
      {Object.keys(weatherSection).length ? (
        <LocationWeather weather={weatherSection} />
      ) : (
        <LocationWeather weather={locationWeather} />
      )}
      {Object.keys(weatherSection).length ? (
        <WeatherWidgets weather={weatherSection} forecast={forecastSection} />
      ) : (
        <WeatherWidgets weather={locationWeather} forecast={locationForecast} />
      )}
    </Section>
  );
};
