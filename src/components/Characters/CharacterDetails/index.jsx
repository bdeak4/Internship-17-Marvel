import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import route from "../../../constants/route";
import Loading from "../../Loading";
import {
  deleteCharacter,
  getCharacterDetails,
  updateCharacter,
} from "../../../services/data";
import { Button, ButtonGroup } from "../../styled";
import { CharacterProperty } from "./styled";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(id).then(setCharacter);
  }, [id]);

  if (!character) {
    return <Loading />;
  }

  const handleAddToFavorites = () => {
    updateCharacter({
      ...character,
      favorite: true,
    }).then(() => navigate(route.characterFavorite));
  };

  const handleRemoveFromFavorites = () => {
    updateCharacter({
      ...character,
      favorite: false,
    }).then(() => navigate(route.characters));
  };

  const handleDeleteCharacter = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      deleteCharacter(character).then(() => navigate(route.characters));
    }
  };

  return (
    <div>
      <h1>{character.alias}</h1>

      <CharacterProperty color="gray">ID: {character.id}</CharacterProperty>
      <CharacterProperty>Name: {character.name}</CharacterProperty>
      <CharacterProperty>Age: {character.age}</CharacterProperty>
      <CharacterProperty>
        Favorite: {character.favorite ? "yes" : "no"}
      </CharacterProperty>

      <ButtonGroup>
        <Button>
          <Link to={route.characters}>&larr; Back to list of characters</Link>
        </Button>

        {character.favorite ? (
          <Button onClick={handleRemoveFromFavorites}>
            <span>Remove from favorites</span>
          </Button>
        ) : (
          <Button onClick={handleAddToFavorites}>
            <span>Add to favorites</span>
          </Button>
        )}

        <Button>
          <Link to={`${route.characterEdit}/${character.id}`}>
            Edit character
          </Link>
        </Button>
        <Button onClick={handleDeleteCharacter}>
          <span>Delete character</span>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CharacterDetails;
