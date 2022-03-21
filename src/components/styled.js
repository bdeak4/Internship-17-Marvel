import styled from "styled-components";

export const Button = styled.button`
  display: block;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  transition: background-color 200ms ease-out;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: orangered;
  }

  a,
  span {
    text-decoration: none;
    display: block;
    padding: 10px 12px;
    color: #000;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin: 24px 0;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 12px;
`;
