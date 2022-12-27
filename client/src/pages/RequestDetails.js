import React, { useState, useContext, useEffect } from "react";
import EmpNav from "../components/EmpNav.js";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { store } from "../App.js";
import "./css/OrdersDetails.css";
function RequestDetails() {
  const navigate = useNavigate();
  const { requestslist, empdetails } = useContext(store);
  const [amount, setamount] = useState("");

  let { requestid } = useParams();

  useEffect(() => {}, [amount]);

  return (
    <div>
      <EmpNav />
   
      <div style={{marginTop: '10px'}}></div>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-edit"
            ></i>
          Request Details
                  </h1>
      </div>

      <hr style={{ width: "900px", height: "2px" }}></hr>
     
      <div style={{marginTop:"40px"}}>
      
      {requestslist.length === 0 ? (
        <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly"}}>
        <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "flex-start"}}>   
         <h2> No requests at present</h2>         
       </div>
       </div>
 
 ) : (
   <>
          {" "}
          {requestslist.map((item, key) => {
            if (key == requestid) {
              return (
                   <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly"}}>
         <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "flex-start"}}>
       
                  <h4>Requested service :{item.iname}</h4>
                  <h1>Customer details :- </h1>
                  <h4>Email: {item.ord_email}</h4>
                  <h4>Phone: {item.ord_phone}</h4>                        
                  <h3 style={{marginTop:"20px"}}>Address:</h3>
                  <h5>{item.ord_address1},</h5>                        
                  <h5>{item.ord_address2},</h5>                                               
                 <h5>{item.ord_state},</h5>
                <h5>{item.ord_pincode},</h5> 

                <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div style={{marginRight:"20px"}}>
         </div>
       </div>
 {item.status === 0 ? (
                    // <form onSubmit={submithandler}>
                    <form>
                      <h4>Amount:<input style={{fontSize:"20px" }} type="number" placeholder="cost of the service"
                           onChange={(e) => {setamount(e.target.value);}}/>
                      </h4>
                      <br />
                 <input type="radio" /><h4>
                        Work Completed
                        </h4>
                  
                      <button  class="btn btn-outline-success"type="submit" onClick={async (e) => {e.preventDefault();
                      const res = await Axios.patch(`http://localhost:3001/orders/${item.id}`, {cost: amount,status: 1,});
                     const res1 = await Axios.patch(`http://localhost:3001/employees/${item.eid}`,{ free: 1 })
                          .then(() =>{navigate("/Employee_home");});}} >
                        Post
                      </button>
                    </form>
                  ) : (<>
                      <h4>Cost : {item.cost}</h4>
                      <h4 style={{color:"Darkgreen"}}>Status:Completed</h4>
                  </>
               
                  )}
                </div>
                   <div className="orders-details" style={{display: 'flex',flexDirection:"center",justifyContent: 'center',alignItems: 'center'}}>
       <img className="orders-details" style={{width:"300px",height:"200px",marginBottom:"10px",display: 'flex',flexDirection:"right",justifyContent: 'right',alignItems: 'right'}} src={item.iimg}/>
            </div> 
                  </div>
              );
            }
          })}{" "}
        </>
      )}</div>
    </div>
  );
}
export default RequestDetails;
