import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findOrderById } from "../../component/State/Order/Action";
import { Button, Card, Chip } from "@mui/material";

const OrderItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector((store) => store.order);
  useEffect(() => {
    dispatch(
      findOrderById({
        jwt: localStorage.getItem("jwt"),
        id: id,
      })
    );
  }, []);
  return (
    <div className=''>
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center py-7 font-semibold">ORDER WITH ID : {id}</h1>
        <h1 className="text-xl text-center py-2 font-semibold">CUSTOMER NAME : {order.nowOrder?.customer.fullName}</h1>
        <h1 className="text-xl text-center py-4 font-semibold">TOTAL PRICE : {order.nowOrder?.totalPrice}</h1>
        <div className="space-y-5 w-full lg:w-[80%]">
          {
            order.nowOrder?.orderItems.map((item) => (
              <>
                <Card className="flex justify-between items-center p-5">
                  <div className="flex items-center space-x-10">
                    <img
                      className="w-16 h-16"
                      src={item.food.images[0]}
                      alt=""
                    />
                    <div>
                      <p>Food Name</p>
                      <p>{item.food.name}</p>
                    </div>
                    <div>
                      <p>Price</p>
                      <p>{item.totalPrice}</p>
                    </div>
                    <div>
                      <p>Quantity</p>
                      <p>{item.quantity}</p>
                    </div>
                    
                  </div>
                  <div>
                    {
                      item.ingredients.map((ingredient)=><Chip sx={{margin:'0.5rem'}} label={ingredient}/>)
                    }
                  </div>
                </Card>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
