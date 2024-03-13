import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurant from "../AdminComponent/CreateRestaurant/CreateRestaurant";
import Admin from "../AdminComponent/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../component/State/Store";
import { getRestaurantByUserId } from "../component/State/Restaurant/Action";

const AdminRoute = () => {
  const restaurant = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
    }
  }, [auth.user]);
  return (
    <div>
      <Routes>
        <Route
          path="*" element={restaurant.userRestaurant ? <Admin /> : <CreateRestaurant />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
