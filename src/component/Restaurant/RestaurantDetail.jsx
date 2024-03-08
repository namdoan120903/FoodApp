import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../State/Store";
import {
  getRestaurantById,
  getRestaurantCategory,
} from "../State/Restaurant/Action";
import { getMenuItemsByRestaurantId } from "../State/Menu/Action";

const foodTypes = [
  { label: "All", value: "all" },
  { label: "vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "nonVegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const menuCard = [1, 1, 1, 1, 1, 1, 1];

const RestaurantDetail = () => {
  const [foodType, setFoodType] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, restaurant, menu } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [selectCategory, setSelectCategory] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(getRestaurantById({ jwt, restaurantId: id }));
      dispatch(getRestaurantCategory({ restaurantId: id, jwt }));
    }
  }, [jwt]);
  useEffect(() => {
    if (auth.jwt || jwt) {
      dispatch(
        getMenuItemsByRestaurantId({
          jwt,
          restaurantId: id,
          vegetarian: foodType === "vegetarian",
          nonVegetarian: foodType === "nonVegetarian",
          seasonal: foodType === "seasonal",
          foodCategory: selectCategory,
        })
      );
    }
  }, [selectCategory, foodType]);

  const handleFilterType = (e) => {
    setFoodType(e.target.value);
  };
  const handleFilterCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/india fast food</h3>
        <div>
          {/*div image restaurant*/}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          {/*description restaurant location and open time*/}
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1 ">
            {restaurant.restaurant?.description}
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>daksdjkasdjsakduiiqwicsancmksankcsj</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>{restaurant.restaurant?.openingHours}</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        {/*Category and food type */}
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilterType}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  key="all"
                  onChange={handleFilterCategory}
                  name="foodCategory"
                  value={selectCategory}
                >
                  <FormControlLabel
                    value={""}
                    control={<Radio />}
                    label={"All"}
                  />
                  {restaurant.category.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
