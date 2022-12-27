import React,{useContext} from 'react'
import HomeNav from '../components/HomeNav.js'

import PestItem from "../components/PestItem.js";
import Footer from "../components/Footer.js";
import "./css/PestControl.css";
import { store } from "../App.js";
import PestControlimg1 from "./Images/pestcontrolimg1.jpg";
import PestControlimg2 from "./Images/pestcontrolimg2.jpg";
import PestControlimg3 from "./Images/pestcontrolimg3.jpg";
import { useNavigate } from "react-router-dom";

import Collapsible from 'react-collapsible';

import {toast} from 'react-toastify'


function PestControl() {


  const {cartItems, setCartItems} = useContext(store);
  const navigate = useNavigate();

  return (
    <div>
         <HomeNav/>  
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
              <b>Pest Control</b>
              
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
            <p>4.5(800k)</p>
          </div>
          <div>
            <p style={{ textAlign: "left", marginTop: "1px", width: "400px", fontSize: "18px", marginTop: "40px" }} aria-hidden="true">Get Pest Treatment near you for a long lasting protection against cockroaches. Our unique 2-step process ensures a 3-month warranty against recurring cockroaches. We will help you take away the struggle of spraying regularly to fight hidden cockroaches in your kitchen and bathroom as this unique service ensures that even the hidden larvae are killed. Ensure a hygienic home, kitchen and bathroom with our Pest Treatment and don’t worry about recurring cockroaches anymore. </p>
          </div>
        </div>
        <div style={{marginTop:"20px"}}>
          <iframe
            src="https://youtube.com/embed/rVps7bb5FSE"
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
        <div className="pestcontrol-card">
          <PestItem
            img={PestControlimg1}
            name="Garden Pest Control"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {

              if(cartItems.filter(e => e.name === 'Garden Pest Control').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Garden Pest Control",
                  type:"pest control",
                  img: PestControlimg1,
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
        <div className="pestcontrol-card">
          <PestItem
            img={PestControlimg2}
            name="Full Home pestcontrol"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {

              if(cartItems.filter(e => e.name === 'Full Home pestcontrol').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Full Home pestcontrol",
                  type:"pest control",
                  img: PestControlimg2,
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
        <div className="pestcontrol-card">
          <PestItem
            img={PestControlimg3}
            name="Kitchen Pest Control"
            rating="5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if(cartItems.filter(e => e.name === 'Kitchen Pest Control').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Kitchen Pest Control",
                  type:"pest control",
                  img: PestControlimg3,
                  rating: "5",
                  size: "800k"
                },
              ]);
              toast.success('Added to Cart!', {position: toast.POSITION.BOTTOM_RIGHT})
            }
            }}
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

      <div style={{ display: "flex" }}>
        <div>
        </div>
      </div>
      <div className="pestcontrol-faqs">
        <div className="pestcontrol-collapsible">
          <Collapsible
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              What will the first visit include?
              </span>
              <span>+</span>
            </h3>
          >

            <p>
            Spraying of a diluted liquid chemical in all infested areas of the house.

            </p>
          </Collapsible>
        </div>


        <div className="pestcontrol-collapsible">
          <Collapsible 
          
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Is the service safe for children and pets?
              </span>
              <span>+</span>
            </h3>
          
          
          >
            <p>
            Yes, it is safe. However, it is advisable to keep children and pets away from sprayed surfaces till they are dry and keep an eye on them so they do not touch the surfaces later.
            </p>
          </Collapsible>
        </div>



        <div className="pestcontrol-collapsible">
          <Collapsible 

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Will I have to empty the kitchen before the visit?
              </span>
              <span>+</span>
            </h3>
          >

            <p>
            Yes, customers need to empty the kitchen before the 1st visit.
            </p>
          </Collapsible>
        </div>



        <div className="pestcontrol-collapsible">
          <Collapsible
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              What safety precautions are needed?
              </span>
              <span>+</span>
            </h3>
          >
          
          
            <p>
            The customers should not touch any sprayed surfaces till they are dry. Once chemical dries, do not wash the surface with water and soap, only a dry cloth.

            </p>
          </Collapsible>
        </div>



        <div className="pestcontrol-collapsible">
          <Collapsible 
          

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Will the professional place back the utensils in my kitchen?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
            No, the customer needs to wait 1-2 hours till the chemical is dry to place back the utensils.
            </p>
          </Collapsible>
        </div>


        

            


        



      </div>



      <Footer />
    </div>
  )
}

export default PestControl
