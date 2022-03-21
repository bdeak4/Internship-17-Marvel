import { useState } from "react";
import { Link } from "react-router-dom";
import route from "../../../constants/route";
import { Button, ButtonGroup, Input, Label } from "./../../styled";

const CharacterForm = ({ character, handleSubmit }) => {
  const [name, setName] = useState(character?.name || "");
  const [alias, setAlias] = useState(character?.alias || "");
  const [favorite, setFavorite] = useState(character?.favorite || false);
  const [age, setAge] = useState(character?.age);

  const onSubmit = (event) => {
    event.preventDefault();

    const submitCharacter = {
      name,
      alias,
      favorite,
      age,
    };
    if (character) {
      submitCharacter.id = character.id;
    }

    handleSubmit(submitCharacter);
  };

  return (
    <form onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Label>Alias</Label>
      <Input
        type="text"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        required
      />

      <Label>Favorite</Label>
      <Input
        type="checkbox"
        value={favorite}
        onChange={(e) => setFavorite(e.target.checked)}
      />

      <Label>Age</Label>
      <Input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        min="1"
        required
      />

      <ButtonGroup>
        <Button>
          <Link to={route.characters}>&larr; Back to list of characters</Link>
        </Button>
        <Button type="submit">
          <span>Submit</span>
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default CharacterForm;
