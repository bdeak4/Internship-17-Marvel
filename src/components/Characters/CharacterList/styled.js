import styled from "styled-components";

export const CharacterListItem = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: orangered;

    a {
      color: #fff;
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  a {
    color: #000;
    padding: 16px;
    display: block;
    transition: color 200ms ease-out;
  }
`;
