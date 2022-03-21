import { useState, useEffect } from "react";
import { Loader } from "./styled";

const Loading = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prev) => prev + ".");
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return <Loader>Loading{dots}</Loader>;
};

export default Loading;
