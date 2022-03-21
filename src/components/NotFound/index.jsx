import { Link } from "react-router-dom";
import route from "../../constants/route";
import { Button } from "../styled";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>

      <Button>
        <Link to={route.characters}>&larr; Back to list of characters</Link>
      </Button>
    </div>
  );
};

export default NotFound;
