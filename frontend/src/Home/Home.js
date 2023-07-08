import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="home">
      <div className="sandwich-bar" onClick={toggleItems}>
        Sandwich Bar
      </div>
      {showItems && (
        <div className="sandwich-items">
          <div>Home</div>
          <div>Clubs</div>
          <div>New</div>
        </div>
      )}
      <div className="news">News Component</div>
    </div>
  );
};

export default Home;
