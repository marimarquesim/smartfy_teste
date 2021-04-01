import React from "react";
import { MovieControls } from "./MovieControls";
import { Link } from "react-router-dom";

export const SeriesCard = ({ serie, type }) => {
  return (
    <div className="movie-card">
      <Link to={`series/details/${serie.id}` } className="movie">
      <div className="overlay"></div>

      <img
        src={serie.poster_path}
        alt={`${serie.title} Poster`}
      />
 

      <MovieControls type={type} movie={serie} />

      </Link>
      <p>{serie.original_title}</p>
      <p>{serie.overview}</p>
    </div>
  );
};
