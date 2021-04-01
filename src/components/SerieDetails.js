import React from "react";
import {useState, useEffect} from 'react'
import useRouter from "use-react-router"
import { matchPath } from "react-router-dom"
import ReactElasticCarousel from "react-elastic-carousel";

export const SerieDetails = (props) => {

  const [ movieDetails, setMovieDetails ] = useState([]);


  const {location} = useRouter()


  const pattern = `(.*)?${'details/:id'}`

  const match = matchPath(location.pathname, { path: pattern }) || {}


  const movieId = match.params.id;



  useEffect(() => {
    // Some initialization logic here
    fetch(
      `http://localhost:3000/series/${movieId}`
    )
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        if (!data.errors) {

          console.log(data)
          setMovieDetails(data);


        } else {
            setMovieDetails([]);
        }
      });
  }, []);


  var breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]



  return (
    <div className="movie-page">

        <div className="main-container">

          <div className="product-preview">
            <img src={movieDetails.poster_path}/>

          </div>

          <div className="product-data" >
          <h1 className="product-title"> {movieDetails.original_name}</h1>
          <p className="product-description"> {movieDetails.overview}</p>

          <h3 className="section-header">Atores</h3>

          <div >
            <ReactElasticCarousel breakPoints={breakPoints}  renderPagination={({ pages, activePage, onClick }) => {
    return (
    <div></div>
    )
  }} >
            {movieDetails?.credits?.cast.map((actor) => (
              
                       <div class="card" style={{width: '18rem'}}>
                       <img class="card-img-top" src={actor.profile_path}/>
                       <div class="card-body">
                         <h5 class="card-title">{actor.name}</h5>
                         <p class="card-text">{actor.character}</p>
           
                       </div>
                     </div>
            ))}

            </ReactElasticCarousel>
    
          </div>

          </div>

      </div>

    </div>
  );
};
