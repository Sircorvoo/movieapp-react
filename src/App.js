import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [Favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=642528f1`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouritemovie = (movies) => {
    const newFavouriteList = [...Favourites, movies];
    setFavourites(newFavouriteList);
  };

  const removeFavouritesMoive = (movie) => {
    const newFavouriteList = Favourites.filter(
      (Favourites) => Favourites.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouriteClick={addFavouritemovie}
          FavouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourite Movies" />
      </div>
      <div className="row">
        <MovieList
          movies={Favourites}
          handleFavouriteClick={removeFavouritesMoive}
          FavouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};
export default App;
