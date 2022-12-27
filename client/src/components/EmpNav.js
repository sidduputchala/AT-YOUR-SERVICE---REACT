import React from "react";
import { Link } from "react-router-dom";
import aysimage from './Images/ays.jpg';
import './css/MainNav.css';

function EmpNav() {
  return (
    <div className="mainnav">
      <nav className="navbar navbar-expand-lg" id="navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="/"><img style={{width:"100px",height:"45px","margin-left":"70px"}} src={aysimage} alt="#" /></Link>
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{"margin-right":"70px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Employee_home" >
                  <u>Home</u>
                </Link>
               
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/work" >
                  <u>Work</u>
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link active" to="/empProfile" >
                  <u>Profile</u>
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link active" to="/" >
                  <u>Logout</u>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default EmpNav;
