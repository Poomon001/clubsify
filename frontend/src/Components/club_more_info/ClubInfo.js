import React from "react";

const ClubPage = ({
  name,
  description,
  phone,
  email,
  event1,
  event2,
  event3,
}) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <p>{description}</p>

      <div className="row">
        <h3>Contact Information</h3>
        <p>
          Email: <a href={email}>{email}</a>
        </p>
        <p>
          Phone: <a href={phone}>{phone}</a>
        </p>
      </div>

      <h3>Previous Events</h3>
      <ul className="list-group">
        <li className="list-group-item">{event1}</li>
        <li className="list-group-item">{event2}</li>
        <li className="list-group-item">{event3}</li>
      </ul>
    </div>
  );
};

const ClubInfo = () => {
  // Fake data
  const fakeData = [
    {
      name: "UVic Programming Club",
      description: "Uvic programming club focusing on competitive programming",
      phone: "+1234567890",
      email: "uvicprog@uvic.com",
      event1: "Event A1",
      event2: "Event B1",
      event3: "Event C1",
    },
    // Add more fake data sets here...
  ];

  return (
    <div>
      {fakeData.map((data, index) => (
        <ClubPage key={index} {...data} />
      ))}
    </div>
  );
};

export default ClubInfo;
