import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { createIngredientCategory } from "../../component/State/Ingredient/Action";

const CreateIngredientsCategory = () => {
  const dispatch = useDispatch()
  const restaurant = useSelector(store => store.restaurant)
    const [formData, setFormData] = useState({categoryName: "", restaurantId:""})
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        name: formData.categoryName,
        restaurantId: restaurant.userRestaurant.id
    }
    dispatch(createIngredientCategory({jwt: localStorage.getItem("jwt"), data}))
  };
  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setFormData({
        ...formData,[name]: value
    })
  }
  return (
    <div>
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="categoryName"
            label="Category Name"
            name="categoryName"
            variant="outlined"
            onChange={handleInputChange}
            value={FormData.categoryName}
          ></TextField>
          <Button variant="contained" type="submit">Create Ingredient Category</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientsCategory;
