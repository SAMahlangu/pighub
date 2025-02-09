import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary router components
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import IntroductionPage from './pages/Introduction.jsx';
import HousingPage from './pages/Housing.jsx';
import SystemsPage from './pages/Systems.jsx';
import RecipesPage from './pages/Recipes.jsx';
import SalesPage from './pages/Sales.jsx';
import HealthPage from './pages/Health.jsx';
import BreedingPage from './pages/Breeding.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        {/* Always show Header and Sidebar */}
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/systems" element={<SystemsPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/breeding" element={<BreedingPage />} />
          <Route path="/health" element={<HealthPage />} />
          {/*<Route path="/nutrition" element={<NutritionPage />} />
           <Route path="/layer" element={<LayerPage />} />
          
           */}
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

