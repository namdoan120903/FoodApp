import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { uploadImageToCloudinary } from "../Util/UploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { createMenuItem } from "../../component/State/Menu/Action";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredientsItems: [],
  images: [],
};

const CreateMenuForm = () => {
  const restaurant = useSelector(store =>store.restaurant)
  const ingredient = useSelector(store => store.ingredient)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
        values.restaurantId = restaurant.userRestaurant.id
        dispatch(createMenuItem({menu: values, jwt:localStorage.getItem("jwt")}))
        console.log("dsahudji", values)
    },
  });
  const [uploadImage, setUploadImage] = useState(false);
  const handleImageChange = async (e) => {
    const file = e.target.files[0]; // get name
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    console.log(image);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };
  const handleRemove = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };
  return (
    <div className="p-10 lg:flex flex-col items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-4xl py-2 text-center pb-10">
          Add New Menu Item
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={12} className="flex flex-wrap gap-5">
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="fileInput" className="relative">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternate className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative">
                    <img
                      key={index}
                      className="w-24 h-24 object-cover"
                      src={image}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleRemove(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                label="Description"
                name="description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="price"
                label="Price"
                name="price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Food Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.category}
                  label="Food Category"
                  name="category"
                  onChange={formik.handleChange}
                >{
                  restaurant.category?.map((item)=><MenuItem value={item}>{item.name}</MenuItem>)
                }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">
                  Ingredients
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  name="ingredientsItems"
                  multiple
                  value={formik.values.ingredientsItems}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Ingredients"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value.id} label={value.name} />
                      ))}
                    </Box>
                  )}
                >
                  {ingredient.ingredients?.map((item) => (
                    <MenuItem key={item.id} value={item}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.vegetarian}
                  label="Is Vegetarian"
                  name="vegetarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.seasonal}
                  label="Is Seasonal"
                  name="seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            Create Menu Item
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;
