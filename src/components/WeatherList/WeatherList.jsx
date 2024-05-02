import React, { useContext } from 'react';
import { Container } from './Weather.styled';
import WeatherCard from '../WeatherCard/WeatherCard';
import { HomePageContext } from 'pages/Homepage';

export const WeatherList = ({ onCloseBtn, onDeleteCard }) => {
  const { weatherCities, handlerSelectWeatherCity } = useContext(HomePageContext);
  
  return (
    <Container>
      {weatherCities.map(city => (
        <li key={city.id} onClick={() => handlerSelectWeatherCity(city.id)}>
          <WeatherCard
            weatherCity={city}
            onCloseBtn={onCloseBtn}
            onDeleteCard={onDeleteCard}
          />
        </li>
      ))}
    </Container>
  );
};
