import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { createIngredient } from "../../component/State/Ingredient/Action";

const CreateIngredients = () => {
  const dispatch = useDispatch()
  const ingredient = useSelector(store => store.ingredient)
  const restaurant = useSelector(store => store.restaurant)
    const [formData, setFormData] = useState({ingredient: "", categoryId:"", restaurantId:""})

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
        name: formData.ingredient,
        categoryId: formData.categoryId,
        restaurantId: restaurant.userRestaurant.id
    }
    dispatch(createIngredient({data, jwt: localStorage.getItem("jwt")}))
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
          Create Ingredients
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="ingredient"
            label="Ingredient"
            name="ingredient"
            variant="outlined"
            onChange={handleInputChange}
            value={FormData.ingredient}
          ></TextField>
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ingredient Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.categoryId}
                  label="Ingredient Category"
                  name="categoryId"
                  onChange={handleInputChange}
                >{
                  ingredient.category?.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>)
                }
                  
                </Select>
              </FormControl>
          <Button variant="contained" type="submit">Create Ingredient</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredients;
