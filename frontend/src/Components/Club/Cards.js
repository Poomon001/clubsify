import React from "react";
import SingleCard from "./SingleCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Cards() {
  const colData = [1, 2, 3, 4];

  return (
    <div>
      <Container fluid>
        <Row auto>
          {colData.map((item, index) => (
            <Col md={3} xs={6} className="mb-4" key={item}>
              <SingleCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
