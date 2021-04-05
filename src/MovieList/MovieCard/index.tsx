import React, { FunctionComponent, useContext, useCallback } from "react";
import "./styles.css";
import { Context } from "../../Store/Store";
import { useHistory } from "react-router-dom";

type MovieCardProps = {
  movie: { title: string };
};

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  //@ts-ignore
  const [state, dispatch] = useContext(Context);

  const history = useHistory();
  const handleOnClick = useCallback(
    (currentMovie) => {
      dispatch({ type: "SET_CURRENT_MOVIE", payload: currentMovie });

      history.push("/movie-details");
    },
    [history]
  );

  return (
    <div>
      {movie && (
        <>
          <div
            className="movie"
            onClick={() => {
              handleOnClick(movie);
            }}
          >
            <h2>{movie.title}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
