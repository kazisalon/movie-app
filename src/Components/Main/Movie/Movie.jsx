import React, { Component } from "react";
import "./Movie.css";

const Movie = (props) => (
  <li className="movie-wrapper">
    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200/${props.poster}`} alt={props.title} />
    <div className="movie-info">
      <div>
        <span className="movie-title"> {props.title} </span>
        <span className="movie-rank"> <span>IMDb</span> <i class="fas fa-star"></i> <span className="movie-rank-number">{props.rank}</span> </span>
      </div>
      <span className="movie-overview"> {props.overview} </span>
    </div>
  </li>
);


export default Movie;
