import { api } from "../../Config/Api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, FIND_ORDER_BY_ID_FAILURE, FIND_ORDER_BY_ID_REQUEST, FIND_ORDER_BY_ID_SUCCESS, GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, UPDATE_ORDER_FAILURE, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS } from "./ActionType"

export const  createOrder = (reqData)=>async(dispatch)=>{
    dispatch({type: CREATE_ORDER_REQUEST})
    try {
        const {data} = await api.post(`api/order`,reqData.order,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        if(data.payment_url){
            window.location.href = data.payment_url;
        }
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  getUserOrder = (jwt)=>async(dispatch)=>{
    dispatch({type: GET_USER_ORDER_REQUEST})
    try {
        const {data} = await api.get(`api/order/user`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_USER_ORDER_SUCCESS, payload: data})
        console.log("user orders", data)
    } catch (error) {
        dispatch({type:GET_USER_ORDER_FAILURE, payload:error})
        console.log(" ", error)
    }
}
export const  getRestaurantOrder = (reqData)=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_ORDER_REQUEST})
    try {
        const {data} = await api.get(`api/admin/order/restaurant/${reqData.id}?orderStatus=${reqData.orderStatus}`,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_ORDER_SUCCESS, payload: data})
        console.log("restaurant orders", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_ORDER_FAILURE, payload:error})
        console.log(" ", error)
    }
}
export const  updateOrder = (reqData)=>async(dispatch)=>{
    dispatch({type: UPDATE_ORDER_REQUEST})
    try {
        const {data} = await api.put(`api/admin/order/${reqData.id}?orderStatus=${reqData.orderStatus}`,{},{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:UPDATE_ORDER_SUCCESS, payload: data})
        console.log("update order status", data)
    } catch (error) {
        dispatch({type:UPDATE_ORDER_FAILURE, payload:error})
        console.log(" ", error)
    }
}
export const  findOrderById = (reqData)=>async(dispatch)=>{
    dispatch({type: FIND_ORDER_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`api/admin/order/${reqData.id}`,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:FIND_ORDER_BY_ID_SUCCESS, payload: data})
        console.log("order by id", data)
    } catch (error) {
        dispatch({type:FIND_ORDER_BY_ID_FAILURE, payload:error})
        console.log(" ", error)
    }
}