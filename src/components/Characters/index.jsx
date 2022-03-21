import { Navigate, Route, Routes } from "react-router-dom";
import route from "../../constants/route";
import NotFound from "../NotFound";
import CharacterAdd from "./CharacterAdd";
import CharacterDetails from "./CharacterDetails";
import CharacterEdit from "./CharacterEdit";
import CharacterList from "./CharacterList";

const Characters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={route.characters} />} />
      <Route path={route.characters} element={<CharacterList />} />
      <Route
        path={`${route.characterDetails}/:id`}
        element={<CharacterDetails />}
      />
      <Route path={`${route.characterEdit}/:id`} element={<CharacterEdit />} />
      <Route path={route.characterAdd} element={<CharacterAdd />} />
      <Route path={route.notFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={route.notFound} />} />
    </Routes>
  );
};

export default Characters;
