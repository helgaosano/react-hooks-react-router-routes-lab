import React from "react";
import { movies } from "../data";

function Movies() {
  return(
    <React.Fragment>
      <h1>Movies Page</h1>
      
        {movies.map((movie)=> (
      <React.Fragment key = {movie.title}>
      <div>
        {movie.title}
      </div>
      <div>
          {movie.time}
      </div>
      <>
          {movie.genres.map((genre)=>(
            <ul key={genre} >
              <li>{genre}</li>
            </ul>
          ))}
      </>
      
      </React.Fragment>
    
        ))}
    </React.Fragment>
  )
}

export default Movies;
