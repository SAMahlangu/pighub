import React from 'react';
import poultryFarmAnimation1 from './assets/Dashboard_Pig.jpg'; // Example animation image 1
import poultryFarmAnimation2 from './assets/Dashboard_Pig.jpg'; // Example animation image 2
import poultryFarmAnimation3 from './assets/Dashboard_Pig.jpg'; // Example animation image 3
import './Home.css';

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="animated-images">
        <img 
          src={poultryFarmAnimation1} 
          alt="Animated Poultry Farm 1" 
          className="animated-poultry-farm"
        />
        <img 
          src={poultryFarmAnimation2} 
          alt="Animated Poultry Farm 2" 
          className="animated-poultry-farm"
        />
        <img 
          src={poultryFarmAnimation3} 
          alt="Animated Poultry Farm 3" 
          className="animated-poultry-farm"
        />
      </div>
    </main>
  );
}

export default Home;
