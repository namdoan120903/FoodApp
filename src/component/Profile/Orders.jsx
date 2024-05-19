import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../State/Store";
import { getUserOrder } from "../State/Order/Action";
import { Divider } from "@mui/material";

const Orders = () => {
  const { auth, order } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrder(jwt));
  }, [auth.jwt]);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full px-5 lg:w-[70%] pb-10">
        {order.orders.map((order) => (
          <>
            <p>Order with id {order.id} </p>
            {
              <OrderCard order={order} />
            }
          </>
        ))}
      </div>
    </div>
  );
};

export default Orders;
