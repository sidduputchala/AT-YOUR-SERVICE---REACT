import React from 'react'
import Axios from 'axios'
import {store} from '../App'


function EmployeeComp(props) {


  const {employeesList,setEmployeesList}=React.useContext(store)

  const deleteEmployee = (id)=>{

    employeesList.map((val,key)=>{
        if(val.id===id){
            employeesList.splice(key,1)
        } 
    })
    setEmployeesList([...employeesList  ])

    Axios.delete(`http://localhost:3001/employees/${id}`).then((res)=>{
        console.log(res.data)
        alert('Employee deleted successfully')
    }
    )
}

return (
  <div>
    <div style={{border: '1px solid black',height:"300px",width:"500px",marginBottom:"40px",marginLeft:"70px",borderRadius:"15px"}}>

    

    <div style={{display:"flex",flexDirection:"column"}}>

    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <h3 style={{marginTop:"10px"}} >Employee Id: {props.id}</h3>.
      <button type="button" style={{marginTop:"10px"}} class="btn btn-danger" onClick={()=>{
        deleteEmployee(props.id);
      }}>Delete</button>
    </div>

    <div style={{border: "1px solid black",marginTop:"5px"}}></div>
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>


    
      <div  style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
        <h7>FirstName: {props.firstName}</h7>
        <h7>LastName: {props.lastName}</h7>
        <h7>Gender: {props.gender}</h7>
        <h7>Profession: {props.profession}</h7>
        <h7>Email: {props.email}</h7>
       
       


      </div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      {/* <img src={props.imgurl} style={{width:"150px",height:"150px",borderRadius:"10px"}}/> */}
        <h7>Phone: {props.phone}</h7>
        <h7>Address: {props.address}</h7>
        <h7>City:{props.city}</h7>
        <h7>State: {props.state}</h7>
        <h7>Zip: {props.pincode}</h7>
      
    </div>
    
    </div>

    <div style={{display: 'flex',justifyContent: 'center',marginTop:"30px"}}>
    <h5>Status: {props.free===0 ? (<button class="btn btn-success">Free</button>) : (<button class="btn btn-danger">Busy</button>)}</h5>
    </div>
    </div>
    </div>
  </div>
  )
}

export default EmployeeComp
