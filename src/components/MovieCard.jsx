import React, { useContext, useEffect, useState } from "react";
import { imageBaseUrl } from "../app/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { LikedMoviesContext } from "../app/likedMoviesContext";

const MovieCard = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const [dislike, setDislike] = useState(false);
  const {dispatch } = useContext(LikedMoviesContext);

  const onLiked = (movie) => {
    dispatch({
      type: "like",
      payload: {
        id: movie.id,
        poster_path: movie.poster_path,
        original_title: movie.original_title,
      },
    });
    setLiked(!liked);
    setDislike(false);
  };
  const onDisliked = (movie) => {
    dispatch({
      type: "dislike",
      payload: {
        id: movie.id,
        poster_path: movie.poster_path,
        original_title: movie.original_title,
      },
    });
    setDislike(!dislike);
    setLiked(false);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`${imageBaseUrl}/${movie.poster_path}`}
        className="card-img-top"
        alt="movie thumbnail"
      />
      <div className="card-body">
        <p className="card-text">{movie.original_title || "Avengers"}</p>
        <div className="d-flex flex-row align-items-center">
          <FontAwesomeIcon
            onClick={() => onLiked(movie)}
            className="mx-2"
            icon={faThumbsUp}
            size={"lg"}
            color={liked ? "green" : "grey"}
          />
          <FontAwesomeIcon
            onClick={() => onDisliked(movie)}
            className="mx-2"
            icon={faThumbsDown}
            size={"lg"}
            color={dislike ? "red" : "grey"}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
