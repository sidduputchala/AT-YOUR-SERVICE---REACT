import React,{ useState, useContext} from 'react'
import HomeNav from '../components/HomeNav.js'
import axios from 'axios'

import {useParams,useNavigate} from 'react-router-dom'
import {store} from '../App.js'
import './css/OrdersDetails.css'

function OrderDetails() {
 const navigate = useNavigate();  
  const {cartItems,setCartItems,userdetails,setUserDetails,orderslist,setOrderslist}  = useContext(store);
  let {orderid} = useParams();
  const cancelorder= async(item)=>{
    console.log("iten  asdgafgassf",item.id)
    axios.patch(`http://localhost:3001/orders/${item.id}`,{eemail:""}).then(navigate("/ays/orders"))
  }

  const render = (item) =>{
    if(item.eemail != "")
   return(  
         <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly"}}>
         <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "flex-start"}}>
        <h4>Ordered Service : {item.iname}</h4>                        
       <h4>Email: {item.ord_email}</h4>
       <h4>Phone: {item.ord_phone}</h4>                        
       <h2 style={{marginTop:"20px"}}>Address:</h2>
       <h5>{item.ord_address1},</h5>                        
       <h5>{item.ord_address2},</h5>                                               
       <h5>{item.ord_state},</h5>
       <h5>{item.ord_pincode},</h5>  
       <h4>Technician name : {item.efname} {item.elname}</h4>
       <h4>Technician phone number : {item.ephone}</h4>
       <h4>Technician email : {item.eemail}</h4>
       {item.cost!=0? <h3>Cost:{item.cost}</h3> :<h3>Your Request is Still in progress</h3>}
       <div style={{display:"flex",justifyContent:"space-evenly"}}>
         <div style={{marginRight:"20px"}}>
          <button type="button" class="btn btn-success" onClick={()=>{ navigate('/ays/contactus')}} style={{marginTop:"20px"}}>Need Help?</button>
         </div>
         <div >
          <button onClick={()=>{cancelorder(item)}}  type="button" class="btn btn-danger" style={{marginTop:"20px"}}>Cancel Order</button>
         </div>
       </div>
       </div>
       <div className="orders-details" style={{display: 'flex',flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
       <img style={{width:"300px",height:"200px",marginBottom:"10px"}} src={item.iimg}/>
       
       

    </div>
   </div>
 )
 else
 return(
       <div style={{display: "flex",flexDirection: "row",justifyContent: "space-evenly"}}>
        <div style={{display: "flex", flexDirection: "column","justify-content":"center",alignItems: "flex-start"}}>
         <h4>Ordered Service : {item.iname}</h4>                        
         <h4>Email: {item.ord_email}</h4>
         <h4>Phone: {item.ord_phone}</h4>     
         <div style={{marginTop:"60px",border:"2px solid red",borderRadius:"15px",width:"700px",height:"200px",fontFamily:"monospace"}}>
           <h3 style={{marginTop:"20px"}} ><i style={{color:"red",marginRight:"10px"}} class="fa fa-exclamation-triangle" aria-hidden="true"></i>
           We are sorry for the inconvinience</h3>
         <h3 >Currently there are no technicians available for the service you requested.</h3><h3>Please try again after some time.</h3> 
         </div>          
         <div style={{display:"flex",justifyContent:"space-evenly"}}>
       </div>
       </div>
       <div className="orders-details" style={{display: 'flex',flexDirection:"column",justifyContent: 'center',alignItems: 'center'}}>
       <img style={{width:"300px",height:"200px",marginBottom:"10px"}} src={item.iimg}/>       
    </div>
   </div>
)
  }


  return (
    <div>
       <HomeNav/>
       <div style={{marginTop: '80px'}}></div>
       <div className="cart-header" style={{ display: "flex" }}>
        <h1 style={{ "margin-top": "60px", marginLeft: "50px" }}>
          <i
            style={{ marginRight: "20px" }}
            class="fas fa-edit"
          ></i>
          Orders Details 
        </h1>
      </div>

      <hr style={{ width: "900px", height: "2px" }}></hr>
      <div style={{marginTop:"40px"}}>
          {orderslist.map((item,key)=>{
           return(
                   <div className='orderdetails'>
                    { (key==orderid )&& render(item)  }           
                   </div>
                )
            
              })}
      </div>
    </div>
  )
}

export default OrderDetails
