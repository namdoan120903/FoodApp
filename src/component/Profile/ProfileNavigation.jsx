import React, { useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../State/Authentication/ActionType';
import { logout } from '../State/Authentication/Action';

const menu = [
    {title: "Orders", icon : <ShoppingBagIcon/>},
    {title: "Favorites", icon : <FavoriteIcon/>},
    {title: "Address", icon : <AddReactionIcon/>},
    {title: "Payment", icon : <AccountBalanceWalletIcon/>},   
    {title: "Notification", icon : <NotificationsActiveIcon/>},   
    {title: "Events", icon : <EventIcon/>},      
    {title: "Logout", icon : <LogoutIcon/>},   
]

const ProfileNavigation = () => {
  const isSmallScreen  = useMediaQuery('(max-width:900px)')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (item)=>{
    if(item.title === "Logout"){
      dispatch(logout())
      navigate("/")
    }else
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  }
  const open = useState(false)
  const handleClose = ()=>{

  }
  return (
    <div>
          <div className='w-[50vw] lg:w-[20vw] h-[80vh] flex flex-col justify-center text-xl gap-8'>
            {menu.map((item,i)=>
              <>
                <div key={i} onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i!== menu.length-1 && <Divider/>}
              </> 
            )}
          </div>
    </div>
  )
}

export default ProfileNavigation