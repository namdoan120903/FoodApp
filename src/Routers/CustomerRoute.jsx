import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/Home/Home'
import RestaurantDetail from '../component/Restaurant/RestaurantDetail'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import Auth from '../component/Auth/Auth'
import PaymentSuccess from '../component/Payment/PaymentSuccess'

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/account/:register' element={<Home/>}></Route>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/my-profile/*' element={<Profile/>}></Route> 
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}></Route>
        </Routes>
    </div>
  )
}

export default CustomerRoute