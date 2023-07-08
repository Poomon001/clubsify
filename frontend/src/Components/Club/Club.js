import React from 'react';

const Club = ({ name, description, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Club;
