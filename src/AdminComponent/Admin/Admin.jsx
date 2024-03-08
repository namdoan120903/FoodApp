import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Dashboard/DashBoard'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Events from '../Events/Events'
import RestaurantDetails from './RestaurantDetails'

const Admin = () => {
    const handleClose = ()=>{

    }
  return (
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSidebar handleClose = {handleClose}/>
            </div>
            <div className='lg:w-[80%]'>
                <Routes>
                    <Route path='/' element={<DashBoard/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/category' element={<FoodCategory/>}/>
                    <Route path='/ingredients' element={<Ingredients/>}/>
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/details' element={<RestaurantDetails/>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin