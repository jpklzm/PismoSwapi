import React, { useContext, useCallback } from "react";
import "./styles.css";
import { Context } from "../Store/Store";
import { useHistory } from "react-router-dom";

const MovieDetails = () => {
  //@ts-ignore
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);

  const getWeekday = (day: number) => {
    if (day === 0) return "Domingo";
    if (day === 1) return "Segunda-feira";
    if (day === 2) return "Terça-feira";
    if (day === 3) return "Quarta-feira";
    if (day === 4) return "Quinta-feira";
    if (day === 5) return "Sexta-feira";
    if (day === 6) return "Sábado";
  };

  const getMonthName = (month: number) => {
    if (month === 0) return "Janeiro";
    if (month === 1) return "Fevereiro";
    if (month === 2) return "Março";
    if (month === 3) return "Abril";
    if (month === 4) return "Maio";
    if (month === 5) return "Junho";
    if (month === 6) return "Julho";
    if (month === 7) return "Agosto";
    if (month === 8) return "Setembro";
    if (month === 9) return "Outubro";
    if (month === 10) return "Novembro";
    if (month === 11) return "Dezembro";
  };

  const formatedDate = `${getWeekday(
    new Date(state.movie.edited).getDay()
  )}, ${new Date(state.movie.edited).getDate()} de ${getMonthName(
    new Date(state.movie.edited).getMonth()
  )} de ${new Date(state.movie.edited).getFullYear()}`;

  return (
    <div>
      <h1 className="title">{state.movie.title}</h1>
      <h2>{`Edited: ${formatedDate}`}</h2>
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
