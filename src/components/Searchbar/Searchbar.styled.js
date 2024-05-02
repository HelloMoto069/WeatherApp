import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 10px;
`;

export const SearchBarForm = styled.form`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 2px;
  border-radius: 8px;
  border-color: rgba(21, 67, 96, 0);

  background-color: #c9dfed;

  &:hover {
    border-color: rgba(21, 67, 96, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;

export const Input = styled.input`
  background-color: inherit;
  border: none;
  outline: none;

  height: 20px;
  width: 75%;

  padding: 5px;
  font-size: 16px;
  color: #888;

  margin-left: 10px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: inherit;
  border: none;
  padding: 0;
  margin-left: 10px;

  cursor: pointer;

    fill: #888;

  &:hover {
    fill: #2977bd;

    transition: all 0.2s ease-in-out;
  }
`;