import React, { FunctionComponent, useContext } from "react";
import "./styles.css";
import { Context } from "../Store/Store";

const MovieDetails = () => {
  //@ts-ignore
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <h1 className="title">{state.movie.title}</h1>
    </div>
  );
};

export default MovieDetails;
