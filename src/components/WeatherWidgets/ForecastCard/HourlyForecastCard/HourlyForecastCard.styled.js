import styled from '@emotion/styled';

export const Container = styled.li``;

export const Block = styled.ul`
  position: relative;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 14px;

  @media screen and (min-width: 767px) {
    gap: 5px;
  }
`;

export const BlockItem = styled.li``;

export const ImgDate = styled.img`
  @media screen and (min-width: 767px) {
    width: 42px;
  }
`;

export const BlockTemp = styled.li`
  @media screen and (min-width: 767px) {
    position: absolute;
    bottom: -20%;
    left: 25%;
  }
`;
