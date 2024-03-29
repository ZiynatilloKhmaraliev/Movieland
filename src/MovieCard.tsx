import React from "react";
interface Movie {
    Title: string;
    Year: string; // Assuming Year is the year of the movie
    Poster: string; // Assuming Poster is an image URL
    Type: string;
    // Add more properties as needed
  }
  
interface Props{
    movie:Movie;
}
const MovieCard=({movie}:Props)=>{
    return (
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster!=='N/A' ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title} />
          </div>
          <div>
            <span>
              {movie.Type}
            </span>
            <h3>{ movie.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard