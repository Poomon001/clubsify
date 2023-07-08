import React, { useState } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Event from '../Event/Event';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

  return (
    <div className="home">
      <Navigation />
      <section id="blog" className="block blog-block">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col sm={8} key="1" className="mb-4" >
              <Event />
            </Col>
            <Col sm={8} key="1" className="mb-4" >
              <Event />
            </Col>
            <Col sm={8} key="1" className="mb-4" >
              <Event />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
