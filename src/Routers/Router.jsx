import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import CustomerRoute from './CustomerRoute'
import { Navbar } from '../component/Navbar/Navbar'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/admin/restaurant/*' element = {<AdminRoute/>}/>
            <Route path='/*' element={<CustomerRoute/>}/>
        </Routes>
    </div>
  )
}

export default Router