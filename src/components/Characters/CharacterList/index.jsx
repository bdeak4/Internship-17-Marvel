import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../../services/data";
import route from "../../../constants/route";
import { CharacterListItem } from "./styled";
import { Button, ButtonGroup, Input } from "../../styled";

const CharacterList = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  if (!characters) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Marvel</h1>

      {characters.map((character) => (
        <CharacterListItem key={character.id}>
          <Link to={`${route.characterDetails}/${character.id}`}>
            {character.alias}
          </Link>
        </CharacterListItem>
      ))}

      <ButtonGroup>
        <Button>
          <Link to={route.characterAdd}>Add new character</Link>
        </Button>
        <Button>
          <Link to={route.characterAdd}>Favorite characters</Link>
        </Button>
        <Input type="text" placeholder="Filter list" />
      </ButtonGroup>
    </div>
  );
};

export default CharacterList;
