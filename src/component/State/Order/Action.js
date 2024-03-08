import { api } from "../../Config/Api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_ORDER_FAILURE, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./ActionType"

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