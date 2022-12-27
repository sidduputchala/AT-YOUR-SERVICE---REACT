
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import React,{useContext,createContext,useState} from 'react'
import Messages from './pages/Messages'
import Login from './pages/Login'

export const store = createContext();


function App() {

  const [customersList,setCustomersList]=useState([])
  const [employeesList,setEmployeesList]=useState([])
  const [ordersList,setOrdersList]=useState([])
  const [msgList,setMsgList]=useState([])

  

  return (
    <div className="App">
      <store.Provider value={{customersList,setCustomersList,employeesList,setEmployeesList,ordersList,setOrdersList,msgList,setMsgList}}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<MainDashboard/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      
      </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
