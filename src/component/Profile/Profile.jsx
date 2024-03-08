import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favorites from './Favorites';
import Address from './Address';
import Events from './Events';

const Profile = () => {
  const [openSideBar, setOpenSidebar] = useState("false");
  return (
    <div className='lg:flex justify-between '>
      <div className='sticky h-[80vh] lg:w-[20%]'>
        <ProfileNavigation open={openSideBar} />
      </div>
      <div className='lg:w-[80%]'>
        <Routes>
          <Route path='/' element={<UserProfile />}>
          </Route>
          <Route path='/orders' element={<Orders />}>
          </Route>
          <Route path='/favorites' element={<Favorites />}>
          </Route>
          <Route path='/address' element={<Address />}>
          </Route>
          <Route path='/events' element={<Events />}>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default Profile