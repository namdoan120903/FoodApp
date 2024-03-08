import { Dashboard } from '@mui/icons-material'
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CategoryIcon from '@mui/icons-material/Category';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';
const menu = [
    {title: "DashBoard", icon: <Dashboard/>, path:"/"},
    {title: "Orders", icon: <ShoppingBag/>, path:"/orders"},
    {title: "Menu", icon: <ShopTwoIcon/>, path:"/menu"},
    {title: "Food Category", icon: <CategoryIcon/>, path:"/category"},
    {title: "Ingredients", icon: <FastfoodIcon/>, path:"/ingredients"},
    {title: "Events", icon: <EventIcon/>, path:"/events"},
    {title: "Details", icon: <AdminPanelSettingsIcon/>, path:"/details"},
    {title: "Logout", icon: <LogoutIcon/>, path:"/logout"}
]
const AdminSidebar = ({handleClose}) => {
    const navigate = useNavigate()
    const isSmallScreen = useMediaQuery("(max-width:1080px )")
    const dispatch = useDispatch()
    const handleNavigate = (item)=>{
        navigate(`/admin/restaurant${item.path}`)
        if(item.path === "/logout"){ navigate("/")
        dispatch(logout())
        handleClose()
    }
    }
    return (
    <div>
        <>
            <Drawer onClose={handleClose} variant={isSmallScreen?"temporary":"permanent"} open={true} anchor='left' sx = {{zIndex:1}}>
                <div className='w-[60vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                    {menu.map((item, i) => <>
                        <div className='px-5 flex items-center gap-5 cursor-pointer' onClick={()=>handleNavigate(item)}>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i!==menu.length-1 &&<Divider/>}
                    </>)}
                </div>
            </Drawer>
        </>
    </div>
  )
}

export default AdminSidebar