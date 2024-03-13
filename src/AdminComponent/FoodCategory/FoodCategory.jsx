import { Create, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateFoodCategory from "./CreateFoodCategory";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantCategory } from "../../component/State/Restaurant/Action";
import { store } from "../../component/State/Store";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const FoodCategory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const restaurant = useSelector(store => store.restaurant)
  const handleDeleteCategory = (id)=>{

  }
  return (
    <div className="p-5">
      <Box>
        <Card className="my-2">
          <CardHeader
            action={
              <IconButton onClick={handleOpen} aria-label="settings">
                <Create />
              </IconButton>
            }
            title={"Menu"}
            sx={{ pt: 2, alignItems: "center" }}
          />
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateFoodCategory/>
          </Box>
        </Modal>
        {/* table MUI */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Food of Category</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant.category?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell sx={{padding:0}} align="center">
                  <IconButton onClick={()=>handleDeleteCategory(row.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default FoodCategory;
