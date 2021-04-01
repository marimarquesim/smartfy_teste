import React from "react";
import { MovieControls } from "./MovieControls";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <Link to={`movies/details/${movie.id}` } className="movie">
      <div className="overlay"></div>

      <img
        src={movie.poster_path}
        alt={`${movie.title} Poster`}
      />
 

      <MovieControls type={type} movie={movie} />

      </Link>
      <p>{movie.original_title}</p>
      <p>{movie.overview}</p>
    </div>
  );
};
