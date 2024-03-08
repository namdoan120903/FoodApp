import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable';

const orderStatus = [
  {label: "Pending" , value: "PENDING"},
  {label: "Completed" , value: "COMPLETED"},
  {label: "All" , value: "ALL"}
]

const Orders = () => {
  const [filterValue, setFilterValue] = useState();
  const handleFilter = (e, value)=>{
    setFilterValue(value)
    console.log(value)
  }
  return (
    <div className='p-5'>
      <Card className='px-5'>
        <Typography sx={{padding:"1rem 0"}} variant='h5'>
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
            {
              orderStatus.map((item) => <FormControlLabel sx={{color:"gray"}} key={item.label} value={item.value} label={item.label} control={<Radio/>}/>)
            }
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable/>
    </div>
  )
}

export default Orders