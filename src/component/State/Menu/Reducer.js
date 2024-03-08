import * as ActionType from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  menuError: null,
  search: [],
  message: null,
};

export const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_MENU_ITEMS_REQUEST:
    case ActionType.GET_MENU_ITEMS_BY_RESTAURANT_REQUEST:
    case ActionType.DELETE_MENU_ITEMS_REQUEST:
    case ActionType.SEARCH_MENU_ITEM_REQUEST:
    case ActionType.UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
      return {
        ...state,
        loading: true,
        menuError: null,
        message: null,
      };
    case ActionType.CREATE_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: [...state.menuItems, action.payload],
        message: "Food Created Successfully",
      };
    case ActionType.DELETE_MENU_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.filter((item) => item.id !== action.payload),
        message: "Food Deleted Successfully",
      };
    case ActionType.UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.filter((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        message: "Food Availability updated Successfully",
      };
    case ActionType.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case ActionType.GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
      };
    case ActionType.CREATE_MENU_ITEMS_FAILURE:
    case ActionType.GET_MENU_ITEMS_BY_RESTAURANT_FAILURE:
    case ActionType.DELETE_MENU_ITEMS_FAILURE:
    case ActionType.SEARCH_MENU_ITEM_FAILURE:
    case ActionType.UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
      return {
        ...state,
        loading: false,
        menuError: action.payload,
        message: null,
      };
    default:
      return state;
  }
};
