import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Event = (props) => {
    return (
        <Card >
            <Card.Img style={{ height: 250 }} variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80/100px180" />
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>{props.event}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary">More info</Button>
            </Card.Body>
            <Card.Footer className="text-muted text-center">{props.date}</Card.Footer>
        </Card>
    );
}

export default Event;

[
    {
      "name": "UVIC Programming Club",
      "description": "Uvic programming club focusing on competitive programming",
      "uuid": "2"
    },
    {
      "name": "Web Development Society",
      "description": "Society dedicated to web development and design",
      "uuid": "3"
    },
    {
      "name": "Data Science Association",
      "description": "Association for exploring and applying data science",
      "uuid": "4"
    },
    {
      "name": "Mobile App Developers Group",
      "description": "Group focusing on mobile app development",
      "uuid": "5"
    },
    {
      "name": "AI Research Club",
      "description": "Club dedicated to artificial intelligence research",
      "uuid": "6"
    },
    {
      "name": "Cybersecurity Society",
      "description": "Society promoting cybersecurity awareness and skills",
      "uuid": "7"
    },
    {
      "name": "Game Development Club",
      "description": "Club for game development enthusiasts",
      "uuid": "8"
    },
    {
      "name": "Robotics and Automation Society",
      "description": "Society exploring robotics and automation technologies",
      "uuid": "9"
    },
    {
      "name": "Blockchain Club",
      "description": "Club focused on blockchain technology and cryptocurrencies",
      "uuid": "10"
    },
    {
      "name": "Open Source Community",
      "description": "Community promoting open-source software and collaboration",
      "uuid": "11"
    }
]
