import React,{ useState,useContext, useEffect} from 'react'
import OrdersComp from '../components/OrdersComp'
import Axios from 'axios'
import {store} from '../App'


function OrdersDashboard() {

    const {ordersList,setOrdersList}=useContext(store)

    const [search,setSearch] = useState("");    
    const [filter,setFilter] = useState("itype");
   

useEffect(()=>{

    if(search===""){
    Axios.get("http://localhost:3001/orders").then((res)=>{
        setOrdersList(res.data)
        console.log(res.data)
    }).then((res)=>{
        console.log(1)
    })
}
else{
    Axios.get(`http://localhost:3001/orders/?${filter}=${search}`).then((response) => {
        setOrdersList(response.data)
    })

}

},[search])

  return (
    <div>
          <div className="content-wrapper">
              <div className="content-header">
                  <div className="container-fluid">
                      <div className="row mb-2">
                          <div className="col-sm-6">
                            <h1 className="m-0">Orders</h1>
                          </div>
                          <div className="col-sm-6">
                              <ol className="breadcrumb float-sm-right">
                                  {/* <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li> */}
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>

          <div>
            <div style={{marginTop:"70px",display: 'flex',justifyContent: 'center'}}>
            <input style={{width:"400px",height:"50px",borderRadius:"5px"}} onChange={(e)=>{
                setSearch(e.target.value)
            }} type="text" name="searchCustomer" placeholder="Search Orders..."/>
            {/* <button type="button" style={{borderRadius:"5px",height:"48px"}} onClick={()=>{
                updateList();
            }} class="btn btn-success">Search</button> */}
            </div>



            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{marginTop:"25px",marginLeft:"50px"}}>
                <label htmlFor="filter">Filter by </label>
                </div>
               
               <div>
                <select className="form-control" name="filter" id="filter" style={{width:"200px",marginLeft:"20px",marginTop:"20px"}} onChange={(e)=>{
                    setFilter(e.target.value)
                }
                }>
                    <option value="itype">Service type</option>
                    <option value="ufname">Customer Name</option>
                    <option value="uemail">Customer Email</option>
                    <option value="uphone">Customer phone</option>
                    <option value="efname">Employee Name</option>
                    <option value="eemail">Employee Email</option>
                    <option value="ephone">Employee phone</option>
                    <option value="ord_state">State</option>
                    <option value="ord_pincode">Pincode</option>
                </select>
                </div>
            </div>
          </div>

                         
            <hr style={{height:"3px",marginTop:"60px"}}></hr>
        



        {ordersList.length > 0 ? (

                  <div style={{ display: "grid", "grid-template-columns": "repeat( 2, minmax(250px, 1fr) )" }}>
                      {ordersList.map((val) => {
                          return (
                              <OrdersComp
                                    id={val.id}
                                    iname= {val.iname}
                                    iimg= {val.iimg}
                                    itype={val.itype}
                                    ufname={val.ufname}
                                    ulname={val.ulname}
                                    uemail={val.uemail}
                                    uphone={val.uphone}
                                    eid={val.eid}
                                    efname={val.efname}
                                    elname={val.elname}
                                    eemail={val.eemail}
                                    ephone={val.ephone}
                                    ord_name = {val.ord_name}
                                    ord_email = {val.ord_email}
                                    ord_phone = {val.ord_phone}
                                    ord_address1 = {val.ord_address1}
                                    ord_address2 = {val.ord_address2}
                                    ord_state = {val.ord_state}
                                    ord_pincode = {val.ord_pincode}
                                    cost = {val.cost}
                                    status = {val.status}
                                    ord_date = {val.ord_date}
                              />

                          )
                      }
                      )}

                  </div>



        ):(<div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}><h1>No Orders Found</h1></div>)}

        

          </div>

          
</div>
)
}

export default OrdersDashboard
