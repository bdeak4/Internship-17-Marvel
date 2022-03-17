import { Navigate, Route, Routes } from "react-router-dom";
import route from "../../constants/route";
import NotFound from "../NotFound";
import CharacterList from "./CharacterList";

const Characters = () => {
  return (
    <Routes>
      <Route path={route.characters} element={<CharacterList />} />
      <Route path={route.notFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={route.notFound} />} />
    </Routes>
  );
};

export default Characters;
