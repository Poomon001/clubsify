import React from "react";
import SingleCard from "./SingleCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Cards() {
  return (
    <div>
      <section id="blog" className="block blog-block">
        <Container fluid>
          <Row>
            <Col sm={3} key="1">
              <SingleCard />
            </Col>
            <Col sm={3} key="2">
              <SingleCard />
            </Col>
            <Col sm={3} key="3">
              <SingleCard />
            </Col>
            <Col sm={3} key="3">
              <SingleCard />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Cards;
