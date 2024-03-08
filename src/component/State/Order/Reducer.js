import * as ActionType from "./ActionType";
const initialState = {
  loading: false,
  orders: [],
  orderError: null,
  notification: [],
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        orderError: null,
      };
    case ActionType.GET_USER_ORDER_SUCCESS:
        return{
            ...state,
            loading:false,
            orders: action.payload,
            orderError: null
        }
    case ActionType.GET_USER_ORDER_FAILURE:
        return{...state, loading: false, orderError: action.payload}
    default:
      return state;
  }
};
