import { api } from "../../Config/Api"
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

export const updateOrderStatus = ({orderId, orderStatus, jwt})=>async(dispatch)=>{
    dispatch({type: UPDATE_ORDER_STATUS_REQUEST})
    try {
        const {data} = await api.post(`api/admin/orders/${orderId}/${orderStatus}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type:UPDATE_ORDER_STATUS_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  getRestaurantOrder = ({restaurantId, status, jwt})=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_ORDER_REQUEST})
    try {
        const {data} = await api.post(`api/admin/order/restaurant/${restaurantId}?orderStatus=${status}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_ORDER_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_ORDER_FAILURE, payload:error})
        console.log("error", error)
    }
}