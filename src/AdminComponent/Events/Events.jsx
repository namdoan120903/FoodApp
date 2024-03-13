import { Box, Button, Card, CardContent, CardMedia, Grid, Modal, TextField, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvents, deleteEvents, getAllEvents, getRestaurantEvents } from "../../component/State/Restaurant/Action";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Events = () => {
  const initialValue ={
    image: "",
    location: "",
    description:"",
    name: "",
    startedAt:null,
    endAt:null
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(initialValue);
  const dispatch = useDispatch()
  const restaurant = useSelector(store =>store.restaurant)
  const jwt = localStorage.getItem('jwt')
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormValues(initialValue)
    console.log(formValues)
    dispatch(createEvents({
      restaurantId: restaurant.userRestaurant.id,
      jwt,
      eventData: formValues
    }))
  };
  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleDateChange = (date, dateType) => {
    const formatDate = dayjs(date).format("YYYY-MM-DDTHH:mm:ss")
    setFormValues({ ...formValues, [dateType]: formatDate });
  };
  useEffect(()=>{
    dispatch(getRestaurantEvents({
      jwt,
      restaurantId: restaurant.userRestaurant.id
    }))
  },[])
  const handleDeleteEvent = (id)=>{
    dispatch(deleteEvents({jwt, eventId: id}))
  }

  return (
    <div>
      <div className="p-5">
        <Button variant="contained" onClick={handleOpen}>
          Create New Event
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="image"
                  label="image URL"
                  name="image"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.image}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.location}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.description}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.name}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput = {(props)=><TextField {...props}/> }
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue)=>{
                      handleDateChange(newValue, "startedAt")
                    }}
                    inputFormat= 'dd/MM/yyyy HH:mm'
                    sx={{width : '100%'}}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput = {(props)=><TextField {...props}/> }
                    label="End Date and Time"
                    value={formValues.endAt}
                    onChange={(newValue)=>{
                      handleDateChange(newValue, "endAt")
                    }}
                    inputFormat= 'dd/MM/yyyy HH:mm '
                    sx={{width : '100%'}}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button sx={{marginTop:'1rem'}} variant="contained" type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
      <div className="flex flex-wrap gap-6 px-5 mt-5">
        {
          restaurant.restaurantEvent?.map((item)=><>
            <Card sx={{width:310}}>
                <CardMedia sx={{ height: 330 }} image={item.image} />
                <CardContent>
                    <Typography variant='h5'>
                        {item.name}
                    </Typography>
                    <Typography variant='body2'>
                        {item.description}
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>{item.location}</p>
                        <p className='text-sm text-blue-500'>{dayjs(item.startedAt).format('DD/MM/YY hh:mm')}</p>
                        <p className='text-sm text-red-500'>{dayjs  (item.endAt).format('DD/MM/YYYY HH:mm')}</p>
                    </div>
                    <Button size="small" onClick={()=>handleDeleteEvent(item.id)} variant="contained">Delete Event</Button>
                </CardContent>
            </Card>
          </>)
        }
      </div>
    </div>
  );
};

export default Events;
