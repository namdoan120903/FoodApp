import { Create, Delete } from "@mui/icons-material";
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
const FoodCategory = () => {
  return (
    <div className="p-5">
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
              <TableCell >Id</TableCell>
              <TableCell align="center">Title</TableCell>
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
