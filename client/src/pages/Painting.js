import React,{useContext} from 'react'
import HomeNav from '../components/HomeNav.js'
import PaintingItem from "../components/PaintingItem.js";
import Footer from "../components/Footer.js";
import "./css/Painting.css";
import { store } from "../App.js";
import Paintingimg1 from "./Images/paintingimg1.webp";
import Paintingimg2 from "./Images/paintingimg2.jpeg";
import Paintingimg3 from "./Images/paintingimg3.jpg";
import { useNavigate } from "react-router-dom";

import Collapsible from 'react-collapsible';
import {toast} from 'react-toastify'



function Painting() {


  const {cartItems, setCartItems}= useContext(store);
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
              <b>Painting</b>            
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
            <p>4.4(500k)</p>
          </div>
          <div>
            <p style={{ textAlign: "left", marginTop: "1px", width: "400px", fontSize: "18px", marginTop: "40px" }} aria-hidden="true">Get your house ready for its periodic paint job. Well, we provide you with the best painting contractors, who offer house painting services at affordable prices. Not only that, they work with 100% genuine paints and vacuum sanding machines, and ensure laser-accurate measurements, dedicated supervision by a project manager, furniture protection and on-time project completion. So, book one of our top house painters right away! </p>
          </div>
        </div>
        <div style={{marginTop:"20px"}}>
          <iframe
            src="https://youtube.com/embed/P9WXytzXz3k"
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
        <div className="painting-card">
          <PaintingItem
            img={Paintingimg1}
            name="Wood Finishing"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {

              if(cartItems.filter(e => e.name === 'Wood Finishing').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Wood Finishing",
                  type:"painting",
                  img: Paintingimg1,
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


        <div className="painting-card">
          <PaintingItem
            img={Paintingimg2}
            name="Water Proofing"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if(cartItems.filter(e => e.name === 'Water Proofing').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Water Proofing",
                  type:"painting",
                  img: Paintingimg2,
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
        <div className="painting-card">
          <PaintingItem
            img={Paintingimg3}
            name="Wall Textures"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if(cartItems.filter(e => e.name === 'Wall Textures').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Wall Textures",
                  type:"painting",
                  img: Paintingimg3,
                  rating: "4.5",
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
      <div className="painting-faqs">

        <div className="painting-collapsible">
          <Collapsible
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              What are the benefits of the painting service?
              </span>
              <span>+</span>
            </h3>
          >

            <p>
            Enhanced safety,Trained professionals,Colour consultation,Accurate quotes,Regular site supervision,Automated painting tools,Furniture and floor covering,Eco-friendly products,Post-painting site clean-up and sanitisation.
            </p>
          </Collapsible>
        </div>


        <div className="painting-collapsible">
          <Collapsible 
          
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              How long will the painting take to complete?
              </span>
              <span>+</span>
            </h3>
          
          
          >
            <p>
            This depends on the scale of the project and requirements like numbers of rooms/floors to be painted, the prep work involved and the touch up. Weather conditions need to be factored in as well.

            </p>
          </Collapsible>
        </div>



        <div className="painting-collapsible">
          <Collapsible 

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              How safe is the painting service?
              </span>
              <span>+</span>
            </h3>
          >

            <p>
            Extensive hygiene and safety measures have been put in place to mitigate the risks for our staff and customers alike.

            </p>
          </Collapsible>
        </div>



        <div className="painting-collapsible">
          <Collapsible
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Who will paint my house?
              </span>
              <span>+</span>
            </h3>
          >
          
          
            <p>
            Our dedicated team of painters are trained and have in-depth product knowledge. They are well-versed with the product application techniques to deliver professional results.
            </p>
          </Collapsible>
        </div>



        <div className="painting-collapsible">
          <Collapsible 
          

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Will you assist in covering and moving furniture before and after painting?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
            Yes, our painting staff will do all the prep work prior to painting and do post painting clean-up of your home, leaving your home clean and spotless. 
            </p>
          </Collapsible>
        </div>


        

            


        



      </div>



      <Footer />
    </div>
  )
}

export default Painting
