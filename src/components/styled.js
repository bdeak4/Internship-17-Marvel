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
  margin-bottom: 8px;
  margin-top: 12px;
`;

export const Input = styled.input`
  display: block;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  transition: background-color 200ms ease-out;
  border: 0;
  padding: 10px 12px;

  &:focus {
    outline: 2px solid orangered;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  label {
    margin-top: 0;
  }
`;
