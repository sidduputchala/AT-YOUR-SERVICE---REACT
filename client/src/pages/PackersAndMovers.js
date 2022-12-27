import React, { useContext } from "react";
import HomeNav from "../components/HomeNav.js";
import Packers from "../components/PackersItem.js";
import Footer from "../components/Footer.js";
import "./css/PackersAndMovers.css";
import { store } from "../App.js";
import Packersimg1 from "./Images/packersimg1.jpg";
import Packersimg2 from "./Images/packersimg2.jpeg";
import Packersimg3 from "./Images/packersimg3.jpg";
import { useNavigate } from "react-router-dom";

import Collapsible from 'react-collapsible';

import {toast} from 'react-toastify'

function PackersAndMovers() {
  const {cartItems, setCartItems} =useContext(store);
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
              <b>Packers And Movers</b>
             
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
            <p style={{ textAlign: "left", marginTop: "1px", width: "400px", fontSize: "18px", marginTop: "40px" }} aria-hidden="true">Our packers and movers service starts at INR 1500, inclusive of transportation, packing, and labour charges. Prices may vary depending on your apartment size, distance of shifting, quantity of goods to be transported and locality you are residing in. Road tax,toll, parking etc. are not included in the fare. </p>
          </div>
        </div>




        <div style={{marginTop:"20px"}}>
          <iframe
            src="https://youtube.com/embed/9zjB-WJSoos"
            frameborder="0"
            style={{
              // width: "495px",
              // height: "285px",
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



        <div className="packers-card">
          <Packers
            img={Packersimg1}
            name="Store Moving"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {

              if(cartItems.filter(e => e.name === 'Store Moving').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Store Moving",
                  type:"packers and movers",
                  img: Packersimg1,
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


        <div className="packers-card">
          <Packers
            img={Packersimg2}
            name="Office Moving"
            rating="4.3"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if(cartItems.filter(e => e.name === 'Office Moving').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Office Moving",
                  type:"packers and movers",
                  img: Packersimg2,
                  rating: "4.3",
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
        <div className="packers-card">
          <Packers
            img={Packersimg3}
            name="Shop Moving"
            rating="5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {

              if(cartItems.filter(e => e.name === 'Shop Moving').length > 0){
                toast.warn("Item already exist in the cart",{position: toast.POSITION.BOTTOM_RIGHT})
              }
              else{
              setCartItems([
                ...cartItems,
                {
                  name: "Shop Moving",
                  type:"packers and movers",
                  img: Packersimg3,
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
      <div className="packers-faqs">
        <div className="packers-collapsible">
          <Collapsible
            trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Why does the final charges vary from the estimates?
              </span>
              <span>+</span>
            </h3>
            >
            <p>
              Our charges are fixed. What you see is what you pay. Prices are subjected to revision if there is change in the location or final item list. Rates can also change basis the complexity of shifting.
            </p>
          </Collapsible>
        </div>
        <div className="packers-collapsible">
          <Collapsible           
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Do packers and movers dismantle and assemble furnitures?
              </span>
              <span>+</span>
            </h3>       
          >
            <p>
              Yes, we do complete dismantling & assembly of furnitures wherever possible. Most furnitures do not need dismantelling but large beds and dinning tables may be dismantelled to move safely.
            </p>
          </Collapsible>
        </div>



        <div className="packers-collapsible">
          <Collapsible 

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Is there any restriction on material taken by packers and movers?
              </span>
              <span>+</span>
            </h3>
          >

            <p>
              We don't allow flammable goods like Gasoline, Oxygen bottles, Lighter fluid, Matches, Propane cylinders, Nail polish remover, Paints and Fireworks
            </p>
          </Collapsible>
        </div>



        <div className="packers-collapsible">
          <Collapsible
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Are my goods insured?
              </span>
              <span>+</span>
            </h3>
          >
          
          
            <p>
              No, we do not provide insurance for goods, but our partners are professional & well trained to handle your cargo with a lot of care. So you need not worry about your goods being damaged.
            </p>
          </Collapsible>
        </div>



        <div className="packers-collapsible">
          <Collapsible 
          

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              What is the cheapest way to relocate?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
              Our packers & movers help you with complete solution starting from packing the goods, loading unloading, dismantling-assemly etc. But if you have already packed your goods and are ready to do some heavylifting, you can book our mini trucks and save money.
            </p>
          </Collapsible>
        </div>


        <div className="packers-collapsible">
          <Collapsible 
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Does Porter provide Intercity/interstate house shifting service?
              </span>
              <span>+</span>
            </h3>
>

            <p>
              Yes, we do provide intercity/interstate house shifting service.
            </p>
          </Collapsible>
        </div>


        <div className="packers-collapsible">
          <Collapsible 
          
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
              Does Porter provide only labour or helper along with transport for house shifting?
              </span>
              <span>+</span>
            </h3>
          >


            <p>
              Yes, if you have already packed your goods and need help in loading & unloading, you can book Ace helper or 3-wheeler helper from our App. The Driver partner will help you in ground to ground floor movement of goods.
            </p>
          </Collapsible>
        </div>


        <div className="packers-collapsible">
          <Collapsible 

          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
          Do packers and movers pack everything?
          </span>
          <span>+</span>
          </h3>
>


            <p>
              Packers and movers will pack everything safely including fragile and valuable items. Our packers will use bubble wraps, wrapping paper, cardboard boxes, wrapping foam, packing tapes, thermocol sheet so goods will be safely transported but they won't take flammable goods.
            </p>
          </Collapsible>
        </div>


        <div className="packers-collapsible">
          <Collapsible 
          trigger = <h3 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
          How much does packing a house cost?
          </span>
          <span>+</span>
          </h3>
>

            <p>
              Packing charges for a house are dependent on the quantity of goods available for packing and the kind of packing materials required to pack fragile and non-fragile materials. Price also varies on number of bedrooms. Charges for 1 RK/Studio, 1 BHK, 2 BHK, 3BHK are mentioned above. To get an price estimate for packing fill in your details in the “Where do you want to move?” section and we will reach you in 24 hours.
            </p>
          </Collapsible>
        </div>

        <div className="packers-collapsible">
          <Collapsible
          
          trigger = <h3 style={{display: "flex", justifyContent: "space-between" }}>
          <span>
          Are there any additional or hidden charges?
          </span>
          <span>+</span>
          </h3>
>
            <p>
              The quote provided to you includes all the charges. There is no change in the quote unless there is a last minute change in the requirements.
            </p>
          </Collapsible>
        </div>






      </div>



      <Footer />
    </div>
  );
}

export default PackersAndMovers;
