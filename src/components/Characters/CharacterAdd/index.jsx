import { useNavigate } from "react-router-dom";
import { addCharacter } from "../../../services/data";
import route from "../../../constants/route";
import CharacterForm from "../CharacterForm";

const CharacterAdd = () => {
  const navigate = useNavigate();

  const handleCharacterSubmit = (character) => {
    addCharacter(character).then(() => navigate(route.characters));
  };

  return <CharacterForm handleSubmit={handleCharacterSubmit} />;
};

export default CharacterAdd;
