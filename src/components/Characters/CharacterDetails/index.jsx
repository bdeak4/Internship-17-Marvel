import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import route from "../../../constants/route";
import Loading from "../../../Loading";
import { getCharacterDetails } from "../../../services/data";
import { Button, ButtonGroup } from "../../styled";
import { CharacterProperty } from "./styled";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(id).then(setCharacter);
  }, [id]);

  if (!character) {
    return <Loading />;
  }

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
        <Button>
          <Link to={route.characters}>Add to favorites</Link>
        </Button>
        <Button>
          <Link to={`${route.characterEdit}/${character.id}`}>
            Edit character
          </Link>
        </Button>
        <Button>
          <Link to={route.characters}>Delete character</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CharacterDetails;
