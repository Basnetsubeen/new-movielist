import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = ({ movie = {}, movieSelect, isSearch, deleteMovies }) => {
  const { Title, Poster, imdbRating } = movie;

  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating: {imdbRating}</Card.Title>
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

export default CustomCard;
