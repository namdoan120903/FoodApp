import { Create, Delete } from "@mui/icons-material";
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import CreateIngredients from "./CreateIngredients";
import CreateIngredientsCategory from "./CreateIngredientsCategory";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientCategory } from "../../component/State/Ingredient/Action";
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
const IngredientCategory = () => {
  const restaurant = useSelector(store => store.restaurant)
  const ingredient = useSelector(store => store.ingredient)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getIngredientCategory({
      id: restaurant.userRestaurant.id,
      jwt: localStorage.getItem("jwt")
    }))
  },[])
  const handleDeleteCategory = (id)=>{

  }
  return (
    <div className="p-5">
        <Box>
      <Card className="my-2">
        <CardHeader action={
            <IconButton onClick={handleOpen}aria-label="settings">
                <Create />
            </IconButton>
        } title={"Ingredients Category"} sx={{ pt: 2, alignItems: "center" }} />
      </Card>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CreateIngredientsCategory/>
          </Box>
        </Modal>
      {/* table MUI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredient.category?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell >
                   {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell sx={{padding:0}} align="center">
                  <IconButton  onClick={()=>handleDeleteCategory(row.id)}>
                    <Delete sx={{margin:0}}/>
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

export default IngredientCategory;
