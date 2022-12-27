import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user from "../src/pages/Images/useravatar1.png";
import employee from "../src/pages/Images/employeeavatar1.png";
import MainNav1 from "./components/MainNav1";
import "../src/pages/css/accounttype.css";

function LoginButton() {
  const navigate = useNavigate();
  const employeeRedirect = () => {
    navigate("/login_employee");
  };

  const customerRedirect = () => {
    navigate("/login");
  };

  return (

    <>
    <div style={{ color:"black"}}>
     <MainNav1/>
     </div>
    <div className="bcg">
      
     
    
     
      <br />
      <br />
      <h1 style={{paddingBottom: "15px",marginTop: "80px"}}>Choose Account Type</h1>

      <div className="login-button" style={{ paddingTop: "100px" }}>
        <button className="buttoncustomer" onClick={customerRedirect}>
          <img
            src={user}
            alt="Customer"
            style={{ width: "165px ", height: "150px" }}
          />
          <h5 style={{ color: "black", fontFamily: "sans-serif" }}>User</h5>
        </button>
        <button
          className="buttonemployee"
          onClick={employeeRedirect}
          style={{ marginLeft: "80px" }}
        >
          <img
            src={employee}
            alt="Employee"
            style={{ width: "165px ", height: "150px" }}
          />
          <h5 style={{ color: "black", fontFamily: "sans-serif" }}>Professional</h5>
        </button>
      </div>
    </div>
    </>
  );
}

export default LoginButton;
