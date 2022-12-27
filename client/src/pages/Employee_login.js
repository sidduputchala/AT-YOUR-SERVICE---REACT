import React, { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";
import MainNav from "../components/MainNav";
import {store}from "../App.js" 
import {toast} from 'react-toastify'
import Axios from "axios";
import { useDispatch } from "react-redux";
import {login} from '../Redux/userSlice.js'

function Employee_login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [pmsg, setPmsg] = useState("");
  const [imsg, setImsg] = useState("");
  const {empdetails,setempDetails}=useContext(store);
  const [passwordType, setPasswordType] = useState("password");
 

  const dispatch = useDispatch();
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      e.preventDefault();
      setMsg("Enter your email!");
    } else if (!email.includes("@")) {
      e.preventDefault();
      setMsg("Enter a valid email!");
    } else if (password === "") {
      e.preventDefault();
      setPmsg("Enter your password!");
    } 
    else {
      Axios.get(
        `http://localhost:3001/employees?email=${email}`
      ).then((res) => {
        console.log("emp details is :",res.data)
        if (res.data.length > 0) {
          setempDetails(res.data[0])
          
          dispatch(login({
            email:res.data[0].email,
            firstName:res.data[0].firstName,
            lastName:res.data[0].lastName,
            phone:res.data[0].phone,
            address:res.data[0].address,
            city:res.data[0].city,
            state:res.data[0].state,
            pincode:res.data[0].pincode,
            id:res.data[0].id
          }))
          alert("Login successful!");
          navigate("/Employee_home");
        } else {
          toast.error('Invalid Username or Password!', {position: toast.POSITION.BOTTOM_RIGHT})
        }
      });
    }
  };

  return (
    <>
    <MainNav/>
     <img style={{height:"650px"}} src="./indeximage.jpg"/>
        <div>
          {/* <h5 style={{ color: "red" }}>{imsg}</h5> */}
        </div>

        <form className="form_l" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3>Login Here</h3>
          <p style={{ color: "red" }}>{pmsg}</p>
          <div className="input__box">
            <label className="label_l" for="username"><p className="names">Username</p></label>
            <input className="input_l"
              type="text"
              id="username"
              name="email"
              placeholder="Email"
              required="required"
              onChange={(e) => {
                setMsg("")
                setImsg("")
                setEmail(e.target.value);
              }}
            />
              <p style={{ color: "red" }}>{msg}</p>
          </div>

         

          <div className="input__box">
            <label for="password"><p className="names">Password</p></label>
            <input className="input_l"
              type={passwordType}
              id="password"
              name="password"
              required="required"
              placeholder="Password"
              onChange={(e) => {
                setPmsg("")
                setImsg("")
                setPassword(e.target.value);
              }}
            />
             <p style={{ color: "red" }}>{pmsg}</p>
          </div>

          {/* <div  style={{"margin-top":"3px",cursor: "pointer"}} onClick={togglePassword}>
                { passwordType==="password"? <i className="fa fa-eye-slash" style={{"font-size":"18px"}}></i> :<i className="fa fa-eye" style={{"font-size":"18px"}}></i> }
              </div>
               */}
          {/* </div> */}

  
          <div className="input__box">
            <button type="submit" className="button_l">
              Log in
            </button>
          </div>
          <p class="forget">Don't have an account? <Link to="/register">Sign up</Link> </p>
        
        </form>
       
</>
  );
}

export default Employee_login;