import React, { useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import MovieGrid from "../../components/MovieGrid";
import NavBar from "../../components/NavBar";
import usePopularMovies from "../../hooks/usePopularMovies";

const Home = () => {
  const { error, loading, popular } = usePopularMovies();

  if (error) {
    return <p>Something happened</p>;
  }
  return (
    <div>
      <div className="container">
        <h1>Popular Movies</h1>
        {loading ? <p>loading</p> : popular && <MovieGrid movies={popular} />}
      </div>
    </div>
  );
};

export default Home;
