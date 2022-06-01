import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";

const Navbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="name">TEAM COMBAT ROBOTICS</span>
        </Link>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <HashLink to="#aboutUs" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">About Us</span>
          </HashLink>
          <Link to="/team" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Team</span>
          </Link>
          <Link to="/alumni" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Alumni</span>
          </Link>
          <Link to="/works" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Works</span>
          </Link>
          <HashLink to="#sponsors" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Sponsors</span>
          </HashLink>
          <HashLink to="#contactUs" style={{ textDecoration: "none", color:"black" }}>
            <span className="topbarLink">Contact</span>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar
