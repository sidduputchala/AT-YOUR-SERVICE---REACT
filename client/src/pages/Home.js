import React from 'react'
import HomeNav from '../components/HomeNav.js'
import MainImage from './Images/ays3.png'
import './css/Main.css'
import HomeCleaning from './Images/home_cleaning.svg'
import Appliance from './Images/appliance.svg'
import PackersAndMovers from './Images/packers_movers.svg'
import Salon from './Images/salon.svg'
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
import Footer from '../components/Footer.js'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
  return (
    <div>
      <HomeNav/>
      <img style={{marginTop:"60px"}} id="MainImage" src={MainImage} alt="MainImage" />
    
     
      <h1 style={{"margin-top":"65px",marginBottom:"15px"}}>Our Services</h1>

    <div style={{display:"flex",justifyContent:"center"}}>
    <div className="grad">
      <div className="services">
        <div className="services-name" onClick={()=>{
          navigate('/ays/services/appliances');
        }}>
          <img src={Appliance} alt="Appliance" />
          <h3>Appliances</h3>
        </div>
        <div className="services-name" onClick={()=>{
          navigate('/ays/services/homecleaning');
        }}>
        <img src={HomeCleaning} alt="HomeCleaning" />
        <h3>Home Cleaning</h3>
        </div>
        <div className="services-name" onClick={()=>{
          navigate('/ays/services/packersandmovers')
        }}>
        <img src={PackersAndMovers} alt="PackersAndMovers"/>
        <h3>Packers And Movers</h3>
        </div>
        
        
      </div>


      <div className="services" style={{"margin-bottom":"40px"}}>
      <div className="services-name" onClick={()=>{
          navigate('/ays/services/salon')
        }}>
        <img src={Salon} alt="Salon" />
        <h3>Salon</h3>
      </div>
      <div className="services-name" onClick={()=>{
          navigate('/ays/services/pestcontrol')
        }}>
        <img src={Pestcontrol} alt="PestControl" />
        <h3>Pest Control</h3>
      </div>
        {/* <div className="services-name">
        <img src={Construction} alt="Construction" />
        <h3>Construction</h3>
        </div>
        
        <div className="services-name">
        <img src={Plumbing} alt="Plumbing" />
        <h3>Plumbing</h3>
        </div> */}
        <div className="services-name" onClick={()=>{
          navigate('/ays/services/painting')
        }}>
        <img src={Painting} alt="Painting" />
        <h3>Painting</h3>
        </div>
      </div>


    </div>

</div>



      <div className="service-salon" style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Salon, Spa and Massage Services</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} >
          <img src={Salon_Prime} alt="Salon_Prime" />
          <h5>Salon Prime</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
          <img src={Salon_for_woman} alt="Salon_for_woman" />
          <h5>Salon for women</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Salon_for_men} alt="Salon_for_men" />
          <h5>Salon for men</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Massage_for_men} alt="Massage_for_men" />
          <h5>Massage for men</h5>
        </div>
      </div>

    </div>





    <div className="service-salon" style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Cleaning and Pest Control</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} >
          <img src={Full_home} alt="Full home cleaning" />
          <h5>Full home cleaning</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
          <img src={Bathroom} alt="Bathroom cleaning" />
          <h5>Bathroom cleaning</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Cockroach} alt="Pest Control" />
          <h5>Pest Control</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Sofa} alt="Sofa & Carpet cleaning" />
          <h5>Sofa & Carpet cleaning</h5>
        </div>
      </div>

    </div>



    <div className="service-salon" style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Home Repairs</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} >
          <img src={Elec} alt="Electricians" />
          <h5>Electricians</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
          <img src={Carp} alt="Carpenters" />
          <h5>Carpenters</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Plumb} alt="Plumbers" />
          <h5>Plumbers</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Furniture} alt="Furniture polish" />
          <h5>Furniture polish</h5>
        </div>
      </div>

    </div>


    <div className="service-salon" style={{"margin-top":"120px","margin-bottom":"120px","margin-left":"30px","margin-right":"30px"}}>
      <div className="service-salon-name">
        <h2 style={{"font-family":"sans-serif"}}>Appliances</h2>
      </div>

      <div style={{display:"flex","flex-direction": "row",justifyContent:"center","margin-top":"25px"}}>
        <div className="service-salon-img" style={{margin:"10px"}} >
          <img src={Geyser} alt="Geyser" />
          <h5>Geyser repair</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
          <img src={Water_purifier} alt="Water purifier" />
          <h5>Water purifier</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}}>
        <img src={Air_purifier} alt="Air purifier" />
          <h5>Air purifier</h5>
        </div>
        <div className="service-salon-img" style={{margin:"10px"}} >
          <img src={Geyser} alt="Geyser" />
          <h5>Geyser repair</h5>
        </div>
       
      </div>

    </div>

    
    <Footer/>
  </div>
  )
}

export default Home
