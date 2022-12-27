import React, { useContext, useState } from "react";
import HomeNav from "../components/HomeNav.js";
import { store } from "../App.js";
import axios from "axios";
import "./css/Settings.css";
import Footer from "../components/Footer.js";
import {toast} from "react-toastify";

function Settings() {
  const {
    cartItems,
    setCartItems,
    userdetails,
    setUserDetails,
    orderslist,
    setOrderslist,
 } = useContext(store);
  const [imageurl, setImageurl] = useState(`${userdetails.imgurl}`);

  if (imageurl=="undefined")
    setImageurl("https://bootdey.com/img/Content/avatar/avatar7.png");
 
const Change =async(inputimage)=> {
    const formData = new FormData();
    formData.append("file", inputimage);
    formData.append("upload_preset", "ghyxgput");
    formData.append("cloud_name", "dy27czstf");
    await axios.post(
      "https://api.cloudinary.com/v1_1/dy27czstf/image/upload", formData).then((response)=>
      {
        axios.patch(`http://localhost:3001/users/${userdetails.id}`,{imgurl:response.data.secure_url})
       setImageurl(response.data.secure_url);
      })
  }

  const [obj, setObj] = useState({
    firstname: userdetails.firstName,
    lastname: userdetails.lastName,
    email: userdetails.email,
    phone: userdetails.phone,
    address: userdetails.address,
    city: userdetails.city,
    state: userdetails.state,
    pincode: userdetails.pincode,
  });

  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");
  const [addressMsg, setAddressMsg] = useState("");
  const [cityMsg, setCityMsg] = useState("");
  const [stateMsg, setStateMsg] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObj({ ...obj, [name]: value });
  };

  const updateUserProfile = () => {
    if (obj.firstname === "") {
      setFirstNameMsg("First name is required!");
    } else if (obj.lastname === "") {
      setLastNameMsg("Last name is required!");
    } else if (obj.email === "" || !obj.email.includes("@")) {
      setEmailMsg("Enter valid email!");
    } else if (obj.phone === "" || !obj.phone.match(/^[0-9]{10}$/)) {
      setPhoneMsg("Enter valid phone number!");
    } else if (obj.address === "") {
      setAddressMsg("Address is required!");
    } else if (obj.city === "") {
      setCityMsg("City is required!");
    } else if (obj.state === "") {
      setStateMsg("State is required!");
    } else if (obj.pincode === "" || !obj.pincode.match(/^[0-9]{6}$/)) {
      setPincodeMsg("Enter valid pincode!");
    } else {
      setUserDetails({
        ...userdetails,
        firstName: obj.firstname,
        lastName: obj.lastname,
        email: obj.email,
        phone: obj.phone,
        address: obj.address,
        city: obj.city,
        state: obj.state,
        pincode: obj.pincode,
        imgurl:imageurl,
      });

      axios.patch(`http://localhost:3001/users/${userdetails.id}`, {
        firstName: obj.firstname,
        lastName: obj.lastname,
        email: obj.email,
        phone: obj.phone,
        address: obj.address,
        city: obj.city,
        state: obj.state,
        pincode: obj.pincode,
        imgurl:imageurl,
      })
        .then((res) => {
          toast.success("Profile updated successfully!",{position: toast.POSITION.BOTTOM_RIGHT});
          console.log(userdetails);
        })
        .catch((err) => {
          alert("Error updating profile!");
        });
    }
  };

  return (
    <>
      <HomeNav />

      <div
        className="cart-header"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <h1 style={{ "margin-top": "0px", marginLeft: "50px",marginTop:"70px" }}>
          <i style={{ marginRight: "20px" }} class="fas fa-edit"></i>
          Update your profile
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>

      <div style={{ paddingTop: "3em" }}>
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body" style={{ height: "130%" }}>
                  <div className="account-settings">
                    <div id="user-profile" className="user-profile">
                      <div id="usera-avatar" className="user-avatar">
                     <label for="filetoupload">

                      <div
                        className="profile-pic"
                        style={{ backgroundImage: `url(${imageurl})` }}>
                        <i className="fa fa-camera icon"></i><span>Change Image</span>
                      </div>

                          </label>
                       <input type="file" accept="Image/*" name="filetoupload" id="filetoupload" onChange={(e)=>{Change(e.target.files[0]);
        }}></input>
                      </div>
                      <h5 style={{marginTop:"15px"}}id="user-name" className="user-name">
                        {userdetails.firstName}
                      </h5>
                      <h6 id="user-email" className="user-email">
                        {userdetails.email}
                      </h6>
                    </div>
                    <div id="about" className="about">
                      <h5 id="h5">About</h5>
                      <p id="p">
                        I'm {userdetails.firstName} {userdetails.lastName}. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h3 className="mb-2 text-dark">Personal Details</h3>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">First Name</label>

                        <input
                          type="text"
                          name="firstname"
                          value={obj.firstname}
                          className="form-control"
                          style={{ marginBottom: "1em" }}
                          id="fullname"
                          placeholder="First name"
                          onChange={(e) => {
                            setFirstNameMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{firstNameMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Last Name</label>
                        <input
                          type="url"
                          name="lastname"
                          value={obj.lastname}
                          className="form-control"
                          style={{ marginBottom: "1em" }}
                          id="website"
                          placeholder="Last Name"
                          onChange={(e) => {
                            setLastNameMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{lastNameMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="eMail">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={obj.email}
                          className="form-control"
                          style={{ marginBottom: "1em" }}
                          id="eMail"
                          placeholder="Email ID"
                          onChange={(e) => {
                            setEmailMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{emailMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={obj.phone}
                          className="form-control"
                          style={{ marginBottom: "1em" }}
                          id="phone"
                          placeholder="Phone number"
                          onChange={(e) => {
                            setPhoneMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{phoneMsg}</p>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h3 className="mt-3 mb-2 text-dark">Address</h3>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="Street">Addresss</label>
                        <input
                          type="name"
                          name="address"
                          value={obj.address}
                          className="form-control"
                          style={{ marginBottom: "1em" }}
                          id="Street"
                          placeholder="Street"
                          onChange={(e) => {
                            setAddressMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{addressMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="ciTy">City</label>
                        <input
                          type="name"
                          name="city"
                          value={obj.city}
                          className="form-control"
                          id="ciTy"
                          placeholder="City"
                          onChange={(e) => {
                            setCityMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{cityMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="sTate">State</label>
                        <input
                          type="text"
                          name="state"
                          value={obj.state}
                          className="form-control"
                          id="sTate"
                          placeholder="State"
                          onChange={(e) => {
                            setStateMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{stateMsg}</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="zIp">Zip Code</label>
                        <input
                          type="text"
                          name="pincode"
                          value={obj.pincode}
                          className="form-control"
                          id="zIp"
                          placeholder="Zip Code"
                          onChange={(e) => {
                            setPincodeMsg("");
                            handleInputs(e);
                          }}
                        />
                      </div>
                      <p style={{ color: "red" }}>{pincodeMsg}</p>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div
                        className="text-right "
                        style={{ marginTop: "30px" }}
                      >
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          style={{ margin: "10px" }}
                          onClick={() => {
                            updateUserProfile();
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "170px" }}>
        <Footer />
      </div>
    </>
  );
}

export default Settings;