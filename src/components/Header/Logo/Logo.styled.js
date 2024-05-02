import styled from '@emotion/styled';

export const LogoWrapper = styled.a`
  grid-area: logo;
  display: flex;
  align-items: baseline;

  text-decoration: none;
`;

export const LogoImg = styled.img`
  margin-right: 5px;

  @media screen and (min-width: 767px) {
    width: 28px;
    height: 28px;
  }
`;

export const TitleWeather = styled.p`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;

  color: #a3d4ff;

  margin: 0;

@media screen and (min-width: 767px) { 
  font-size: 30px;
}
`;

export const TitleApp = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.15px;
  
  color: #fff300;

  @media screen and (min-width: 768px) { 
  font-size: 30px;
}
`;
