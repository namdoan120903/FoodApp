import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen px-5'>
        <div className='flex flex-col justify-center items-center h-[90vh]'>
            <Card className='box w-full lg:w-1/4 flex flex-col items-center rounded-md p-5'>
                <TaskAltIcon sx={{fontSize:"5rem", color:"green"}}/>
                <h1 className='py-5 text-2xl font-semibold'>Order Success</h1>
                <p className='py-3 text-gray-400'>Thank you for choosing our restaurant</p>
                <p className='py-2 text-gray-200 text-lg'>Have A Great Day!</p>
                <Button onClick={()=>navigate("/")} variant='contained' sx={{margin:"1rem 0"}}>Go To Home</Button>
            </Card>
        </div>
    </div>
  )
}

export default PaymentSuccess