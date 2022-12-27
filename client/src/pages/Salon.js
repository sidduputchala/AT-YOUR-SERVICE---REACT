import React, { useContext } from "react";
import HomeNav from "../components/HomeNav.js";
import SalonItem from "../components/SalonItem.js";
import Footer from "../components/Footer.js";
import "./css/Salon.css";
import { store } from "../App.js";
import Salonimg1 from "./Images/salonimg1.jpg";
import Salonimg2 from "./Images/salonimg2.jpg";
import Salonimg3 from "./Images/salonimg3.jpg";
import { useNavigate } from "react-router-dom";

import Collapsible from "react-collapsible";

import { toast } from "react-toastify";
import Axios from "axios";

function Salon() {
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
        <div
          style={{
            marginRight: "70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h1 style={{ "margin-top": "15px", fontFamily: "sans-serif" }}>
              <b>Salon services</b>
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
            <p
              style={{
                textAlign: "left",
                marginTop: "1px",
                width: "400px",
                fontSize: "18px",
                marginTop: "40px",
              }}
              aria-hidden="true"
            >
              Our salon services are high-end services of your needs at your
              doorsteps. Offering a wide range of skin and hair care services
              with experience and excellent staffs. Using high-class
              international products which suit for all types of skins. Our
              motto is to be providing 100% satisfied services at all times. We
              always looking a customers satisfaction, hygienic workstyle, trust
              and workmanships.{" "}
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <iframe
            src="https://youtube.com/embed/rx7bFV_9dWs"
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
        <div className="salon-card">
          <SalonItem
            img={Salonimg1}
            name="Massages, Pedicure & Manicure"
            rating="4.5"
            size="800k"
          /><button
          className="btn btn-primary"
          onClick={() => {
            if (cartItems.filter((e) => e.name === "Massages, Pedicure & Manicure").length > 0) {
              toast.warn("Item already exist in the cart", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            } else {
              setCartItems([
                ...cartItems,
                {
                  name: "Massages, Pedicure & Manicure",
                  type:"salon",
                  img: Salonimg1,
                  rating: "4.5",
                  size: "800k"
                },
              ]);      
              toast.success("Added to Cart!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
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

        <div className="salon-card">
          <SalonItem
            img={Salonimg2}
            name="Hair cut"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (cartItems.filter((e) => e.name === "Hair cut").length > 0) {
                toast.warn("Item already exist in the cart", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else {
                setCartItems([
                  ...cartItems,
                  {
                    name: "Hair cut",
                    img: Salonimg2,
                    type:"salon",
                    rating: "4.5",
                    size: "800k"
                  },
                ]);                   
                toast.success("Added to Cart!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }
            }}
          >  <i
              style={{ marginRight: "8px" }}
              class="fa-solid fa-cart-shopping"
            ></i>
            Add to Cart
          </button>
        </div>

        <div className="salon-card">
          <SalonItem
            img={Salonimg3}
            name="facials & cleanup"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (cartItems.filter((e) => e.name === "facials & cleanup").length > 0) {
                toast.warn("Item already exist in the cart", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else {
                setCartItems([
                  ...cartItems,
                  {
                    name: "facials & cleanup",
                    type:"salon",
                    img: Salonimg3,
                    rating: "4.5",
                    size: "800k"
                  },
                ]);    
                toast.success("Added to Cart!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
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

      <div style={{ display: "flex", marginTop: "200px", marginLeft: "50px" }}>
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
        <div></div>
      </div>

      <div className="salon-faqs">
        <div className="salon-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>What payment types are available?</span>
              <span>+</span>
            </h3>
          >
            <p>We accept Cash</p>
          </Collapsible>
        </div>

        <div className="salon-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Can I cancel my order?</span>
              <span>+</span>
            </h3>
          >
            <p>Yes, you can cancel your order anytime.</p>
          </Collapsible>
        </div>

        <div className="salon-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>What are your hours?</span>
              <span>+</span>
            </h3>
          >
            <p>Week days: 10AM-8PM Weekends: 10AM-5PM</p>
          </Collapsible>
        </div>

        <div className="salon-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Do you do children’s hair?</span>
              <span>+</span>
            </h3>
          >
            <p>We love children and we happily provide services to children.</p>
          </Collapsible>
        </div>

        <div className="salon-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Are you blowdrying hair?</span>
              <span>+</span>
            </h3>
          >
            <p>Yes we will be blowdrying hair in the salon.</p>
          </Collapsible>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Salon;
