import React,{useState} from 'react'
import HomeNav from '../components/HomeNav.js'
import './css/Contactus.css'
import Footer from '../components/Footer.js'
import Axios from 'axios'
import {toast} from 'react-toastify'

function Contactus() {

  const [message,setMessage] = useState({name:"",email:"",message:""})

  const HandleInput = (e)=>{
    setMessage({...message,[e.target.name]:e.target.value})
  }


  const submitMsgs = (e)=>{

    e.preventDefault();


    if(message.name===""){
      toast.error("Name is required",{position: toast.POSITION.BOTTOM_RIGHT})
    }
    else if(message.email==="" || !message.email.includes("@")){
      toast.error("Email is required",{position: toast.POSITION.BOTTOM_RIGHT})
    }
    else if(message.message===""){
      toast.error("Message is required",{position: toast.POSITION.BOTTOM_RIGHT})
    }
    else{
    Axios.post("http://localhost:3001/messages",{...message}).then((res)=>{
      console.log(res.data);
      toast.success("Message sent successfully",{position: toast.POSITION.BOTTOM_RIGHT})
    }).then((res)=>{
      setMessage({name:"",email:"",message:""})
    }).catch((err)=>{
      toast.error("Error sending message",{position: toast.POSITION.BOTTOM_RIGHT})
    })
    }

  }

  return (
    <div>
       <HomeNav/>

      <br></br>
      <br></br>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',"margin-top":"70px"}}>
         
      <div style={{width: '700px',display: 'flex',flexDirection: 'column'}} className="contact-info">

        <div style={{"margin-bottom":"20px"}}>
          <h1>Contact Us</h1>
        </div>

        <div style={{"margin-bottom":"20px"}}>
          <p style={{"font-size":"18px"}}>AYS has proudly served clients seeking I.R.C § 1031 counsel as Qualified Intermediaries with precision and excellence for over 18 years. We often personally meet with clients, and speak at educational events on “Tax Deferred Exchanges.”</p>
        </div>
        

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          
          <h4 style={{"margin-right":"10px"}}><i style={{marginRight:"10px"}} class="fa fa-envelope" aria-hidden="true"></i><b>Email:</b></h4>
          <h4>info@ays.com</h4>
        </div>

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><i style={{marginRight:"10px"}} class="fa fa-phone" aria-hidden="true"></i>
<b>Phone:</b></h4>
          <h4>1-8000-227-301</h4>
        </div>

        <div style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><i style={{marginRight:"10px"}} class="fa fa-fax" aria-hidden="true"></i>
<b>FAX:</b></h4>
          <h4>1-8000-227-301</h4>
        </div>

        
        <div  style={{display: 'flex',flexDirection: 'row', justifyContent:"center",margin:"15px"}}>
          <h4 style={{"margin-right":"10px"}}><i style={{marginRight:"10px"}} class="fa-solid fa-location-dot"></i>
<b>Address:</b></h4>
          <h4>1234, 56th Street, New York, NY 12345</h4>
        </div>


      </div>


      <div style={{width: '500px',border:"1px solid black","border-radius": "15px"}} className="contact-form">
        <h2 style={{margin:"15px"}}>Send Us a Message</h2>
        <form onSubmit={submitMsgs}>
          <div className="container">

          <div class="mb-3" >
         
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <div style={{display:"flex"}}>
              
              <i class="fa fa-user" style={{fontSize:"20px",marginRight: "6px",marginTop:"3px",color:"black"}} aria-hidden="true"></i> 
              <input
                type="text"
                name="name"
                value={message.name}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={HandleInput}
              />
             
              </div>
              
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>

              <div style={{display: 'flex'}}>
              <i class="fa fa-envelope" style={{fontSize:"20px",marginRight: "6px",marginTop:"3px",color:"black"}} aria-hidden="true"></i>
              <input
                type="email"
                name="email"
                value={message.email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={HandleInput}
              />


              </div>
              
             
            </div>
            
            
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Message
              </label>
              <textarea onChange={HandleInput} value={message.message}  class="form-control" name="message" id="exampleInputEmail1" rows="5" cols="80"></textarea>
             
            </div>
            
            <button
              type="submit"
             
              class="btn btn-primary"      
            >
              Send<i style={{marginLeft:"10px"}}class="fa fa-paper-plane" aria-hidden="true"></i>

            </button>
          </div>
        </form>


      </div>
       </div>
      
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  )
}

export default Contactus
