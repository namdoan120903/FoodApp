import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantOrder, updateOrder } from "../../component/State/Order/Action";

import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import OrderItem from "./OrderItem";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Delivered", value: "DELIVERED" },
  { label: "Out for Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "All", value: "ALL" },
];
const updateStatus = [
  {label:"PENDING", value:"PENDING"},
  {label:"Completed" ,value:"COMPLETED"},
  {label:"Out for Delivery", value:"OUT_FOR_DELIVERY"},
  {label:"DELIVERED", value:"DELIVERED"}
]

const Orders = () => {
  //Get order with status
  const [filterValue, setFilterValue] = useState("ALL");
  const navigate = useNavigate();
  const handleFilter = (e, value) => {
    setFilterValue(value);
  };
  //Update order status
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentId, setCurrentId] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setCurrentId(id)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const jwt = localStorage.getItem('jwt')
  const restaurant = useSelector((store) => store.restaurant);
  const order = useSelector((store) => store.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getRestaurantOrder({
        jwt: localStorage.getItem("jwt"),
        id: restaurant.userRestaurant.id,
        orderStatus: filterValue,
      })
    );
  }, [filterValue]);
  const handleOpenOrderItem = (id) => {
    navigate(`/admin/restaurant/orders/${id}`);
  };
  const handleUpdateStatus = (orderStatus)=>{
    dispatch(updateOrder({id: currentId,orderStatus, jwt}))
    handleClose()
  }
  return (
    <div className="p-5">
      <Card className="px-5">
        <Typography sx={{ padding: "1rem 0" }} variant="h5">
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup
            onChange={handleFilter}
            row
            name="category"
            value={filterValue || "all"}
          >
            {orderStatus.map((item) => (
              <FormControlLabel
                sx={{ color: "gray" }}
                key={item.label}
                value={item.value}
                label={item.label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <Box>
        <Card className="my-2">
          <CardHeader
            title={"All Orders"}
            sx={{ pt: 2, alignItems: "center" }}
          />
        </Card>
        {/* table MUI */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Create At</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">Delivery At</TableCell>
                <TableCell align="center">View Items</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orders?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.customer.fullName}</TableCell>
                  <TableCell align="center">{row.totalPrice}</TableCell>
                  <TableCell align="center">
                    {format(row.createdAt, "HH:mm dd/MM/yy")}
                  </TableCell>
                  <TableCell align="center">{row.orderItems?.length}</TableCell>
                  <TableCell align="center">
                    {row.deliveryAddress?.streetAddress}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => handleOpenOrderItem(row.id)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Button variant="contained" size="small">
                      View
                    </Button>
                  </TableCell>
                  <TableCell align="center"> {row?.orderStatus}</TableCell>
                  <TableCell align="center">
                    <Button
                      id={row.id}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(event)=>handleClick(event, row.id)}
                    >
                      Update 
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    > 
                      {updateStatus.map((status)=><MenuItem onClick={()=>handleUpdateStatus(status.value)}>{status.label}</MenuItem>)}
                    </Menu>
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
export default Orders;
