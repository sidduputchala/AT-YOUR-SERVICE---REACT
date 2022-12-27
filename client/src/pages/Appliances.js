import React, { useContext } from "react";
import HomeNav from "../components/HomeNav.js";

import ApplianceItem from "../components/ApplianceItem.js";
import Footer from "../components/Footer.js";
import "./css/Appliance.css";
import { store } from "../App.js";
import Applianceimg1 from "./Images/geyser.png";
import Applianceimg2 from "./Images/air_purifier.png";
import Applianceimg3 from "./Images/water_purifier.png";
import { useNavigate } from "react-router-dom";

import Collapsible from "react-collapsible";
import { toast } from "react-toastify";

function Appliances() {
  const {cartItems, setCartItems} = useContext(store);
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
              <b>Appliances</b>
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
            <p>4.6(700k)</p>
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
              Our service is committed to delivering high quality service and
              competitive rates to our customers. Our fully trained technicians
              can diagnose any issue with your major appliances, no matter the
              brand or model. Our service provides prompt, professional, fairly
              priced appliance repairs to clients.
            </p>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <iframe
            src="https://youtube.com/embed/wWnv9mS0V3g"
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
        <div className="appliance-card">
          <ApplianceItem
            img={Applianceimg1}
            name="Geyser"
            rating="4.5"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (cartItems.filter((e) => e.name === "Geyser").length > 0) {
                toast.warn("Item already exist in the cart", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else {
                setCartItems([
                  ...cartItems,
                  {
                    name: "Geyser",
                    type: "appliances",
                    img: Applianceimg1,
                    rating: "4.5",
                    size: "800k",
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

        <div className="appliance-card">
          <ApplianceItem
            img={Applianceimg2}
            name="Air purifier"
            rating="4"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (
                cartItems.filter((e) => e.name === "Air purifier").length > 0
              ) {
                toast.warn("Item already exist in the cart", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else {
                setCartItems([
                  ...cartItems,
                  {
                    name: "Air purifier",
                    type: "appliances",
                    img: Applianceimg2,
                    rating: "4",
                    size: "800k",
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

        <div className="appliance-card">
          <ApplianceItem
            img={Applianceimg3}
            name="Water purifier"
            rating="4"
            size="800k"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (
                cartItems.filter((e) => e.name === "Water purifier").length > 0
              ) {
                toast.warn("Item already exist in the cart", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else {
                setCartItems([
                  ...cartItems,
                  {
                    name: "Water purifier",
                    type: "appliances",
                    img: Applianceimg3,
                    rating: "4",
                    size: "800k",
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

      <div className="appliance-faqs">
        <div className="appliance-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                Why is it necessary to seek professional help in cleaning home
                appliances?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
              To increase the productivity of your home appliances, keep in mind
              the following points:
            </p>
          </Collapsible>
        </div>

        <div className="appliance-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                My washing machine shakes and moves. What may be the cause?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
              The following are the possible reasons why your washing machine
              might shake and move:Weakening or damage of shock absorbers,
              Damage of suspension spring or tub spring
            </p>
          </Collapsible>
        </div>

        <div className="appliance-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Does your Appliance Repair offer emergency service?</span>
              <span>+</span>
            </h3>
          >
            <p>
              We do not offer after-hours service. However, we do take pride in
              responding to most service calls on the same day you contact us.
              Our regular service hours are Monday-Friday 8-5 and Saturday 8-12.
            </p>
          </Collapsible>
        </div>

        <div className="appliance-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>What can I expect during a service visit?</span>
              <span>+</span>
            </h3>
          >
            <p>
              When you work with us, you can expect to receive top quality
              service at a fair price. We will send out a courteous technician
              with ample training and experience on your specific appliance.
              Your technician will thoroughly troubleshoot the appliance to
              determine the root cause of the problem and then provide you with
              an estimate for the recommended repair.
            </p>
          </Collapsible>
        </div>

        <div className="appliance-collapsible">
          <Collapsible
            trigger=<h3
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                How do I know when it’s time to call a service technician?
              </span>
              <span>+</span>
            </h3>
          >
            <p>
              If you recognize that your appliance is malfunctioning, it’s best
              to call a certified service technician immediately. While there
              are some tips and tricks you can try at home before calling for a
              repair, don’t procrastinate calling in a professional for help.
            </p>
          </Collapsible>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Appliances;
