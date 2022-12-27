import {React,useContext} from 'react'
import { store } from "../App.js"
import aysimage from './Images/ays.jpg';
import {Link} from 'react-router-dom'
import './css/HomeNav.css'


const HomeNav = () => {
  const {cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist}  = useContext(store);
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
        <a className="navbar-brand">
           <img style={{width:"100px",height:"45px","margin-left":"70px"}} src={aysimage} alt="#" />
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"font-size":"18px","margin-right":"30px"}}>
      <ul style={{"margin-right":"35px"}} className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to="/ays/home"> <a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/ays/about"><a className="nav-link active" aria-current="page" href="#">About</a></Link>
        </li>
        <li className="nav-item">
        </li>
        
        <li className="nav-item dropdown">
          <a style={{color:"black"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <Link to="/ays/services/homecleaning"><li><a className="dropdown-item" href="#">Home Cleaning</a></li></Link>
            <Link to="/ays/services/appliances"><li><a className="dropdown-item" href="#">Appliances</a></li></Link>
            <Link to="/ays/services/packersandmovers"><li><a className="dropdown-item" href="#">Packers And Movers</a></li></Link>
            <Link to="/ays/services/salon"><li><a className="dropdown-item" href="#">Salon</a></li></Link>
            <Link to="/ays/services/pestcontrol"><li><a className="dropdown-item" href="#">Pest Control</a></li></Link>
            <Link to="/ays/services/painting"><li><a className="dropdown-item" href="#">Painting</a></li></Link>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a style={{color:"black"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <Link to="/ays/profile"><li><a className="dropdown-item" href="#"><i  style={{marginRight:"15px",fontSize:"18px"}} class="fas fa-user-circle"></i>Profile</a></li></Link>
            <Link to="/ays/orders"><li><a className="dropdown-item" href="#"> <i  style={{marginRight:"15px",fontSize:"18px"}}  class="fas fa-shopping-bag"></i>Orders</a></li></Link>              
            <Link to="/ays/contactus"><a className="dropdown-item" aria-current="page" href="#"><i   style={{marginRight:"15px",fontSize:"18px"}} class="fas fa-phone"></i>Contact</a></Link>
            <li><hr class="dropdown-divider"/></li>
            
           <Link to="/ays/settings"><li><a class="dropdown-item" href="#"><i style={{marginRight:"15px",fontSize:"18px"}} class="fa fa-cog"></i>Settings</a></li></Link>         
          <Link to="/"><li><a class="dropdown-item" href="#"><i style={{marginRight:"15px",fontSize:"18px"}} class="fa fa-sign-out" aria-hidden="true"></i>
Logout</a></li></Link>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/ays/cart"><a className="nav-link active position-relative" > <i  style={{marginRight:"5px",fontSize:"23px"}} class="fa-solid fa-cart-shopping"></i> <span  style={{color:"white" ,fontSize:"15px",backgroundColor:"rgba(255,103,108.977"}} class=" top-0 start-100 translate-middle badge rounded-circle">
    {cartItems.length}

  </span>
 </a></Link>                 

{/* <button type="button" class="btn btn-light position-relative">
<Link to="/ays/cart"><i style={{fontSize:"25px"}}  class="fa-solid fa-cart-shopping"></i> </Link><span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-8">{cartItems.length}<span  class="visually-hidden">unread messages</span></span>
</button> */}
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HomeNav