import React from 'react'
import {useContext, useEffect,useState} from "react";
import EmpNav from "../components/EmpNav.js";
import ProfileComp from "../components/ProfileComp.js";
import {store} from '../App.js' 
import { selectUser } from '../Redux/userSlice.js';
import {useSelector } from 'react-redux'

function Empprofile() {

    // const {empdetails, setempDetails} = useContext(store);
    const empuser = useSelector(selectUser);
  return (
    <div>
        <EmpNav />
      <p style={{marginTop:"70px"}}></p>
      <ProfileComp firstName={empuser.firstName} lastName={empuser.lastName} email={empuser.email} phone={empuser.phone} address={empuser.address} city={empuser.city} state={empuser.state} pincode={empuser.pincode}/>      
    </div>
  )
}

export default Empprofile
