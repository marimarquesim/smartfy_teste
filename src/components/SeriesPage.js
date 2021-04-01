import React from "react";
import { SeriesCard } from "./SeriesCard";

import {useState, useEffect} from 'react'

export const SeriesPage = () => {

  const [ results, setResults ] = useState([]);
  

  useEffect(() => {
    // Some initialization logic here
    fetch(
      "http://localhost:3000/series"
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
          <h1 className="heading">Series</h1>

        </div>

        {results.length > 0 ? (
          <div className="movie-grid">
            {results.map((serie) => (
              <SeriesCard serie={serie} key={serie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Carregando</h2>
        )}
      </div>
    </div>
  );
};
