import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";
import CustomList from "./CustomList";

const MovieList = ({ movieList, deleteMovies }) => {
  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);
  const [displayMovie, setDisplayMovie] = useState([]);
  const [view, setView] = useState("grid");
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
            <Button variant="primary" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="secondary" onClick={() => setView("list")}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <div className="mt-5 fw-bold">
        No of Movies Found : {displayMovie.length}
      </div>
      <Row className="mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayMovie.map((item, i) =>
            view === "grid" ? (
              <CustomCard movie={item} key={i} deleteMovies={deleteMovies} />
            ) : (
              <CustomList movie={item} key={i} deleteMovies={deleteMovies} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
