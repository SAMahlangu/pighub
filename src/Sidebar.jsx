import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> PIG FARMING
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          {/* Use Link for routing */}
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/broiler">
            <BsFillArchiveFill className="icon" /> Production Guide
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to="/nutrition">
            <BsPeopleFill className="icon" /> Nutrition
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/layer">
            <BsFillGrid3X3GapFill className="icon" /> Layer
          </Link>
        </li>
        
        <li className="sidebar-list-item">
          <Link to="/recipes">
            <BsListCheck className="icon" /> Recipes
          </Link>
        </li> */}
        {/* If not needed, you can uncomment when you have these routes */}
        {/* 
        <li className="sidebar-list-item">
          <Link to="/reports">
            <BsMenuButtonWideFill className="icon" /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li> 
        */}
      </ul>
    </aside>
  );
}

export default Sidebar;
