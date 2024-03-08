import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { categorizeIngredients } from "../Config/logic";
import { useDispatch } from "react-redux";
import { addItemToCart, findCart } from "../State/Cart/Action";

const MenuCard = ({item}) => {
  const [selectIngredients, setSelectIngredients] = useState([])
  const dispatch = useDispatch()
  const handleCheckBoxChange = (ingredient)=>{
    if(selectIngredients.includes(ingredient)){
      setSelectIngredients(selectIngredients.filter((item) => item !== ingredient))
    }else{
      setSelectIngredients([...selectIngredients, ingredient])
    }
  }
  const handleAddToCart = (e)=>{
      e.preventDefault()
      const reqData = {
        jwt: localStorage.getItem("jwt"),
        cartItem:{
          foodId: item.id,
          quantity: 1,
          ingredientsItems: selectIngredients
        } 
      }
      dispatch(addItemToCart(reqData))
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item?.name}</p>
              <p>{item?.price}</p>
              <p></p>
              <p className="text-gray-400">{item?.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddToCart}>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
              <div>
                <p>{category}</p>
                <FormGroup>
                  {
                    categorizeIngredients(item.ingredients)[category].map((ingre) =><FormControlLabel key={ingre.id} control={<Checkbox onChange={()=>handleCheckBoxChange(ingre.name)} />} label={ingre.name} />)
                  }
                </FormGroup>
              </div>
            ))
            }
          </div>
          <div className="pt-5">
            <Button variant="contained" type="submit" disabled = {false}>{true?"Add to cart":"Out of stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
