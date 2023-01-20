import { GET_RESERVATION } from "../actions/order.action";

const initialState = {
  list: [],
};

const OrderReducer = (state = initialState, action ) => {
  switch(action.type) {
    case GET_RESERVATION:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default OrderReducer;