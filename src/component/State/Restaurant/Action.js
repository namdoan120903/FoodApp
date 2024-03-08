import axios from "axios"
import { API_URL, api } from "../../Config/Api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, GET_ALL_EVENT_FAILURE, GET_ALL_EVENT_REQUEST, GET_ALL_EVENT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, GET_RESTAURANT_EVENT_FAILURE, GET_RESTAURANT_EVENT_REQUEST, GET_RESTAURANT_EVENT_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"

export const  getAllRestaurant = (jwt)=>async(dispatch)=>{
    dispatch({type: GET_ALL_RESTAURANT_REQUEST})
    try {
        const {data} = await api.get(`api/restaurants`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_ALL_RESTAURANT_SUCCESS, payload: data})
        console.log("all restaurant", data)
    } catch (error) {
        dispatch({type:GET_ALL_RESTAURANT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  getRestaurantById = (reqData)=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`api/restaurants/${reqData.restaurantId}`,{
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS, payload: data})
        console.log("restaurant by id", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_BY_ID_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  getRestaurantByUserId = (jwt)=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/admin/restaurants/user`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data})
        console.log("restaurant owner", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  createRestaurant = (reqData)=>async(dispatch)=>{
    dispatch({type: CREATE_RESTAURANT_REQUEST})
    try {
        const {data} = await api.post(`api/admin/restaurants/user`, reqData.data, {
            headers:{
                Authorization : `Bearer ${reqData.jwt}`
            }
        } )
        dispatch({type:CREATE_RESTAURANT_SUCCESS, payload: data})
        console.log("restaurant create", data)
    } catch (error) {
        dispatch({type:CREATE_RESTAURANT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  updateRestaurant = ({restaurantId, restaurantData, jwt})=>async(dispatch)=>{
    dispatch({type: UPDATE_RESTAURANT_REQUEST})
    try {
        const {data} = await api.put(`api/admin/restaurants/${restaurantId}`, restaurantData, {
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:UPDATE_RESTAURANT_SUCCESS, payload: data})
        console.log("restaurant update", data)
    } catch (error) {
        dispatch({type:UPDATE_RESTAURANT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const  deleteRestaurant = ({restaurantId, jwt})=>async(dispatch)=>{
    dispatch({type: DELETE_RESTAURANT_REQUEST})
    try {
        const {data} = await api.delete(`api/admin/restaurants/${restaurantId}`, {
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:DELETE_EVENT_SUCCESS, payload: restaurantId})
        console.log("restaurant delete", data)
    } catch (error) {
        dispatch({type:DELETE_RESTAURANT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const updateRestaurantStatus = ({restaurantId, jwt})=>async(dispatch)=>{
    dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
    try {
        const {data} = await api.put(`api/admin/restaurants/${restaurantId}/status`, {
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data})
        console.log("restaurant update status", data)
    } catch (error) {
        dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const createEvents = ({restaurantId, jwt, eventData})=>async(dispatch)=>{
    dispatch({type: CREATE_EVENT_REQUEST})
    try {
        const {data} = await api.post(`api/admin/events/restaurants/${restaurantId}`, eventData, {
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:CREATE_EVENT_SUCCESS, payload: data})
        console.log("event create", data)
    } catch (error) {
        dispatch({type:CREATE_EVENT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const getAllEvents = ({jwt})=>async(dispatch)=>{
    dispatch({type: GET_ALL_EVENT_REQUEST})
    try {
        const {data} = await api.get(`api/admin/events`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_ALL_EVENT_SUCCESS, payload: data})
        console.log("event get all", data)
    } catch (error) {
        dispatch({type:GET_ALL_EVENT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const deleteEvents = ({eventId, jwt})=>async(dispatch)=>{
    dispatch({type: DELETE_EVENT_REQUEST})
    try {
        const {data} = await api.delete(`api/admin/events/${eventId}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:DELETE_EVENT_SUCCESS, payload: eventId})
        console.log("event delete", data)
    } catch (error) {
        dispatch({type:DELETE_EVENT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const getRestaurantEvents = ({jwt, restaurantId})=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_EVENT_REQUEST})
    try {
        const {data} = await api.get(`api/admin/events/restaurant/${restaurantId}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_EVENT_SUCCESS, payload: data})
        console.log("event restaurant", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_EVENT_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const createCategory = ({jwt, reqData})=>async(dispatch)=>{
    dispatch({type: CREATE_CATEGORY_REQUEST})
    try {
        const {data} = await api.post(`api/admin/category`, reqData,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:CREATE_CATEGORY_SUCCESS, payload: data})
        console.log("category create", data)
    } catch (error) {
        dispatch({type:CREATE_CATEGORY_FAILURE, payload:error})
        console.log("error", error)
    }
}
export const getRestaurantCategory = ({restaurantId,jwt})=>async(dispatch)=>{
    dispatch({type: GET_RESTAURANT_CATEGORY_REQUEST})
    try {
        const {data} = await api.get(`api/category/${restaurantId}`,{
            headers:{
                Authorization : `Bearer ${jwt}`
            }
        } )
        dispatch({type:GET_RESTAURANT_CATEGORY_SUCCESS, payload: data})
        console.log("category restaurant", data)
    } catch (error) {
        dispatch({type:GET_RESTAURANT_CATEGORY_FAILURE, payload:error})
        console.log("error", error)
    }
}
