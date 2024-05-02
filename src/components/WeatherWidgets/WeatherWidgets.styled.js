import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  gap: 10px;

  grid-template-columns: minmax(100px, 1fr);

  grid-template-areas:
    'hourlyForecast hourlyForecast hourlyForecast'
    'weeklyForecast precipitationMap precipitationMap'
    'weeklyForecast precipitationMap precipitationMap'
    'weeklyForecast wind sunrise'
    'weeklyForecast visibility humidity';

  list-style: none;

  @media screen and (min-width: 767px) {
    justify-content: space-between;

    grid-template-areas:
      'hourlyForecast hourlyForecast hourlyForecast'
      'weeklyForecast precipitationMap precipitationMap'
      'weeklyForecast precipitationMap precipitationMap'
      'weeklyForecast sunrise wind'
      'weeklyForecast visibility humidity';
  }

  @media screen and (min-width: 1279px) {
    grid-template-areas:
      'hourlyForecast hourlyForecast  hourlyForecast hourlyForecast'
      'weeklyForecast weeklyForecast  weeklyForecast weeklyForecast'
      'precipitationMap precipitation sunrise wind'
      'precipitationMap pressure visibility humidity';

    gap: 20px;
  }
`;

export const HourlyForecast = styled.li`
  grid-area: hourlyForecast;
  /* overflow: auto; */

  box-sizing: border-box;
  padding: 8px;

  width: 100%;
  height: 115px;

  @media screen and (min-width: 767px) {
    width: 100%;
    height: 120px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
`;

export const BlockHeader = styled.h3`
  width: 100%;
  text-align: start;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #6382af;
  padding-bottom: 5px;

  border-bottom: 1px solid transparent;
  border-color: #6382af;
`;

export const BlockHourlyWater = styled.ul`
  margin: 10px auto;
  width: max-content;
  list-style: none;
  display: flex;
  gap: 15px;

  @media screen and (min-width: 767px) {
    width: auto;
    justify-content: space-around;
  }
`;

export const WeeklyForecast = styled.li`
  grid-area: weeklyForecast;

  box-sizing: border-box;
  padding: 8px;

  width: 100%;

  @media screen and (min-width: 767px) {
    width: 180px;
  }

  @media screen and (min-width: 1279px) {
    width: 100%;
    height: 120px;
  }

  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */
  /* margin-bottom: 25px; */

  backdrop-filter: blur(5px);
`;

export const BlockWeeklyWater = styled.div``;

export const PrecipitationMap = styled.li`
  grid-area: precipitationMap;

  box-sizing: border-box;
  padding: 8px;

  width: 210px;
  height: 200px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.5); */

  backdrop-filter: blur(5px);

  @media screen and (min-width: 767px) {
    width: 270px;
    height: 270px;
  }

  @media screen and (min-width: 1279px) {
    width: 280px;
    height: 280px;
  }
`;

export const BlockMap = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 90%;
`;

export const Sunrise = styled.li`
  grid-area: sunrise;

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;
  }

  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  color: #e7ecee;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Block = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas:
    'pictureSunrise textSunrise'
    'pictureSunset textSunset';

  width: 100%;
  height: 100%;
`;

export const PictureSunrise = styled.picture`
  grid-area: pictureSunrise;
`;

export const PictureSunset = styled.picture`
  grid-area: pictureSunset;
`;

export const BlockSunrise = styled.div`
  grid-area: textSunrise;
`;

export const TextSunrise = styled.p`  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: #6382af;
`;

export const BlockSunset = styled.div`
  grid-area: textSunset;
`;

export const TextSunset = styled.span`
  top: 8px;
  right: 8px;
  font-size: 12px;
  color: #6382af;
`;

export const Time = styled.p`
  font-size: 20px;`;

export const Wind = styled.li`
  position: relative;
  grid-area: wind;

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;

    gap: 16px;
  }

  backdrop-filter: blur(5px);

  color: #e7ecee;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Visibility = styled.li`
  position: relative;
  grid-area: visibility;

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;

    gap: 16px;
  }

  backdrop-filter: blur(5px);

  color: #e7ecee;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const Humidity = styled.li`
  position: relative;
  grid-area: humidity;

  box-sizing: border-box;
  padding: 8px;

  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  backdrop-filter: blur(5px);

  color: #e7ecee;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media screen and (min-width: 767px) {
    width: 130px;
    height: 130px;

    font-size: 20px;
    gap: 16px;
  }

  @media screen and (min-width: 1279px) {
    font-size: 24px;
  }
`;

export const Precipitation = styled.li`
  display: none;
  grid-area: precipitation;

  box-sizing: border-box;
  padding: 8px;

  @media screen and (min-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    width: 130px;
    height: 130px;

    border-radius: 12px;
    background-color: rgba(21, 67, 96, 0.5);
    backdrop-filter: blur(5px);
  }
`;

export const Pressure = styled.li`
  position: relative;
  display: none;
  grid-area: pressure;

  box-sizing: border-box;
  padding: 8px;

  @media screen and (min-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    width: 130px;
    height: 130px;

    border-radius: 12px;
    background-color: rgba(21, 67, 96, 0.5);
    backdrop-filter: blur(5px);
  }
`;

export const Text = styled.p`
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 14px;

  @media screen and (min-width: 767px) {
    font-size: 20px;
    bottom: 8px;
  }
`;
