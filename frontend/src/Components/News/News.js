import React from 'react';
import Event from './Event';
import Club from './Club';

const News = () => {
  const events = [
    {
      name: 'Event 1',
      description: 'Description of Event 1',
      image: 'event1.jpg',
    },
    {
      name: 'Event 2',
      description: 'Description of Event 2',
      image: 'event2.jpg',
    },
    // Add more events as needed
  ];

  const clubs = [
    {
      name: 'Club 1',
      description: 'Description of Club 1',
      image: 'club1.jpg',
    },
    {
      name: 'Club 2',
      description: 'Description of Club 2',
      image: 'club2.jpg',
    },
    // Add more clubs as needed
  ];

  return (
    <div className="news">
      <div className="news-divider">Divider</div>
      <div className="event-container">
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
      <div className="club-container">
        {clubs.map((club, index) => (
          <Club key={index} {...club} />
        ))}
      </div>
    </div>
  );
};

export default News;
