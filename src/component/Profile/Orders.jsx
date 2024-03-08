import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../State/Store'
import { getUserOrder } from '../State/Order/Action'

const Orders = () => {
  const{auth, order} = useSelector(store => store)
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getUserOrder(jwt))
  },[auth.jwt])

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
        <div className='space-y-5 w-full lg:w-1/2'>
            {
                order.orders.map((order) =>order.orderItems.map((item)=> <OrderCard item = {item} order = {order} />) )
            }
        </div>
    </div>
  )
}

export default Orders