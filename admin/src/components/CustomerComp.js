import React from 'react'
import logo192 from './logo192.png';
import Axios from 'axios'
import {store} from '../App'

function CustomerComp(props) {


  const {customersList,setCustomersList}=React.useContext(store) 

  const deleteCustomer = (id)=>{

      customersList.map((val,key)=>{
          if(val.id===id){
              customersList.splice(key,1)
          } 
      })
      setCustomersList([...customersList])

      Axios.delete(`http://localhost:3001/users/${id}`).then((res)=>{
          console.log(res.data)
          alert('Customer deleted successfully')
      }
      )
  }

  return (
    <div>
      <div style={{border: '1px solid black',height:"300px",width:"500px",marginBottom:"40px",marginLeft:"70px",borderRadius:"15px"}}>

      

      <div style={{display:"flex",flexDirection:"column"}}>

      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <h3 style={{marginTop:"10px"}} >Customer Id: {props.id}</h3>.
        <button type="button" style={{marginTop:"10px"}} class="btn btn-danger" onClick={()=>{
          deleteCustomer(props.id);
        }}>Delete</button>
      </div>

      <div style={{border: "1px solid black",marginTop:"5px"}}></div>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>

  
      
        <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
          <h7>FirstName: {props.firstName}</h7>
          <h7>LastName: {props.lastName}</h7>
          <h7>Email: {props.email}</h7>
          <h7>Phone: {props.phone}</h7>
          <h7>Address: {props.address}</h7>
          <h7>City:{props.city}</h7>
          <h7>State: {props.state}</h7>
          <h7>Zip: {props.pincode}</h7>



        </div>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
        <img src={props.imgurl} style={{width:"150px",height:"150px",borderRadius:"10px"}}/>

        
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CustomerComp
