import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../../services/data";
import route from "../../../constants/route";
import { CharacterListItem } from "./styled";
import { Button, ButtonGroup, Input } from "../../styled";
import Loading from "../../Loading";

const CharacterList = () => {
  const [characters, setCharacters] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  if (!characters) {
    return <Loading />;
  }

  const filteredCharacters = characters.filter(({ alias }) => {
    const aliasNormalized = alias.toLowerCase().trim();
    const filterNormalized = filter.toLowerCase().trim();
    return aliasNormalized.startsWith(filterNormalized);
  });

  return (
    <div>
      <h1>Marvel</h1>

      {filteredCharacters.map((character) => (
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
          <Link to={route.characterFavorite}>Favorite characters</Link>
        </Button>
        <Input
          type="text"
          placeholder="Filter list"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </ButtonGroup>
    </div>
  );
};

export default CharacterList;
