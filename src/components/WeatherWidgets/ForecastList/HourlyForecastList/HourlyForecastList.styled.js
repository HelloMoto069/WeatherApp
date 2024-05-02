import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: auto;
  scrollbar-width: none;
`;

export const ForecastList = styled.ul`
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