import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (

     <div id="NavbarContainer" className="navbar navbar-expand-lg border-bottom fixed-top bg-white">
      <div className="container">
       <Link to ="/HomePage">
        <img className="" src="/logo.png.svg" style={{width:"24%"}} />
         </Link>
        
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link className="nav-link" to="/Signup">Signup</Link>
              </li>

            <li className="nav-item me-4">
              <Link className="nav-link" to="/About">About</Link>
              </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/Products">Products</Link>
              </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/Pricing">Pricing</Link>
              </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/Support">Support</Link>
              </li>
            <i class="fa-solid fa-bars mt-3"></i>
        </ul> 
       </div>
       </div>
      </div>
  );
}

export default Navbar;

