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
          <Link to="/introduction">
            <BsFillArchiveFill className="icon" /> Introduction
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/housing">
            <BsFillArchiveFill className="icon" /> Housing
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/systems">
            <BsFillArchiveFill className="icon" /> Systems
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/equipment">
            <BsFillArchiveFill className="icon" /> Equipment
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/breeding">
            <BsFillArchiveFill className="icon" /> Breeding
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/health">
            <BsFillArchiveFill className="icon" /> Health
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/Feeding">
            <BsFillArchiveFill className="icon" /> Feeding
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/sales">
            <BsFillArchiveFill className="icon" /> Sales
          </Link>
        </li>
        <li className="sidebar-list-item">        
          <Link to="/recipes">
            <BsFillArchiveFill className="icon" /> Recipes
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
