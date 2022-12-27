import React,{useContext} from 'react'
import HomeNav from '../components/HomeNav.js'
import HomeCleaningimg1 from './Images/HomeCleaningimg1.jpg'
import HomeCleaningimg2 from './Images/HomeCleaningimg2.jpg'
import HomeCleaningimg3 from './Images/HomeCleaningimg3.jpg'
import Footer from '../components/Footer.js'
import {useNavigate} from 'react-router-dom'
import {store} from '../App.js'
import Collapsible from 'react-collapsible';
import './css/HomeCleaning.css'
import HomeItem from '../components/HomeItem.js'
import {toast} from 'react-toastify'

function HomeCleaning() {
  const {cartItems, setCartItems}= useContext(store);
    const navigate = useNavigate();
  
    return (
      <div>
        <HomeNav />
        <div
          style={{
            marginTop: "130px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ marginRight: "70px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
            <div>
              <h1 style={{ "margin-top": "15px", fontFamily: "sans-serif" }}>
                <b>Home Cleaning</b>
              </h1>
  
            </div>
  
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <i
                class="fa fa-star"
                style={{ marginTop: "5px", marginRight: "5px" }}
                aria-hidden="true"
              ></i>
              <p>4.8(900k)</p>
            </div>
            <div>
              <p style={{ textAlign: "left", marginTop: "1px", width: "400px", fontSize: "18px", marginTop: "40px" }} aria-hidden="true">An in-depth and thorough house cleaning, the Intensive Cleaning service covers wet wiping of walls, internal cleaning of empty cabinets, kitchen cabinets, and many other such additional features. This service conducts an immaculate cleaning of the house, and an extensive cleansing of the sofa. It also includes dry vacuuming, chemical foam cleaning and scrubbing, etc. </p>
            </div>
          </div>
  
  
  
  
          <div style={{marginTop:"20px"}}>
            <iframe
              src="https://youtube.com/embed/fyI410zm2_A"
              frameborder="0"
              style={{
                width: "675px",
                height: "382px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
  
        <hr
          style={{
            marginTop: "50px",
            marginBottom: "40px",
            width: "52%",
            height: "3px",
          }}
        ></hr>
  
        <div
          style={{
            margin: "80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
  
  
  
          <div className="homecleaning-card">
            <HomeItem
              img={HomeCleaningimg1}
              name="Bathroom & Kitchen Cleaning"
              rating="4.5"
              size="800k"
                />
            <button
              className="btn btn-primary"
              onClick={() => {

                if(cartItems.filter(e => e.name === 'Bathroom & Kitchen Cleaning').length > 0){
                  toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
                }
                else{

                setCartItems([
                  ...cartItems,
                  {
                    name: "Bathroom & Kitchen Cleaning",
                    type:"home cleaning",
                    img: HomeCleaningimg1,
                    rating: "4.5",
                    size: "800k"
                  },
                ]);
                toast.success('Added to Cart!', {position: toast.POSITION.BOTTOM_RIGHT})
              }
    
              }}
            >
              <i
                style={{ marginRight: "8px" }}
                class="fa-solid fa-cart-shopping"
              ></i>
              Add to Cart
            </button>
          </div>
          <div className="homecleaning-card">
            <HomeItem
              img={HomeCleaningimg2}
              name="Furniture & Carpet Cleaning"
              rating="5"
              size="800k"/>
            <button
              className="btn btn-primary"
              onClick={() => {
                if(cartItems.filter(e => e.name === 'Furniture & Carpet Cleaning').length > 0){
                  toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
                }
                else{
                setCartItems([
                  ...cartItems,
                  {
                    name: "Furniture & Carpet Cleaning",
                    type:"home cleaning",
                    img: HomeCleaningimg2,
                    rating: "5",
                    size: "800k"
                  },
                ]);
               toast.success('Added to Cart!', {position: toast.POSITION.BOTTOM_RIGHT})
              }
              }}
            >
              <i
                style={{ marginRight: "8px" }}
                class="fa-solid fa-cart-shopping"
              ></i>
              Add to Cart
            </button>
          </div>
          <div className="homecleaning-card">
            <HomeItem
              img={HomeCleaningimg3}
              name="Full Home Cleaning"
              rating="4.5"
              size="800k"
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                if(cartItems.filter(e => e.name === 'Full Home Cleaning').length > 0){
                  toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
                }
                else{
                setCartItems([
                  ...cartItems,
                  {
                    name: "Full Home Cleaning",
                    type:"home cleaning",
                    img: HomeCleaningimg3,
                    rating: "4.5",
                    size: "800k"
                  },
                ]);
                toast.success('Added to Cart!', {position: toast.POSITION.BOTTOM_RIGHT})
              }}
            }
            >
              <i
                style={{ marginRight: "5px" }}
                class="fa-solid fa-cart-shopping"
              ></i>
              Add to Cart
            </button>
          </div>
        </div>
  
  
  
        <div style={{ display: "flex", marginTop: "200px" ,marginLeft: "50px" }}>
          <h1>General FAQs</h1>
        </div>
  
        <hr
          style={{
            marginTop: "0px",
            marginBottom: "40px",
            width: "52%",
            height: "3px",
          }}
        ></hr>
  
       
  
  
  
  
        <div className="homecleaning-faqs">
  
          <div className="homecleaning-collapsible">
            <Collapsible
  
              trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                What is a Home cleaning service?
                </span>
                <span>+</span>
              </h3>
            >
  
              <p>
              A home cleaning service provides a thorough cleaning of your home and tackles critical areas that are otherwise missed during the normal daily cleaning processes.

               </p>
            </Collapsible>
          </div>
  
  
          <div className="homecleaning-collapsible">
            <Collapsible 
            
            
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                What to expect when we opt for a cleaning service?
                </span>
                <span>+</span>
              </h3>
            
            
            >
              <p>
              Look for professional cleaning with necessary machinery and safety equipment, sterilisation, cleaning of cupboards, cabinets, under furniture areas, etc.
              </p>
            </Collapsible>
          </div>
  
  
  
          <div className="homecleaning-collapsible">
            <Collapsible 
  
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                How often should I get my house cleaned?
                </span>
                <span>+</span>
              </h3>
            >
  
              <p>
              This depends on various factors such as location of your house, distance from the main road, whether youre living in a rural or metropolitan area, among many others. Apart from the daily cleaning of your house, a deep cleaning should be done at least once every two to four months.
              </p>
            </Collapsible>
          </div>
  
  
  
          <div className="homecleaning-collapsible">
            <Collapsible
            
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                Cleaning Services takes how much time?
                </span>
                <span>+</span>
              </h3>
            >
            
            
              <p>
              Since deep cleaning involves cleaning every surface and appliance, on an average, it takes 6-8 hours duration. But it mainly depends on the size of the home and the amount of dirt in homes.
              </p>
            </Collapsible>
          </div>
  
  
  
          
  
  
  
  
        </div>
  
  
  
        <Footer />
      </div>
  )
}

export default HomeCleaning
