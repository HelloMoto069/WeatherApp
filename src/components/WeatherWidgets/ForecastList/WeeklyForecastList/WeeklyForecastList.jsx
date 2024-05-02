import React from 'react';
import { Container, ForecastList } from './WeeklyForecastList.styled';

import { WeeklyForecastCard } from '../../ForecastCard/WeeklyForecastCard/WeeklyForecastCard';

export const WeeklyForecastList = ({ forecast }) => {
  const groupedArray = [];
  const dateMap = new Map();

  forecast.list.forEach(obj => {
    const { dt } = obj;
    const date = new Date(dt * 1000).getUTCDate();
    // console.log('date:', date);

    if (!dateMap.has(date)) {
      dateMap.set(date, [obj]);
    } else {
      dateMap.get(date).push(obj);
    }
  });

  dateMap.forEach(dateArray => {
    groupedArray.push(dateArray);
  });

  return (
    <Container>
      <ForecastList>
        {groupedArray.map((element, index) => (
          <WeeklyForecastCard weatherDay={element} key={index} />
        ))}
      </ForecastList>
    </Container>
  );
};
