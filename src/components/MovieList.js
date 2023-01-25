import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.FavouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container col-md-2 d-flex justify-content-start m2">
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouriteClick(movie)}
            className="overlay d-flex align-items-center justify-conten-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
