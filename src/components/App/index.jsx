import React from "react";
import { BrowserRouter } from "react-router-dom";
import Characters from "../Characters";

const App = () => {
  return (
    <BrowserRouter>
      <Characters />
    </BrowserRouter>
  );
};

export default App;
