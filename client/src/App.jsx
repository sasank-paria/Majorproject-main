import { useState } from 'react'
import React from 'react'
import {Navbar , Welcome,Footer,Services,Login,Signup} from './components'
import {Provider}  from 'react-redux'
import Mission from './components/Mission'
import CryptoPriceTracker from './components/CryptoPriceTracker'
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <div className='min-h-screen'>
      <div className='bg-gradient-to-bl from-orange-900 via-black to-black'>
        <Navbar/>
     
        <Welcome/>
      </div>
      <Services/>
      {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center"> */}
      {/* <Market /> */}
       <CryptoPriceTracker/>
      </div>
      {/* <Transactions/> */}
      <Mission />
      <Footer />


      <Router>
      <div>
        <section>                              
            <Routes>                                                                        
               <Route path="/home" element={<Welcome/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  </>
  )
}

export default App
