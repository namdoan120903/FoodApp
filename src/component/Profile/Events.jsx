import React, { useEffect } from 'react'
import EventCard from './EventCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../State/Restaurant/Action'

const Events = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const restaurant = useSelector(store => store.restaurant)
  useEffect(()=>{
    dispatch(getAllEvents({jwt}))
  },[jwt])
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-7'>
        {
            restaurant.events.map((item)=><EventCard item={item}/>)
        }
    </div>
  )
}

export default Events