import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
const OrderTable = () => {
  return (
    <Box>
      <Card className="my-2">
        <CardHeader title={"All Orders"} sx={{ pt: 2, alignItems: "center" }} />
      </Card>
      {/* table MUI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Customer</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,1,1,1,1].map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                   nbhjn kkm
                </TableCell>
                <TableCell align="right">bhgj</TableCell>
                <TableCell align="right">vghyuhjiklm</TableCell>
                <TableCell align="right">gvhyuhijkl</TableCell>
                <TableCell align="right">gyuhijk</TableCell>
                <TableCell align="right">hgyuiokl</TableCell>
                <TableCell align="right"> bhjk</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
