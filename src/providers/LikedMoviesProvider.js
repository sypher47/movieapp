import React, { useReducer } from "react";
import { LikedMoviesContext } from "../app/likedMoviesContext";

const reducer = (state = [], action) => {
  const exists = state.find((item) => item.id === action.payload.id);

  switch (action.type) {
    case "like":
      if (exists) {
        console.log({exists});
        return state.filter((item) => item.id !== action.payload.id);
      }
      return [...state, action.payload];
    case "dislike":
      if (exists) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state;
    default:
  }
};

const LikedMoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,[]);
  return (
    <LikedMoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};

export default LikedMoviesProvider;
