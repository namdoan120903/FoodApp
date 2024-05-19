import { Avatar, Button, Card, Chip, Divider } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

const OrderCard = ({order}) => {
  return (
    <Card className='p-5 pb-3'>
        <div className='flex justify-between items-center space-x-5 '>
          <p>Total: {order.totalPrice}</p>
          <p>Created At: {dayjs(order.createdAt).format('DD/MM/YYYY HH:MM')}</p>
          <div>
            <Button className='cursor-not-allowed'>{order.orderStatus}</Button>
          </div>
        </div>
        <div>
          {order.orderItems.map((item, index)=><div className='p-1'>
            <Divider/>
            <div className='lg:flex items-center justify-between pt-2'>
              <Avatar src={item.food.images[0]}/>
              <p>{item.food.name}</p>
              <div >
              {
                item.ingredients.map((ingre) => <Chip sx={{margin:0, padding:0}} size='small'  label={ingre}></Chip>)
              }
              </div>
              <p>Quantity:{item.quantity}</p>
              <p>Price: {item.totalPrice}</p>
            </div>
            
          </div>)}
        </div>
    </Card>
  )
}

export default OrderCard