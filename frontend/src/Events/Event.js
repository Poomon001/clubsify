import React from 'react';

const Event = ({ name, description, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export { Event };

// Generating fake data
const fakeEvents = [
  {
    name: "UVic Programming Club",
    event: "Competitive Programming Contest",
    description: "TODO: Add description here",
    image: "https://example.com/fake-image.jpg",
  },
  {
    name: "UVic	CyberSec Club",
    event: "Hackathon",
    description: "TODO: Add description here",
    image: "https://example.com/another-fake-image.jpg",
  },

  {
    name: "UVic Volleyball",
    event: "Volleyball Intramurals",
    description: "TODO: Add description here",
    image: "https://example.com/another-fake-image.jpg",
  },

  {
    name: "UVic Badminton",
    event: "Badminton Intramurals",
    description: "TODO: Add description here",
    image: "https://example.com/another-fake-image.jpg",
  }
  // Add more fake events here...
  // {
  //   name: "Event 3",
  //   description: "Description for Event 3",
  //   image: "https://example.com/event3-image.jpg",
  //   // category: "Category"
  // },
  // {
  //   name: "Event 4",
  //   description: "Description for Event 4",
  //   image: "https://example.com/event4-image.jpg",
  //   // category: "Category"
  // },
  // ...
];

// Usage in your component
function App() {
  return (
    <div>
      {fakeEvents.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          description={event.description}
          image={event.image}
        />
      ))}
    </div>
  );
}

export default App;


//fake data taken from https://uvss.ca/wp-content/uploads/2020/06/CURRENT-CLUBS.pdf, https://vikesrec.ca/intramurals/volleyball