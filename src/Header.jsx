import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import { 
  BsFillBellFill, 
  BsFillEnvelopeFill, 
  BsPersonCircle, 
  BsSearch 
} from 'react-icons/bs';

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleNotifications = () => {
    alert("You have a new Notification");
  };

  const handleMessages = () => {
    alert("You have a new Message");
  };

  const handleProfile = () => {
    alert("Redirecting to your profile...");
  };

  return (
    <header className="header">
      <div className="header-right">
        {showSearch && (
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
            autoFocus 
            onBlur={() => setShowSearch(false)} // Close search bar when it loses focus
          />
        )}
        <BsSearch 
          className="icon"  
          onClick={() => setShowSearch(true)} 
        />
        <BsFillBellFill 
          className="icon" 
          onClick={handleNotifications} 
        />
        <BsFillEnvelopeFill 
          className="icon" 
          onClick={handleMessages} 
        />
        <BsPersonCircle 
          className="icon" 
          onClick={handleProfile} 
        />
      </div>
    </header>
  );
}

export default Header;
