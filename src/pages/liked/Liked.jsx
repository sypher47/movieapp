import React, { useContext, useEffect } from "react";
import { LikedMoviesContext } from "../../app/likedMoviesContext";
import MovieGrid from "../../components/MovieGrid";
import NavBar from "../../components/NavBar";

const Liked = () => {
  const { state } = useContext(LikedMoviesContext);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <div className="container">
        <h1>Favorites</h1>
        {state.length > 0 ? (
          <MovieGrid movies={state} />
        ) : (
          <p>Liked movies will show here</p>
        )}
      </div>
    </div>
  );
};

export default Liked;
