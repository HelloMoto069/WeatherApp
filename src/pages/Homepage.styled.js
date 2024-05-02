import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin: 0 auto;
  
  @media screen and (min-width: 767px) {
    width: 708px;

    flex-direction: row;
    align-items: stretch;
    

    gap: 10px;
  }

  @media screen and (min-width: 1279px) {
    width: 1040px;

    margin: 20px auto;

    gap: 30px;
  }
`;

