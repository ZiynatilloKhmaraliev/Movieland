import ListGroup from "./components/ListGroup";
import './App.css';
import { useEffect, useState } from "react";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
const API_URL="http://www.omdbapi.com?apikey=e2a6d47"
const Movie1={
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

function App(){
  const [movies,SetMovies]=useState([])
  const searchMovies=async(title:string)=>{
  const response= await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  SetMovies(data.Search)
  };
  const [SearchTerm,setSearchTerm]=useState('');
  useEffect(()=>{
    searchMovies(SearchTerm)
  },[]);
  
 //  e2a6d47
  return(
   <div className="app" >
    <h1>Moviland</h1>

    <div className="search">
      <input type="text" placeholder="search for movies" 
      value={SearchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      <img src={SearchIcon} alt="search"  onClick={()=>searchMovies(SearchTerm)}/>
    </div>
    <>
    {
      movies?.length>0
      ?(
        <>
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))};
         </div>
        </>
      ):(
        <div className="empty"><h2>no movies found</h2></div>
      )
      
    }
    </>
    
   </div>
  );
  
}
export default App;