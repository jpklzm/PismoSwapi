import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import MovieCard from "./MovieCard";
import { Context } from "../Store/Store";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //@ts-ignore
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (state.movieList != {}) {
      fetch(`https://swapi.dev/api/films`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          setMovieList(response.results);
          setFilteredList(response.results);
          dispatch({
            type: "SET_CURRENT_MOVIE_LIST",
            payload: response.results,
          });
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setMovieList(state.movieList);
      setFilteredList(state.movieList);
    }
  }, []);

  const countCharacters = () => {
    const characterCount = [
      {
        url: "http://swapi.dev/api/people/1/",
        count: 0,
      },
    ];
    movieList.forEach((movie: any) => {
      movie.characters.forEach((e: any) => {
        const character = characterCount.find((c: any) => c.url === e);
        if (character) {
          const index = characterCount.findIndex((ch: any) => {
            return ch.url === character.url;
          });
          characterCount[index].count += 1;
        } else {
          characterCount.push({
            url: e.url,
            count: 0,
          });
        }
      });
    });

    console.log(characterCount);
  };

  const clearFilter = () => {
    setFilteredList(state.movieList);
  };

  const filterByCharacter = (character: string) => {
    const filteredMovieList: any = [];

    movieList.forEach((movie: any) => {
      movie.characters.forEach((e: any) => {
        if (e === character) {
          filteredMovieList.push(movie);
        }
      });
    });

    setFilteredList(filteredMovieList);
  };

  return (
    <div>
      <h1 className="title">
        <span className="red">Pismo</span> <span className="blue">SWAPI</span>
      </h1>
      <div className="movie-container">
        {isLoading && (
          <img src="https://64.media.tumblr.com/c0d8be3a1d2bfd58a1eb6c91baa5747b/5321eccd302337fc-fc/s400x600/f5ceaa1e1f5a5f705142e087ed9369c0eff52c63.gifv" />
        )}

        <button
          onClick={() => {
            clearFilter();
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            filterByCharacter("http://swapi.dev/api/people/1/");
          }}
        >
          Luke Skywalker
        </button>
        <button
          onClick={() => {
            countCharacters();
          }}
        >
          Count
        </button>

        {(filteredList as any).map((movie: any, index: any) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
