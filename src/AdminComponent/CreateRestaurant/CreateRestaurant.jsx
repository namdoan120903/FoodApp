import { AddPhotoAlternate } from '@mui/icons-material'
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import { useFormik } from 'formik'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import { uploadImageToCloudinary } from '../Util/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../component/State/Restaurant/Action';

const initialValues = {
  name:"",
  description:"",
  cuisineType:"",
  streetAddress:"",
  city:"",
  stateProvince:"",
  country:"",
  email:"",
  mobile:"",
  twitter:"",
  instagram:"",
  openingHours:"Mon - Sun : 9:00 AM - 9:00 PM",
  images:[]
}

const CreateRestaurant = () => {
  const dispatch =useDispatch()
  const jwt = localStorage.getItem("jwt")
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit:(values)=>{
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        openingHours: values.openingHours,
        images: values.images,
        address:{
          streetAddress: values.streetAddress,
          stateProvince: values.stateProvince,
          city: values.city,
          country: values.country
        },
        contactInformation:{
          email: values.email,
          mobile: values.mobile,
          instagram: values.instagram,
          twitter: values.twitter
        }
      }
      dispatch(createRestaurant({data, jwt}))
    }
  })
  const [uploadImage, setUploadImage] = useState(false)
  const handleImageChange = async (e)=>{
    const file = e.target.files[0]// get name
    setUploadImage(true)
    const image = await uploadImageToCloudinary(file)
    console.log(image)
    formik.setFieldValue("images", [...formik.values.images, image])
    setUploadImage(false)
  }
  const handleRemove = (index)=>{
    const updatedImages = [...formik.values.images]
    updatedImages.splice(index, 1)
    formik.setFieldValue("images", updatedImages)
  }
  return (
    <div className='p-10 lg:flex flex-col items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
      <h1 className='font-bold text-4xl py-2 text-center pb-10'>Add New Restaurant</h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4'>
        <Grid container spacing={2}>
          <Grid item xs={12} className='flex flex-wrap gap-5'>
            <input
            accept='image/*'
            id='fileInput'
            style={{display: "none"}}
            type='file'
            onChange={handleImageChange}
            />
            <label htmlFor="fileInput" className='relative'>
              <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                <AddPhotoAlternate className='text-white'/>
              </span>
              {
                uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                  <CircularProgress/>
                </div>
              }
            </label>
            <div className='flex flex-wrap gap-2'>
              {
                formik.values.images.map((image, index)=><div className='relative'>
                  <img key={index} className='w-24 h-24 object-cover' src={image}/>
                  <IconButton sx={{position:"absolute", top : 0, right:0 , outline:"none"}}  onClick={()=>handleRemove(index)}><CloseIcon sx={{fontSize:"1rem"}}/></IconButton>
                  
                </div> )
              }
            </div>
          </Grid>
          <Grid item xs={12}>
              <TextField fullWidth id='name' label="Name" name='name' variant='outlined' onChange={formik.handleChange} value={formik.values.name}>
              </TextField>
          </Grid>
          <Grid item xs={12}>
              <TextField fullWidth id='description' label="Description" name='description' variant='outlined' onChange={formik.handleChange} value={formik.values.description}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
              <TextField fullWidth id='cuisineType' label="CuisineType" name='cuisineType' variant='outlined' onChange={formik.handleChange} value={formik.values.cuisineType}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
              <TextField fullWidth id='openingHours' label="Opening Hours" name='opening Hours' variant='outlined' onChange={formik.handleChange} value={formik.values.openingHours}>
              </TextField>
          </Grid>
          <Grid item xs={12} >
              <TextField fullWidth id='streetAddress' label="Street Address" name='streetAddress' variant='outlined' onChange={formik.handleChange} value={formik.values.streetAddress}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={4} >
              <TextField fullWidth id='city' label="City" name='city' variant='outlined' onChange={formik.handleChange} value={formik.values.city}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={4} >
              <TextField fullWidth id='stateProvince' label="State Province" name='stateProvince' variant='outlined' onChange={formik.handleChange} value={formik.values.stateProvince}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={4} >
              <TextField fullWidth id='country' label="Country" name='country' variant='outlined' onChange={formik.handleChange} value={formik.values.country}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6} >
              <TextField fullWidth id='email' label="Email" name='email' variant='outlined' onChange={formik.handleChange} value={formik.values.email}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6} >
              <TextField fullWidth id='mobile' label="Mobile" name='mobile' variant='outlined' onChange={formik.handleChange} value={formik.values.mobile}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6} >
              <TextField fullWidth id='instagram' label="Instagram" name='instagram' variant='outlined' onChange={formik.handleChange} value={formik.values.instagram}>
              </TextField>
          </Grid>
          <Grid item xs={12} lg={6} >
              <TextField fullWidth id='twitter' label="Twitter" name='twitter' variant='outlined' onChange={formik.handleChange} value={formik.values.twitter}>
              </TextField>
          </Grid>
        </Grid>
        <Button variant='contained' type='submit'>Create Restaurant</Button>
      </form>
      </div>
      
    </div>  
  )
}

export default CreateRestaurant