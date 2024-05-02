import React from 'react';
import { LogoWrapper, LogoImg, TitleWeather, TitleApp } from './Logo.styled';

import Img from "images/logo-image.png"

export const Logo = () => {
  return (
    <LogoWrapper href='/weather-app/public/index.html'>
      <LogoImg src={Img} width="24" height="24" alt="Logo" />
      <TitleWeather>Weather</TitleWeather>
      <TitleApp>App</TitleApp>
    </LogoWrapper>
  );
};
