import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Search = () => {
  const searchInputStyles = {
    border: "0.5px solid #bdbdbd",
    borderTopRightRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="w-100"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Search;
