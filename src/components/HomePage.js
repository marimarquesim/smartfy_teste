import React from "react";
import { MovieCard } from "./MovieCard";
import {useState, useEffect} from 'react'

export const HomePage = () => {

  const [ results, setResults ] = useState([]);
  

  useEffect(() => {
    // Some initialization logic here
    fetch(
      "http://localhost:3000/filmes"
    )
      .then((res) => res.json())
      .then((data) => {

        if (!data.errors) {

          console.log(data.results)
          setResults(data.results);


        } else {
          setResults([]);
        }
      });
  }, []);


  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Filmes</h1>

        </div>

        {results.length > 0 ? (
          <div className="movie-grid">
            {results.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Carregando</h2>
        )}
      </div>
    </div>
  );
};