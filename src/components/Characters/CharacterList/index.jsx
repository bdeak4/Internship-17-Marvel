import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../../services/data";
import route from "../../../constants/route";
import { CharacterListItem } from "./styled";

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
      {characters.map((character) => (
        <CharacterListItem key={character.id}>
          <Link to={`${route.characters}/${character.id}`}>
            {character.alias}
          </Link>
        </CharacterListItem>
      ))}
      <Link to={route.characterAdd}>
        <button>Add new character</button>
      </Link>
    </div>
  );
};

export default CharacterList;
