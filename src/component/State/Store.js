import { applyMiddleware, combineReducers, createStore, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { ingredientReducer } from "./Ingredient/Reducer";
import { restaurantOrdersReducer } from "./RestaurantOrder/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantOrdersReducer,
    ingredient: ingredientReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))