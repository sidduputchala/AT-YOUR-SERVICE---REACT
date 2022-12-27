import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';


function MainDashboard() {
  return (
    <div>

     <div className="wrapper">
        <Header/>
        <Menu/>
        <Dashboard/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default MainDashboard
