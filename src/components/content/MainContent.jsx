import "./Content.css";
import React from "react";
import { movies } from "../../utils/constants";
import { MovieItem } from "./MovieItem";

export const MainContent = () => {
  return (
    <div>
      {movies.map((el) => (
        <MovieItem width="150px" key={el.id} title={el.title} img={el.img} rating={el.rating}  />

      ))}

    </div>
  );
};
