import React from "react";
import SingleCard from "./SingleCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useState, useEffect } from "react";

function Cards() {
  const [clubs, setClubs] = useState(null)
  const [state, setState] = useState(null)
  useEffect(() => {
    const fetchClubs = async () => {
      let result = await axios.get(
        `http://127.0.0.1:8000/api/clubs/allclubs`,
      );

      setClubs(JSON.parse(JSON.stringify(result.data)))
      setState("Done")
    }
    fetchClubs()
  }, [])

  return (
    <div>
      <Container fluid>
        <Row auto>
          {state === "Done" && clubs.map(club => (
            <Col md={3} xs={6} className="mb-4" key={club.uuid}>
              <SingleCard uid={club.uuid} {...club} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
