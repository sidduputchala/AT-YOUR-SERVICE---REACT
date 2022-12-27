import React, { useContext, useState, useEffect } from "react";
import EmpNav from "../components/EmpNav";
import Axios from "axios";
import "./css/work.css";
import { store } from "../App.js";
import { useNavigate, Link } from "react-router-dom";

function Work() {
  const {empdetails,requestslist,setRequestslist} = useContext(store);
  const [orderitems, setOrderItems] = useState([]);
  // const [amount, setamount] = useState(""); 
  const navigate = useNavigate();
// const [email,setemail]= useState({email:empdetails.email})
     
  const getorderdetails = async () => {
    const res = await Axios.get(`http://localhost:3001/orders?eemail=${empdetails.email}`);
    console.log("details of orderws",res.data)
      setOrderItems(res.data);
      setRequestslist([]);
      setRequestslist(res.data);
      // orderitems.map((item) => {
      //   setRequestslist((prevlist) => {
      //     return [...prevlist, item];
      //   });
      // });
   };
  useEffect(() => {
    if (empdetails.length === 0) {
      navigate("/login_employee");
    }
    getorderdetails();
  }, [empdetails.length]);

  return (
    <div className="gradient" style={{ backgroundSize: "cover" }}>
      <EmpNav/>
      <div style={{ marginTop: "80px" }}></div>
      <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ marginLeft: "50px" }}>
          <i style={{ marginRight: "20px" }} class="fas fa-cubes"></i>
          My requests
        </h1>
      </div>
      <hr style={{ width: "900px", height: "2px" }}></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {orderitems.length > 0 ? (
          <div className="orders-card">
            {orderitems.map((item, key) => {
              return (
                <div
                  className="order-item"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img style={{ width: "200px" }} src={item.iimg} />
                  </div>

                  <div>
                    <h1>{item.iname}</h1>
                    <p>Ordered on {item.ord_date}</p>
                  </div>

                  <div>
                    <p>
                      {item.status === 1 ? (
                        <button class="btn btn-success">Completed</button>
                      ) : (
                        <button class="btn btn-danger">Pending...</button>
                      )}
                    </p>

                    <p style={{ marginTop: "100px" }}>
                      <Link to={`/ays/requests/${key}`}>
                        {" "}
                        <h6>
                          Full details
                          <i
                            style={{
                              fontSize: "15px",
                              marginRight: "30px",
                              marginLeft: "3px",
                            }}
                            class="fa-solid fa-chevron-right"
                          ></i>{" "}
                        </h6>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 style={{ marginTop: "100px" }}>
            No Orders Placed <i className="far fa-meh-blank"></i>
          </h1>
        )}
      </div>
    </div>
  );
}
export default Work;
