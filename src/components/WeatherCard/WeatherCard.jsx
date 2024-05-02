import React, { useEffect, useState } from 'react';
import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  City,
  Time,
  WeatherIcon,
  Description,
  Temperature,
  Location,
  CloseBtn,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showComponent, setShowComponent] = useState(false);

  const iconUrl = `http://openweathermap.org/img/w/${weatherCity.weather[0].icon}.png`;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const timeWithOffset = new Date(utcTime + weatherCity.timezone * 1000);

      setCurrentTime(timeWithOffset);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setShowComponent(!showComponent);
  }, []);

  return (
    <Container className={showComponent ? 'active' : 'exit-active'}>
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Time>
            {`${currentTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}`}
          </Time>
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <BlockWeather>
          <WeatherIcon src={iconUrl} width="32" alt="Weather icon" />
          <Description>{weatherCity.weather[0].description}</Description>
        </BlockWeather>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)}° L:
          {Math.trunc(weatherCity.coord.lon)}°
        </Location>
      </Block>
      {onCloseBtn && (
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            onDeleteCard(weatherCity.id);
          }}
          className={onCloseBtn ? 'active' : ''}
        >
          <CloseCardImg />
        </CloseBtn>
      )}
    </Container>
  );
}

export default WeatherCard;
