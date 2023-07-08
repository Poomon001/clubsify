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

export default Event;
