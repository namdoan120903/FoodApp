import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Dashboard/DashBoard'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import Events from '../Events/Events'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../Menu/CreateMenuForm'
import OrderItem from '../Orders/OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantCategory } from '../../component/State/Restaurant/Action'
import { getIngredientRestaurant } from '../../component/State/Ingredient/Action'

const Admin = () => {
    const dispatch = useDispatch()
    const restaurant = useSelector(store => store.restaurant)
    const jwt = localStorage.getItem('jwt')
  useEffect(()=>{
    dispatch(getRestaurantCategory({
      restaurantId: restaurant.userRestaurant?.id,
      jwt
    }))
    dispatch(getIngredientRestaurant({
        id: restaurant.userRestaurant.id,
        jwt
      }))
  },[])
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
                    <Route path='/add-menu' element={<CreateMenuForm/>}/>
                    <Route path='/orders/:id' element={<OrderItem/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin