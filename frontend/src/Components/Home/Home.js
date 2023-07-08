import React, { useState } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';

const Home = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="home">
      <Navigation />
      {showItems && (
        <div className="sandwich-items">
          <div>Home</div>
          <div>Clubs</div>
          <div>New</div>
        </div>
      )}

    </div>
  );
};

export default Home;
