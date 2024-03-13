import { Create, Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFood, getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";
const MenuTable = () => {
  const navigate = useNavigate();
  const menu = useSelector((store) => store.menu);
  const restaurant = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: restaurant.userRestaurant.id,
        jwt: localStorage.getItem("jwt"),
        vegetarian: false,
        nonVegetarian: false,
        seasonal: false,
        foodCategory: "",
      })
    );
  }, []);
  const handleDeleteFood = (id)=>{
      dispatch(deleteFood({foodId: id, jwt: localStorage.getItem("jwt")}))
  }
  return (
    <Box>
      <Card className="my-2">
        <CardHeader
          action={
            <IconButton
              onClick={() => navigate("/admin/restaurant/add-menu")}
              aria-label="settings"
            >
              <Create />
            </IconButton>
          }
          title={"Menu"}
          sx={{ pt: 2, alignItems: "center" }}
        />
      </Card>
      {/* table MUI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Ingredients</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Availability</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menu.menuItems.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar src={item?.images[0]}></Avatar>
                </TableCell>
                <TableCell align="center">{item?.name}</TableCell>
                <TableCell align="center">{item.ingredients?.map((ingredient)=><Chip label={ingredient.name}></Chip>)}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.available?"Yes":"No"}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={()=>handleDeleteFood(item.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MenuTable;
