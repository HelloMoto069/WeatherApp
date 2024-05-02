import styled from '@emotion/styled';

export const Section = styled.footer`
  width: 90%;
  max-width: 460px;

  display: grid;
  grid-template-areas:
    'logo arrowUp arrowUp '
    'linkList linkList linkList'
    'copyright copyright copyright';
  align-items: start;
  justify-content: space-between;
  gap: 10px;

  margin: 0 auto;

  padding: 10px 20px;

  border-top: 2px solid transparent;
  border-image: radial-gradient(circle, #a3d4ff, transparent) 1 0%;

  @media screen and (min-width: 767px) {
    max-width: none;
    width: 708px;

    backdrop-filter: none;

    grid-template-areas:
      'logo linkList arrowUp '
      'logo copyright arrowUp';

    gap: 10px;

    backdrop-filter: blur(10px);
  }

  @media screen and (min-width: 1279px) {
    width: 1040px;
  }
`;

export const ArrowUpBtn = styled.a`
  grid-area: arrowUp;

  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background: #a3d4ff;
  border: 0;

  stroke: #012c77;

  &:hover {
    stroke: #a3d4ff;
    background: #2977bd;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkList = styled.ul`
  grid-area: linkList;

  list-style: none;
  display: flex;
  gap: 10px;

  justify-content: center;
  align-items: center;
`;

export const Item = styled.li``;

export const GitLink = styled.a``;

export const LinkedinLink = styled.a``;

export const TelegramLink = styled.a``;

export const Copyright = styled.span`
  grid-area: copyright;
  text-align: center;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.15;

  color: #f0f3f4;

  margin: 0;
`;
