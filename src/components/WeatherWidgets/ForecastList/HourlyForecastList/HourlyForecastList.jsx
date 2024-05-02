import React from 'react';
import { Container, ForecastList } from './HourlyForecastList.styled';

import { HourlyForecastCard } from '../../ForecastCard/HourlyForecastCard/HourlyForecastCard';

export const HourlyForecastList = ({ forecast }) => {
  return (
    <Container>
      <ForecastList>
        {forecast.list.map((element, index) => {
          if (index <= 7) {
            return <HourlyForecastCard element={element} key={index} />;
          }
          return null;
        })}
      </ForecastList>
    </Container>
  );
};
