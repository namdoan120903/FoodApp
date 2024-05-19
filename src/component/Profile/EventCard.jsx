import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

const EventCard = ({item}) => {
    return (
        <div>
            <Card sx={{width:310}}>
                <CardMedia sx={{ height: 300 }} image={item.image} />
                <CardContent>
                    <Typography variant='h5'>
                        {item.name}
                    </Typography>
                    <Typography variant='body2'>
                        {item.description}
                    </Typography>
                    <Typography variant='body2'>
                        {item.location}
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{"mumbai"}</p>
                        <p className='text-sm text-blue-500'>{dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')}</p>
                        <p className='text-sm text-red-500'>{dayjs(item.endAt).format('DD/MM/YYYY HH:mm')}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default EventCard