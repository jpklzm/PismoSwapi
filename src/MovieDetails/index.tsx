import React, { FunctionComponent, useContext, useCallback } from "react";
import "./styles.css";
import { Context } from "../Store/Store";
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
  //@ts-ignore
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);

  return (
    <div>
      <h1 className="title">{state.movie.title}</h1>
      <h2>{`Episode ${state.movie.episode_id}`}</h2>
      <h2>{`Director: ${state.movie.director}`}</h2>
      <h2>{`Producer: ${state.movie.producer}`}</h2>
      <button className="backbutton" onClick={handleOnClick}>
        Back
      </button>
    </div>
  );
};

export default MovieDetails;
