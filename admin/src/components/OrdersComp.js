import React from 'react'
import Axios from 'axios'
import {store} from '../App'


function OrdersComp(props) {

    const {ordersList,setOrdersList}=React.useContext(store)

  const deleteOrder = (id)=>{

    ordersList.map((val,key)=>{
        if(val.id===id){
            ordersList.splice(key,1)
        } 
    })
    setOrdersList([...ordersList])

    Axios.delete(`http://localhost:3001/orders/${id}`).then((res)=>{
        console.log(res.data)
        alert('Orders deleted successfully')
    }
    )
}
  return (
    <div>
      <div style={{border: '1px solid black',height:"490px",width:"560px",marginBottom:"40px",marginLeft:"70px",borderRadius:"15px"}}>

    

<div style={{display:"flex",flexDirection:"column"}}>

<div style={{display:"flex",justifyContent:"space-evenly"}}>
  <h3 style={{marginTop:"10px"}} >Order Id: {props.id}</h3>.
  <button type="button" style={{marginTop:"10px"}} class="btn btn-danger" onClick={()=>{
    deleteOrder(props.id);
  }}>Delete</button>
</div>

<div style={{border: "1px solid black",marginTop:"5px"}}></div>
<div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>



  <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
    <h6><u>Customer Details</u></h6>
    <h7>Name: {props.ufname} {props.ulname}</h7>
    <h7>Phone: {props.uphone}</h7>
    <h7>Email: {props.uemail}</h7>
    </div>
    <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
    <h6><u>Employee Details</u></h6>
    {props.eemail.length > 0 ? (<>
    <h7>Name: {props.efname} {props.elname}</h7>
    <h7>Phone: {props.ephone}</h7>
    <h7>Email: {props.eemail}</h7>
    </>

    ):(
        <h7>Employee not assigned</h7>
    )}
    
    </div>


  </div>

  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
  {/* <img src={props.imgurl} style={{width:"150px",height:"150px",borderRadius:"10px"}}/> */}
    
  
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
  {/* <img src={props.imgurl} style={{width:"150px",height:"150px",borderRadius:"10px"}}/> */}
    
    <div style={{display:"flex",flexDirection:"column"}}>
    <h6><u>Order Details</u></h6>
    <h7>Service Name:{props.iname}</h7>
    <h7>Type:{props.itype}</h7>
    <h7>Price:{props.cost>0 ? ("Rs."+props.cost):("pending...")}</h7>
    <h7>Ordered Date: {props.ord_date}</h7>
    </div>
    <div style={{display:"flex",flexDirection:"column",marginTop:"10px"}}>
    <h6><u>Shipping Details</u></h6>
    <h7>Name: {props.ord_name}</h7>
    <h7>Phone: {props.ord_phone}</h7>
    <h7>Email: {props.ord_email}</h7>
    <h7>Address1: {props.ord_address1}</h7>
    {/* <h7>Address2: {props.ord_address2}</h7> */}
    <h7>State: {props.ord_state}</h7>
    <h7>Zip: {props.ord_pincode}</h7>
    </div>
  
</div>

</div>

<div style={{display: 'flex',justifyContent: 'center',marginTop:"30px"}}>
<h5>Status: {props.status===1 ? (<button class="btn btn-success">Completed</button>) : (<button class="btn btn-danger">Pending...</button>)}</h5>
</div>
</div>
</div>
    </div>
  )
}

export default OrdersComp
