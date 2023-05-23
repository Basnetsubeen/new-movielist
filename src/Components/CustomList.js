import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomList = ({ movie = {}, movieSelect, isSearch, deleteMovies }) => {
  const { Title, Poster, imdbRating, Plot } = movie;

  return (
    <Card
      className="mt-3 d-flex flex-row justify-content-between"
      style={{ width: "100%" }}
    >
      <div style={{ width: "200px" }}>
        <Card.Img variant="top" src={Poster} style={{ width: "200px" }} />
      </div>

      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating: {imdbRating}</Card.Title>
        <div className="div">{Plot}</div>
        {isSearch ? (
          <div className="d-flex justify-content-between mt-3">
            <Button
              variant="primary"
              onClick={() => movieSelect({ ...movie, mood: "happy" })}
            >
              Happy
            </Button>
            <Button
              variant="danger"
              onClick={() => movieSelect({ ...movie, mood: "romantic" })}
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="mt-3 d-grid g-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => deleteMovies(movie.imdbID)}
            >
              Delete Movie
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomList;
