import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../component/State/Store'
import { updateRestaurantStatus } from '../../component/State/Restaurant/Action'

const RestaurantDetails = () => {
  const userRestaurant = useSelector(store => store.restaurant.userRestaurant)
  const dispatch = useDispatch()
  const handleRestaurantStatus = ()=>{
    dispatch(updateRestaurantStatus({
      restaurantId: userRestaurant.id,
      jwt: localStorage.getItem("jwt")
    }))
  }
  return (
    <div className='lg:px-20 px-5 py-10'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-4xl lg:text-7xl text-center font-bold mr-2'>{userRestaurant?.name}</h1>
        <div>
          <Button color={userRestaurant?.open?"success":"error"} sx={{borderRadius:"10rem"}} onClick={handleRestaurantStatus} variant='contained' size='large'>{userRestaurant?.open?"Open":"Close"}</Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title = {<span className='text-gray-500'>Restaurant</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.owner?.fullName}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant?.name}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Cuisine Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.cuisineType}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Opening Hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant?.openingHours}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {
                      userRestaurant?.open?<span className='px-5 py-2 rounded-full bg-green-400 text-black'>Open</span>:
                      <span className='px-5 py-2 rounded-full bg-red-400 text-gray-100'>Closed</span>
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title = {<span className='text-gray-500'>Address</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Street Address</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.address?.streetAddress}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.address?.city}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>State Province</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.address?.stateProvince}
                  </p>
                </div>
                
                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.address?.country}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title = {<span className='text-gray-500'>Restaurant</span>}/>
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.contactInformation?.email}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {userRestaurant.contactInformation?.mobile}
                  </p>
                </div>
                <div className='flex items-center'>
                    <p className='w-48'>Social</p>
                    <span className='pr-2'>-</span>
                    <a href={userRestaurant.contactInformation.instagram}>
                      <IconButton ><Instagram sx={{fontSize:"3rem"}}/></IconButton>
                    </a>
                    <a href="/">
                      <IconButton><Facebook sx={{fontSize:"3rem"}}/></IconButton>
                    </a>
                    <a href={userRestaurant.contactInformation.twitter}>
                      <IconButton><Twitter sx={{fontSize:"3rem"}}/></IconButton>
                    </a>
                    <a href="/">
                      <IconButton><LinkedIn sx={{fontSize:"3rem"}}/></IconButton>
                    </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDetails