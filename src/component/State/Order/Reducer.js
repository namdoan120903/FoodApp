import * as ActionType from "./ActionType";
const initialState = {
  loading: false,
  orders: [],
  nowOrder:null,
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
    case ActionType.GET_RESTAURANT_ORDER_SUCCESS:
      return{
        ...state,
        loading:false,
        orders:action.payload
      }
    case ActionType.UPDATE_ORDER_SUCCESS:
      return{
        ...state,
        loading: false,
        orders: state.orders.map((item) => item.id === action.payload.id? action.payload: item)
      }
    case ActionType.FIND_ORDER_BY_ID_SUCCESS:
      return{
        ...state,
        loading: false,
        nowOrder: action.payload
      }
    case ActionType.GET_USER_ORDER_FAILURE:
        return{...state, loading: false, orderError: action.payload}
    default:
      return state;
  }
};
