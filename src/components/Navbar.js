import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            Team Combat Robotics
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <ul>

           <li>
          <HashLink to="#aboutUs" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">About</span>
          </HashLink>
          </li> 
          <li>
          <Link to="/team" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Team</span>
          </Link>
          </li>
          <li>
          <Link to="/alumni" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Alumni</span>
          </Link>
          </li>
          <li>
          <Link to="/works" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Works</span>
          </Link>
          </li> 
          <li>
          <HashLink to="#sponsors" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Sponsors</span>
          </HashLink>
          </li> 
          <li>
          <HashLink to="#contactUs" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Contact</span>
          </HashLink>
          </li> 

          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
      </nav>

      
    </>
  );
};

export default Navbar;