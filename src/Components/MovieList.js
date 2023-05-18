import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const MovieList = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="secondary">Happy</Button>
            <Button variant="info">Romantic</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Grid</Button>
            <Button variant="secondary">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
