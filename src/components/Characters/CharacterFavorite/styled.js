import styled from "styled-components";

export const FavoriteCharacterListItem = styled.div`
  display: flex;
  margin-bottom: 16px;

  div {
    margin-right: 12px;
    flex-grow: 1;
  }

  & > *:not(:last-child) {
    margin-bottom: 0;
  }
`;
