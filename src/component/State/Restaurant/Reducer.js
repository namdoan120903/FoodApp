import * as ActionType from "./ActionType";

const initialState = {
  restaurants: [],
  userRestaurant: null,
  restaurant: null,
  loading: false,
  resError: null,
  events: [],
  restaurantEvent: [],
  category: [],
};
export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_RESTAURANT_REQUEST:
    case ActionType.GET_ALL_RESTAURANT_REQUEST:
    case ActionType.DELETE_RESTAURANT_REQUEST:
    case ActionType.UPDATE_RESTAURANT_REQUEST:
    case ActionType.GET_RESTAURANT_BY_ID_REQUEST:
    case ActionType.CREATE_CATEGORY_REQUEST:
    case ActionType.GET_RESTAURANT_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        userRestaurant: action.payload,
      };
    case ActionType.GET_ALL_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };
    case ActionType.GET_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
      };
    case ActionType.GET_RESTAURANT_BY_USER_ID_SUCCESS:
    case ActionType.UPDATE_RESTAURANT_STATUS_SUCCESS:
    case ActionType.UPDATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        userRestaurant: action.payload,
      };
    case ActionType.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: state.restaurants.filter(
          (item) => item.id !== action.payload
        ),
        userRestaurant: null,
      };
    case ActionType.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: [...state.events, action.payload],
        restaurantEvent: [...state.restaurantEvent, action.payload],
      };
    case ActionType.GET_ALL_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case ActionType.GET_RESTAURANT_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurantEvent: action.payload,
      };
    case ActionType.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter((item) => item.id !== action.payload),
        restaurantEvent: state.restaurantEvent.filter(
          (item) => item.id !== action.payload
        ),
      };
    case ActionType.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: [...state, action.payload],
      };
    case ActionType.GET_RESTAURANT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case ActionType.CREATE_RESTAURANT_FAILURE:
    case ActionType.GET_ALL_RESTAURANT_FAILURE:
    case ActionType.DELETE_RESTAURANT_FAILURE:
    case ActionType.UPDATE_RESTAURANT_FAILURE:
    case ActionType.GET_RESTAURANT_BY_ID_FAILURE:
    case ActionType.CREATE_EVENT_FAILURE:
    case ActionType.CREATE_CATEGORY_FAILURE:
    case ActionType.GET_RESTAURANT_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        resError: action.payload,
      };
    default:
      return state;
  }
};
