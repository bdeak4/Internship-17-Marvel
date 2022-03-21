import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import route from "../../../constants/route";
import { Button } from "../../styled";
import { getCharacters, updateCharacter } from "../../../services/data";
import Loading from "../../../Loading";
import { CharacterListItem } from "../CharacterList/styled";
import { FavoriteCharacterListItem } from "./styled";

const CharacterFavorite = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters().then((characters) =>
      setCharacters(characters.filter((c) => c.favorite))
    );
  }, []);

  if (!characters) {
    return <Loading />;
  }

  const handleRemoveFromFavorites = (character) => {
    updateCharacter({
      ...character,
      favorite: false,
    }).then(() =>
      setCharacters((prev) => prev.filter((c) => c.id !== character.id))
    );
  };

  return (
    <div>
      <h1>Favorite characters</h1>

      {characters.length > 0 || (
        <p>Add characters to favorites to see them here</p>
      )}

      {characters.map((character) => (
        <FavoriteCharacterListItem key={character.id}>
          <CharacterListItem>
            <Link to={`${route.characterDetails}/${character.id}`}>
              {character.alias}
            </Link>
          </CharacterListItem>
          <Button onClick={() => handleRemoveFromFavorites(character)}>
            <span>Remove from favorites</span>
          </Button>
        </FavoriteCharacterListItem>
      ))}

      <Button>
        <Link to={route.characters}>&larr; Back to list of characters</Link>
      </Button>
    </div>
  );
};

export default CharacterFavorite;
