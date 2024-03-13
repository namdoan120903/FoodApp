import React from 'react'
import CartItem from './CartItem'
import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../State/Store';
import { createOrder } from '../State/Order/Action';
import { clearCart } from '../State/Cart/Action';
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    streetAddress: "",
    stateProvince: "",
    country: "",
    city: ""
}

const Cart = () => {
    const {cart} = useSelector((store) => store)
    const createOrderUsingAddress = () => {}

    const handleOpenAddressModel = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()

    const handleSubmit = (value) => {
        const data = {
            jwt: localStorage.getItem("jwt"),
            order:{
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress:{
                    streetAddress:value.streetAddress,
                    stateProvince: value.stateProvince,
                    country: value.country,
                    city: value.city
                }
            }
        }
        dispatch(createOrder(data))
        dispatch(clearCart())
    }
    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {
                        cart.cart?.item?.map((item) => <CartItem item={item} />)
                    }
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>{cart.cart?.total}</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Deliver Fee</p>
                                <p>{cart.cart?.total !== 0 ? 30:0}</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>{cart.cart?.total !== 0 ? 20 : 0}</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Total Bill</p>
                            <p>{cart.cart?.total !==0 ? (cart.cart?.total+50):0}</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                    </div>
                    <div className='flex flex-wrap gap-5 justify-center'>
                        {
                            [1, 1].map((item) => <AddressCard handleSelectAddress={createOrderUsingAddress} item={item} showButton={true} />)
                        }
                        <Card className='flex gap-5 w-64 p-5'>
                            <AddLocationAltIcon />
                            <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Add new address</h1>
                                <Button variant='outlined' fullWidth onClick={handleOpenAddressModel}>Add</Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
                        <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field as={TextField} 
                                name="streetAddress" 
                                label="Street Address" 
                                fullWidth variant="outlined" 
                                >
                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField} 
                                name="stateProvince" 
                                label="State Province" 
                                fullWidth variant="outlined" 
                                >
                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField} 
                                name="city" 
                                label="City" 
                                fullWidth variant="outlined" 
                                >
                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field as={TextField} 
                                name="country" 
                                label="Country" 
                                fullWidth variant="outlined" 
                                >
                                </Field>
                            </Grid>
                            <Grid item xs= {12}>
                                <Button fullWidth variant='contained' type='submit' color='primary'>Deliver Here</Button>
                            </Grid>
                        </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart
