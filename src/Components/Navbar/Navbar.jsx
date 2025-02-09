import React from "react";
import "./Navbar.css"; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        
      
        <div className="logo">
          
        </div>

       
        <ul className="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>

       
        <div className="hamburger">
          <button>☰</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
