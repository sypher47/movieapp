import React, { useEffect, useState } from "react";
import { apiKey, baseUrl } from "../app/config";
import useFetch from "./useFetch";

const usePopularMovies = () => {
  const [popular, setPopular] = useState();
  const popularMoviesPath = `popular?api_key=${apiKey}&language=en-US&page=1`;
  const { get, data, error, loading } = useFetch(baseUrl);
  useEffect(() => {
    get(popularMoviesPath);
  }, [get, popularMoviesPath]);

  useEffect(() => {
    if (data) {
      setPopular(data.results);
    }
  }, [data]);

  return {
    popular,
    error,
    loading,
  };
};

export default usePopularMovies;
