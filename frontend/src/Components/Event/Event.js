import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Event() {
    return (
        <Card >
            <Card.Header>Uvic Programming Club</Card.Header>
            <Card.Body>
                <Card.Title>Competitive Programming Contest</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">More info</Button>
            </Card.Body>
            <Card.Footer className="text-muted text-center">2 days ago</Card.Footer>
        </Card>
    );
}

export default Event;