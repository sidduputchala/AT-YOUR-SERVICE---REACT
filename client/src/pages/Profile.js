import React,{useContext, useEffect,useState} from "react";
import HomeNav from "../components/HomeNav.js";
import ProfileComp from "../components/ProfileComp.js";
import {store} from '../App.js'
import Axios from 'axios'



function Profile() {
  const {cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist}=useContext(store);
  const [profileData,setProfileData] = useState({})

  // useEffect(()=>{
  //   if(userdetails.email===""){
  //     window.location.href="/login";
  //   }
  //   else{
  //     console.log(userdetails);
  //     Axios.get(`http://localhost:3001/users?email=${userdetails.email}`).then((res)=>{
  //       console.log(res.data);
  //       setProfileData(res.data[0]);
  //     })

  //   }

  // },[userdetails])


  return (
    <div>
      <HomeNav />
      <p style={{marginTop:"70px"}}></p>
      <ProfileComp firstName={userdetails.firstName} lastName={userdetails.lastName} email={userdetails.email} phone={userdetails.phone} address={userdetails.address} city={userdetails.city} state={userdetails.state} pincode={userdetails.pincode}/>
    </div>
  );
}

export default Profile;
