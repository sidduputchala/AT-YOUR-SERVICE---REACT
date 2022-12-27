import React from 'react'
import MainNav1 from '../components/MainNav1'
import MainImage from './Images/ays3.png'
import './css/Main.css'
import HomeCleaning from './Images/home_cleaning.svg'
import Appliance from './Images/appliance.svg'
import PackersAndMovers from './Images/packers_movers.svg'
import Salon from './Images/salon.svg'
import Footer from '../components/Footer'
import Pestcontrol from './Images/pestcontrol.svg'
import Construction from './Images/construction.svg'
import Plumbing from './Images/plumbing.svg'
import Painting from './Images/painting.svg'
import Salon_Prime from './Images/salon_prime.png'
import Salon_for_woman from './Images/salon_for_woman.png'
import Salon_for_men from './Images/salon_for_men.png'
import Massage_for_men from './Images/massage_for_men.png' 
import Full_home from './Images/full_home.png'
import Bathroom from './Images/bathroom.png'
import Cockroach from './Images/cockroach.png'
import Sofa from './Images/sofa.png'
import Elec from './Images/elec_img.png'
import Carp from './Images/carp_img.png'
import Plumb from './Images/plumb_img.png'
import Furniture from './Images/furniture_img.png'
import Geyser from './Images/geyser.png'
import Water_purifier from './Images/water_purifier.png'
import Air_purifier from './Images/air_purifier.png'
import {useNavigate,Link} from 'react-router-dom'
import aysimage from '../components/Images/ays.jpg';

function Main() {


  const navigate = useNavigate();


  return (
    <div>

     

      <MainNav1/>
      <img id="MainImage" src={MainImage} alt="MainImage" />
      <h1 style={{"margin-top":"75px","font-family":"sans-serif",marginBottom:"15px"}}>Our Services</h1>
      

      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="grad">

      <div className="services">
        <div className="services-name" onClick={()=>{
          navigate('/login');
        }}>
          <img src={Appliance} alt="Appliance" />
          <h4>Appliances</h4>
        </div>
        <div className="services-name" onClick={()=> navigate("/login")}>
        <img src={HomeCleaning} alt="HomeCleaning" />
        <h4>Home Cleaning</h4>
        </div>
        <div className="services-name" onClick={()=> navigate("/login")} >
        <img src={PackersAndMovers} alt="PackersAndMovers"/>
        <h4>Packers And Movers</h4>
        </div>
       
       
      </div>



      <div className="services" style={{"margin-bottom":"40px"}}>

      <div className="services-name" onClick={()=> navigate("/login")}>
        <img src={Salon} alt="Salon" />
        <h4>Salon</h4>
        </div>

      <div className="services-name" onClick={()=> navigate("/login")}>     
        <img src={Pestcontrol} alt="PestControl" />
        <h4>Pest Control</h4>
        </div>
        {/* <div className="services-name" onClick={()=> navigate("/login")}>
        <img src={Construction} alt="Construction" />
        <h4>Construction</h4>
        </div> */}
        
        {/* <div className="services-name" onClick={()=> navigate("/login")}>
        <img src={Plumbing} alt="Plumbing" />
        <h4>Plumbing</h4>
        </div> */}
        <div className="services-name" onClick={()=> navigate("/login")}>
        <img src={Painting} alt="Painting" />
        <h4>Painting</h4>
    </div>

    </div>
</div>
    </div>


    <div className="service-salon" style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Salon, Spa and Massage Services</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")} >
          <img src={Salon_Prime} alt="Salon_Prime" />
          <h5>Salon Prime</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
          <img src={Salon_for_woman} alt="Salon_for_woman" />
          <h5>Salon for women</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Salon_for_men} alt="Salon_for_men" />
          <h5>Salon for men</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Massage_for_men} alt="Massage_for_men" />
          <h5>Massage for men</h5>
        </div>
      </div>

    </div>





    <div className="service-salon"  style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name" onClick={()=> navigate("/login")}>
        <h2 style={{"font-family":"sans-serif"}}>Cleaning and Pest Control</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
          <img src={Full_home} alt="Full home cleaning" />
          <h5>Full home cleaning</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}> 
          <img src={Bathroom} alt="Bathroom cleaning" />
          <h5>Bathroom cleaning</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Cockroach} alt="Pest Control" />
          <h5>Pest Control</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Sofa} alt="Sofa & Carpet cleaning" />
          <h5>Sofa & Carpet cleaning</h5>
        </div>
      </div>

    </div>



    <div className="service-salon"  style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Home Repairs</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")} >
          <img src={Elec} alt="Electricians" />
          <h5>Electricians</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
          <img src={Carp} alt="Carpenters" />
          <h5>Carpenters</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Plumb} alt="Plumbers" />
          <h5>Plumbers</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Furniture} alt="Furniture polish" />
          <h5>Furniture polish</h5>
        </div>
      </div>

    </div>


    <div className="service-salon"  style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Appliances</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")} >
          <img src={Geyser} alt="Geyser" />
          <h5>Geyser repair</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
          <img src={Water_purifier} alt="Water purifier" />
          <h5>Water purifier</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
        <img src={Air_purifier} alt="Air purifier" />
          <h5>Air purifier</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} onClick={()=> navigate("/login")}>
          <img src={Geyser} alt="Geyser" />
          <h5>Geyser repair</h5>
        </div>
       
      </div>

    </div>  


      <Footer/>
    </div>
  )
}

export default Main
