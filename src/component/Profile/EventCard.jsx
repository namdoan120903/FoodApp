import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
    return (
        <div>
            <Card sx={{width:310}}>
                <CardMedia sx={{ height: 330 }} image='https://cdn.pixabay.com/photo/2015/07/14/17/18/briyani-845111_1280.jpg' />
                <CardContent>
                    <Typography variant='h5'>
                        India Food
                    </Typography>
                    <Typography variant='body2'>
                        sale of 50%
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"mumbai"}</p>
                        <p className='text-sm text-blue-500'>Open</p>
                        <p className='text-sm text-red-500'>Closed</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EventCard