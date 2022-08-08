import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div>
      <div  className="d-flex flex-wrap justfify-content-start">
        {movies.map((movie) => {
          return (
            <div className="m-2" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieGrid;
