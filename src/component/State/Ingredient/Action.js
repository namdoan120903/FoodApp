import { api } from "../../Config/Api"
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType"

export const getIngredientRestaurant = ({id, jwt})=>async(dispatch)=>{
    try {
        const {data} = await api.get(`api/admin/ingredient/restaurant/${id}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_INGREDIENTS, payload: data})
        console.log("ingredient", data)
    } catch (error) {
        console.log("error", error)
    }
}
export const createIngredient = (reqData)=>async(dispatch)=>{
    dispatch({type: CREATE_INGREDIENT_REQUEST})
    try {
        const {data} = await api.post(`api/admin/ingredient`,reqData.data,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:CREATE_INGREDIENT_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type: CREATE_INGREDIENT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const createIngredientCategory = (reqData)=>async(dispatch)=>{
    dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST})
    try {
        const {data} = await api.post(`api/admin/ingredient/category`,reqData.data,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const getIngredientCategory = ({id, jwt})=>async(dispatch)=>{
    dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST})
    try {
        const {data} = await api.get(`api/admin/ingredient/restaurant/${id}/category`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS, payload: data})
        console.log("ingredient category", data)
    } catch (error) {
        dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const updateStockIngredient = ({id, jwt})=>async(dispatch)=>{
    try {
        const {data} = await api.put(`api/admin/ingredient/${id}/stock`,{},{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:UPDATE_STOCK, payload: data})
        console.log("update stock", data)
    } catch (error) {
        console.log("error", error)
    }
}