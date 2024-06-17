import { Create, Delete } from "@mui/icons-material";
import { Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import CreateIngredients from "./CreateIngredients";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientRestaurant, updateStockIngredient } from "../../component/State/Ingredient/Action";
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
const IngredientTable = () => {
  const ingredient = useSelector(store => store.ingredient)
  const jwt = localStorage.getItem("jwt")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()

  const handleUpdateStock = (id)=>{
    dispatch(updateStockIngredient({id, jwt}))
  }
  const handleDeleteIngredient = (id)=>{

  }
  return (
    <div className="p-5">
       <Box>
      <Card className="my-2">
        <CardHeader action={
            <IconButton onClick={handleOpen} aria-label="settings">
                <Create/>
            </IconButton>
        } title={"Ingredients"} sx={{ pt: 2, alignItems: "center" }} />
      </Card>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateIngredients/>
          </Box>
        </Modal>
      {/* table MUI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Availability</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredient.ingredients?.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                   {item.id}
                </TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.category.name}</TableCell>
                <TableCell sx={{padding:0}} align="center">
                  <Button onClick={()=>handleUpdateStock(item.id)}>{item.stock?"Yes":"No"}</Button>
                </TableCell>
                <TableCell sx={{padding:0}} align="center">
                  <IconButton onClick={()=>handleDeleteIngredient(item.id)}>
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

export default IngredientTable;