import React from "react";
import memeLogo from "../images/troll-face.png";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img
        src={memeLogo}
        alt="Meme Generator Logo"
        className="navbar-logo-image"
      />
      <h1 className="navbar-title">Meme Generator</h1>
    </nav>
  );
}
