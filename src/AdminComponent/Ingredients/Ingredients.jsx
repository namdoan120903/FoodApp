import { Grid } from '@mui/material'
import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategory from './IngredientCategory'

const Ingredients = () => {
  return (
    <div>
      <Grid container spacing={1}>
          <Grid item xs={12} lg={8}>
            <IngredientTable/>
          </Grid>
          <Grid item xs={12} lg={4}>
            <IngredientCategory/>
          </Grid>
      </Grid>
    </div>
  )
}

export default Ingredients