import React from "react";
import "./NavbarPage.scss";
import mainLogo from "../assets/images/CropmainLogo.png";
import Logo from "../assets/images/ABLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="outterNav-div">
      
        <div className="innerNav-div">
          <div className="img-div">
            <a href="/">
            <img className="mainLogo" src={Logo} />
            </a>
          </div>
          <div className="quicktap">
            <a  href="#aboutHeader" className="navbarTags">about</a>
            <a href ="#experienceHeader" className="navbarTags">experience</a>
            <Link to = 'resume' className="navbarTags">resume</Link>
            <Link to= '/contact' className="navbarTags">contact</Link>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
