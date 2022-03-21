import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterDetails, updateCharacter } from "../../../services/data";
import route from "../../../constants/route";
import CharacterForm from "../CharacterForm";

const CharacterEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(id).then(setCharacter);
  }, [id]);

  if (!character) {
    return <div>loading...</div>;
  }

  const handleCharacterSubmit = (character) => {
    updateCharacter(character).then(() => navigate(route.characters));
  };

  return (
    <CharacterForm character={character} handleSubmit={handleCharacterSubmit} />
  );
};

export default CharacterEdit;
