import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: auto;
  scrollbar-width: none;

  height: 100%;

  padding-top: 8px;
`;

export const ForecastList = styled.ul`
  list-style: none;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 1279px) {
    flex-direction: row;
  }
`;
