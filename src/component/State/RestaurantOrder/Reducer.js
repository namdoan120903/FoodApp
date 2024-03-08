import * as ActionType from "./ActionType";
const initialState = {
  loading: false,
  resOrError: null,
  orders: [],
};
export const restaurantOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_RESTAURANT_ORDER_REQUEST:
    case ActionType.UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        resOrError: null,
      };
    case ActionType.GET_RESTAURANT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ActionType.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.filter((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case ActionType.GET_RESTAURANT_ORDER_FAILURE:
    case ActionType.UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        resOrError: action.payload,
      };
    default:
      return state;
  }
};
