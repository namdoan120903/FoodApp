import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurant from '../AdminComponent/CreateRestaurant/CreateRestaurant'
import Admin from '../AdminComponent/Admin/Admin'

const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='*' element={false ? <CreateRestaurant/> : <Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute