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
    description: "Join the UVic Programming Club for an exciting Competitive Programming Contest! Test your coding skills, solve challenging problems, and compete with fellow programmers. Open to all skill levels, this event will provide a great opportunity to enhance your programming abilities and connect with like-minded individuals.",
    image: "https://example.com/fake-image.jpg",
    uid: "0001"
  },
  {
    name: "UVic CyberSec Club",
    event: "Hackathon",
    description: "Participate in the UVic CyberSec Club's Hackathon and dive into the world of cybersecurity. Collaborate with fellow hackers to solve real-world challenges, explore vulnerabilities, and develop innovative solutions. Whether you are a beginner or an experienced hacker, this event will offer a platform to learn, create, and network with cybersecurity enthusiasts.",
    image: "https://example.com/another-fake-image.jpg",
    uid: "0002"
  },
  {
    name: "UVic Volleyball",
    event: "Volleyball Intramurals",
    description: "Get ready to bump, set, and spike at the UVic Volleyball Intramurals! Gather your friends, form a team, and showcase your volleyball skills in a friendly and competitive environment. Whether you are a seasoned player or a beginner, this event welcomes players of all levels. Join us for an exciting and fun-filled day of volleyball action!",
    image: "https://example.com/another-fake-image.jpg",
    uid: "0003"
  },
  {
    name: "UVic Badminton",
    event: "Badminton Intramurals",
    description: "Calling all badminton enthusiasts! Join the UVic Badminton Intramurals and engage in thrilling matches on the court. Whether you are a singles expert or a doubles specialist, this event offers a fantastic opportunity to showcase your skills and compete against fellow badminton players. Grab your racket and get ready for an exciting badminton showdown!",
    image: "https://example.com/another-fake-image.jpg",
    uid: "0004"
  },
  {
    name: "UVic Photography Club",
    event: "Photography Workshop",
    description: "Join the UVic Photography Club for a hands-on Photography Workshop. Learn essential techniques, composition tips, and post-processing tricks to enhance your photography skills. Whether you are a beginner or an experienced photographer, this workshop will provide valuable insights and an opportunity to capture stunning images in a supportive environment.",
    image: "https://example.com/photography-workshop.jpg",
    uid: "0005"
  },
  {
    name: "UVic Entrepreneurship Society",
    event: "Startup Pitch Competition",
    description: "Calling all aspiring entrepreneurs! Participate in the UVic Entrepreneurship Society's Startup Pitch Competition. Showcase your innovative business idea to a panel of judges and compete for valuable prizes and networking opportunities. Whether you have a well-developed business plan or just a brilliant concept, this competition will provide a platform to pitch your ideas and gain valuable feedback.",
    image: "https://example.com/startup-pitch.jpg",
    uid: "0006"
  },
  {
    name: "UVic Environmental Society",
    event: "Beach Cleanup",
    description: "Make a positive impact on the environment by participating in the UVic Environmental Society's Beach Cleanup. Join a group of passionate volunteers and help remove litter and debris from a local beach. Together, we can contribute to the preservation of our coastal ecosystems and raise awareness about the importance of environmental conservation.",
    image: "https://example.com/beach-cleanup.jpg",
    uid: "0007"
  }
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
          uid={event.uid}
        />
      ))}
    </div>
  );
}

export default App;