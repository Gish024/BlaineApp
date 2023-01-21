import { GET_RESERVATION, REMOVE_RESERVATION } from "../actions/order.action";

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
    case REMOVE_RESERVATION:
      const cleanList = [...state.list].filter(
        (reservation) => reservation.id !== action.reservationID
      );
      return {...state, list: cleanList };

    default:
      return state;
  }
};

export default OrderReducer;