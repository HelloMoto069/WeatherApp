import React from 'react';

import { Text } from '../WeatherWidgets.styled';

export const AverageTemp = ({ forecast }) => {
  const arrTemp = [];

  forecast.list.map((element, index) => {
    if (index <= 7) {
      arrTemp.push(element.main.temp);
    }
  });

  const averageTemp = arrTemp.reduce((prevTemp, temp) => {
    return prevTemp + temp;
  }, 0);

  return (
    <>
      <Text>{Math.round(averageTemp / arrTemp.length)}°C</Text>
    </>
  );
};
