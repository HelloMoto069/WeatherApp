import styled from '@emotion/styled';

export const Container = styled.ul`
  opacity: 0;
  transform: scale(0.9);

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;

  margin: 0 auto 10px;
  padding: 5px;
  width: 85%;
  height: 80px;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(240, 243, 244, 0);
  border-radius: 12px;
  background-color: rgba(21, 67, 96, 0.5);

  &:hover {
    border-color: rgba(240, 243, 244, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;

export const Block = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BlockItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockWeather = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const City = styled.h2`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 22px;
  font-weight: 400;
`;

export const Time = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;

export const Temperature = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 32px;
  font-weight: 400;
`;

export const WeatherIcon = styled.img``;

export const Description = styled.p`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;

export const Location = styled.span`
  margin: 0;
  color: rgba(240, 243, 244, 0.9);
  font-size: 12px;
  font-weight: 400;
`;

export const CloseBtn = styled.button`
  opacity: 0;
  transform: scale(0.9);

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background-color: inherit;
  border-radius: 50%;
  border: 0;

  cursor: pointer;

  &:hover {
    stroke: rgba(240, 243, 244, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;
