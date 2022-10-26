import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link className="link" to={"/"}>
        <h1>logo</h1>
      </Link>
   
    </nav>
  );
}

export default Navbar;
