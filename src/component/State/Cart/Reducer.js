import { LOGOUT } from "../Authentication/ActionType";
import * as ActionType from "./ActionType";
const initialState = {
  cart: null,
  cartItems: [],
  total: 0,
  loading: false,
  cartError: null,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_CART_ITEMS_REQUEST:
    case ActionType.FIND_CART_REQUEST:
    case ActionType.UPDATE_CART_ITEM_REQUEST:
    case ActionType.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        cartError: null,
      };
    case ActionType.FIND_CART_SUCCESS:
    case ActionType.CLEAR_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems: action.payload.item
      };

    case ActionType.ADD_ITEM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [action.payload, ...state.cartItems],
      };
    case ActionType.UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case ActionType.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case ActionType.GET_ALL_CART_ITEMS_FAILURE:
    case ActionType.FIND_CART_FAILURE:
    case ActionType.UPDATE_CART_ITEM_FAILURE:
    case ActionType.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        cartError: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("jwt");
      return {
        ...state,
        cart: null,
        cartItems: [],
      };
    default:
      return state;
  }
};
