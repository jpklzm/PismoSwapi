import React, { FunctionComponent } from "react";
import "./styles.css";

type MovieCardProps = {
  movie: { title: string };
};

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      {movie && (
        <>
          <div className="movie">
            <h2>{movie.title}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
