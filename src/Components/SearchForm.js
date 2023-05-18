import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchForm = () => {
  return (
    <div className="mt-5 text-center">
      <h1 className="text-center">My Movie List</h1>
      <Form>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="search movie name..." />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
