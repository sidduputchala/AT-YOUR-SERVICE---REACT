import React, { useState } from 'react'
import Builder from './builder.png'
import Aysimg from './ays.jpg'
import {useNavigate} from 'react-router-dom'


function Login() {

  const navigate = useNavigate();

  const [adminemail, setAdminEmail] = useState('')
  const [adminpassword, setAdminPassword] = useState('')

  const submitDetails = () => {


    if(adminemail === "" || adminemail === null || adminemail === undefined){
      alert('Please enter email')
    }else if(adminpassword === "" || adminpassword === null || adminpassword === undefined){
      alert('Please enter password')
    }else{
     
        if(adminemail==="varma@gmail.com" && adminpassword==="1234")
        {
          alert('Login success')
          navigate('/dashboard')
        }
        else{
          alert('login failed')
        }
      
    }


  }

  return (
    <div style={{ backgroundColor: "#4f5962", color: "white" }}>

      <div>


        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'row', marginTop: "20px" }}>
            <img src={Aysimg} style={{ width: "100px", height: "55px", "margin-right": "30px", borderRadius: "10px" }} />
            <h1>Admin Portal</h1>

          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
            <div>
              <img style={{ width: "500px", height: "700px", "margin-left": "70px" }} src={Builder} alt="builder" />

            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center", marginLeft: "60px",marginBottom:"90px" }}>

              <div style={{ width: "400px", }}>

                <h2 >Login Here</h2>
                <form style={{ marginTop: "50px" }}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={(e)=>{
                      setAdminEmail(e.target.value)
                    }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted"></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={(e)=>{
                      setAdminPassword(e.target.value)
                    }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>

                  <button  className="btn btn-primary" onClick={()=>{
                    submitDetails();
                  }}>Submit</button>


                </form>


              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
