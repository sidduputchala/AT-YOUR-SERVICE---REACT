import React from 'react'
import MainImage from './Images/ays3.png'
import './css/Main.css'
import Footer from '../components/Footer.js'
import {useNavigate} from 'react-router-dom'
import Policy from './Images/adp.jpg'
import Govt from './Images/govtofindia.jpg'
import People from './Images/people.jpg'
import Diff from './Images/diff.jpg'
import Diff2 from './Images/diff2.jpg'

import EmpNav from "../components/EmpNav";


function Employee_home() {
    const navigate=useNavigate();
  return (
    <div style={{backgroundColor:"white"}}>
      <EmpNav />
      <img  id="MainImage" src={MainImage} alt="MainImage" />
        <img style={{marginTop:"60px", width:"1300px"}} id="People" src={People} alt="MainImage" />
        <img style={{marginTop:"20px", width:"1300px"}} id="Diff" src={Diff} alt="MainImage" />
        <img style={{ width:"1300px"}} id="Diff2" src={Diff2} alt="MainImage" />
        <img style={{marginTop:"40px", width:"1300px"}} id="Policy" src={Policy} alt="MainImage" />
        <img style={{marginTop:"10px", width:"1300px"}} id="Govt" src={Govt} alt="MainImage" />
        <Footer/>
  </div>
  )
}

export default Employee_home

