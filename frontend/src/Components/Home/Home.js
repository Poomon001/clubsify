import React, { useState } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Event from '../Event/Event';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useEffect } from 'react';

const Home = () => {

  const [events, setEvents] = useState(null)
  const [state, setState] = useState(null)
  useEffect(() => {
    const fetchEvents = async () => {
      let result = await axios.get(
        `http://127.0.0.1:8000/api/events/allevents`,
      );

      setEvents(JSON.parse(JSON.stringify(result.data)))
      setState("Done")
    }
    fetchEvents()
  }, [])
  return (
    <div className="home">
      <Navigation />
      <section id="blog" className="block blog-block">
        <Container fluid>
          <Row className="justify-content-md-center">
            {state === "Done" && events.map(event => (
              <Col sm={7} key={event.uuid} className="mb-4" >
                <Event {...event} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
