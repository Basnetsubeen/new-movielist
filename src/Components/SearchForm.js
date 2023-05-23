import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
  };
  return (
    <div className="mt-5 text-center">
      <h1 className="text-center">My Movie List</h1>
      <Form onSubmit={formSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="search movie name..."
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
