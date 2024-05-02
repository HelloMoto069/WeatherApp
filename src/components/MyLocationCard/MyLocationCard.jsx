import React, { useContext } from 'react';
import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  WeatherIcon,
  City,
  Description,
  Temperature,
  MyLocation,
  Location,
} from './MyLocationCard.styled';
import { HomePageContext } from 'pages/Homepage';

function MyLocationCard({ weather }) {
  const { setWeatherSection, setCurrentWeatherCityId } =
    useContext(HomePageContext);

  const iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

  return (
    <Container
      onClick={() => {
        setWeatherSection({});
        setCurrentWeatherCityId(0);
      }}
    >
      <Block>
        <BlockItem>
          <MyLocation>My Location</MyLocation>
          <City>{weather.name}</City>
        </BlockItem>
        <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
      </Block>
      <Block>
        <BlockWeather>
          <WeatherIcon src={iconUrl} width="32" alt="Weather icon" />
          <Description>{weather.weather[0].description}</Description>
        </BlockWeather>
        <Location>
          H:{Math.trunc(weather.coord.lat)}° L:{Math.trunc(weather.coord.lon)}°
        </Location>
      </Block>
    </Container>
  );
}

export default MyLocationCard;
