import { Alert, Container } from "react-bootstrap";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import CustomCard from "./Components/CustomCard";
import MovieList from "./Components/MovieList";
import { fetchMoviesinfo } from "./Components/Helpers/axiosHelper";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({});
  const [showError, setshowError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const handleOnSubmit = async (str) => {
    const result = await fetchMoviesinfo(str);

    result?.Response === "False"
      ? setshowError(result.Error)
      : setMovie(result);
  };
  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  const deleteMovies = (imdbID) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const tempArg = movieList.filter((item) => item.imdbID !== imdbID);
      setMovieList(tempArg);
    }
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          {movie.imdbID && (
            <CustomCard
              movie={movie}
              movieSelect={movieSelect}
              isSearch={true}
            />
          )}
          {showError && <Alert variant="danger">{showError}</Alert>}
        </div>

        <hr />
        <MovieList movieList={movieList} deleteMovies={deleteMovies} />
      </Container>
    </div>
  );
};

export default App;
