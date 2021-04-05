import React, { useState, useEffect } from "react";
import "./styles.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setMovieList(response.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(movieList);
  const mock = [
    {
      title: "um filme",
    },
    {
      title: "outro filme",
    },
  ];

  return (
    <div>
      <h1 className="title">
        <span className="red">Pismo</span> <span className="blue">SWAPI</span>
      </h1>
      <div className="movie-container">
        {isLoading && (
          <img src="https://64.media.tumblr.com/c0d8be3a1d2bfd58a1eb6c91baa5747b/5321eccd302337fc-fc/s400x600/f5ceaa1e1f5a5f705142e087ed9369c0eff52c63.gifv" />
        )}

        {(mock as any).map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}

        {/* {(movieList as any).map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))} */}
      </div>
    </div>
  );
};

export default MovieList;
