import { api } from "../../Config/Api"
import { CREATE_MENU_ITEMS_FAILURE, CREATE_MENU_ITEMS_REQUEST, CREATE_MENU_ITEMS_SUCCESS, DELETE_MENU_ITEMS_FAILURE, DELETE_MENU_ITEMS_REQUEST, DELETE_MENU_ITEMS_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS } from "./ActionType"

export const  createMenuItem = ({menu, jwt})=>async(dispatch)=>{
    dispatch({type: CREATE_MENU_ITEMS_REQUEST})
    try {
        const {data} = await api.post(`api/admin/food`, menu,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:CREATE_MENU_ITEMS_SUCCESS, payload: data})
        console.log("create menu item", data)
    } catch (error) {
        dispatch({type:CREATE_MENU_ITEMS_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const getMenuItemsByRestaurantId = (reqData)=>async(dispatch)=>{
    dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_REQUEST})
    try {
        const {data} = await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonVegetarian=${reqData.nonVegetarian}&seasonal=${reqData.seasonal}&foodCategory=${reqData.foodCategory}`,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS, payload: data})
        console.log("menu items", data)
    } catch (error) {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const searchMenuItem = ({keyword, jwt})=>async(dispatch)=>{
    dispatch({type: SEARCH_MENU_ITEM_REQUEST})
    try {
        const {data} = await api.post(`api/food/search?keyword=${keyword}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  updateMenuItemAvailability = ({foodId, jwt})=>async(dispatch)=>{
    dispatch({type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST})
    try {
        const {data} = await api.put(`api/admin/food/${foodId}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const deleteFood = ({foodId, jwt})=>async(dispatch)=>{
    dispatch({type: DELETE_MENU_ITEMS_REQUEST})
    try {
        const {data} = await api.delete(`api/admin/food/${foodId}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:DELETE_MENU_ITEMS_SUCCESS, payload: foodId})
        console.log("delete food", data)
    } catch (error) {
        dispatch({type:DELETE_MENU_ITEMS_FAILURE, payload:error})
        console.log("error", error)
    }
}


