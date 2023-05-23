import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";

const MovieList = ({ movieList }) => {
  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);
  const [displayMovie, setDisplayMovie] = useState([]);
  const filterMovies = (mood) => {
    if (mood === "all") {
      return setDisplayMovie(movieList);
    }
    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayMovie(tempArg);
  };
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => filterMovies("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filterMovies("happy")}>
              Happy
            </Button>
            <Button variant="info" onClick={() => filterMovies("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayMovie.map((item, i) => (
            <CustomCard movie={item} key={i} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
