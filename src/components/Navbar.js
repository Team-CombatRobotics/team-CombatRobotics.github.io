import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="name">TEAM COMBAT ROBOTICS</span>
        </Link>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <span className="topbarLink">About Us</span>
          </Link>
          <Link to="/team" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Team</span>
          </Link>
          <Link to="/alumni" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Alumni</span>
          </Link>
          <Link to="/works" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Works</span>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar