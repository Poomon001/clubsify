import React from "react";

const EventPage = () => {
  return (
    <div className="container">
      <h1>Event Name</h1>
      <p>Event information goes here.</p>

      <div className="row">
        <div className="col-md-6">
          <h3>Contact Information</h3>
          <p>
            Email:{" "}
            <a href="mailto:fakeemail@example.com">fakeemail@example.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1234567890</a>
          </p>
        </div>
      </div>

      <h3>Previous Events</h3>
      <ul className="list-group">
        <li className="list-group-item">Event 1</li>
        <li className="list-group-item">Event 2</li>
        <li className="list-group-item">Event 3</li>
      </ul>
    </div>
  );
};

export default EventPage;
