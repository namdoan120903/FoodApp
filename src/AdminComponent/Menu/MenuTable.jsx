import { Create, Delete } from "@mui/icons-material";
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
const MenuTable = () => {
  return (
    <Box>
      <Card className="my-2">
        <CardHeader action={
            <IconButton aria-label="settings">
                <Create/>
            </IconButton>
        } title={"Menu"} sx={{ pt: 2, alignItems: "center" }} />
      </Card>
      {/* table MUI */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Ingredients</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Availability</TableCell>
              <TableCell align="center">Delete</TableCell>
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
                <TableCell align="center">bhgj</TableCell>
                <TableCell align="center">vghyuhjiklm</TableCell>
                <TableCell align="center">gvhyuhijkl</TableCell>
                <TableCell align="center">gyuhijk</TableCell>
                <TableCell align="center"><IconButton><Delete/></IconButton></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MenuTable;
