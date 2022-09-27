import React from "react";
import { actors } from "../data";

function Actors() {
  return(
    <React.Fragment>
      <h1>Actors Page</h1>
      
        {actors.map((actor)=> (
      <React.Fragment key = {actor.name}>
      <div>
        {actor.name}
        {actor.movies.map((movies)=>(
          <ul key = {movies}>
           <li>{movies}</li>
          </ul>
       ))}
    </div>
      
      </React.Fragment>
    
        ))}
    </React.Fragment>
  )
}

export default Actors;
