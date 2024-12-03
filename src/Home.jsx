import React from 'react';
import poultryFarmAnimation from './assets/chicken.jpg'; // Example animation image
import './Home.css';


function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="animated-images">
        <img 
          src={poultryFarmAnimation} 
          alt="Animated Poultry Farm" 
          className="animated-poultry-farm"
        />
      </div>
    </main>
  );
}

export default Home;
