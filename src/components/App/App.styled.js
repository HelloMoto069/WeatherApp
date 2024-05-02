import styled from '@emotion/styled';

export const Container = styled.div`
  opacity: 0;
  transform: scale(0.9);

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  /* !!!!!! No work */
  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
