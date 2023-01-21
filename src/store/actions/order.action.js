import { URL_API } from "../../constants/Database";

export const GET_RESERVATION = "GET_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const getReservation = () => {
  return async (dispatch) => {
    try {
      const response = await fetch( `${URL_API}/reservas.json`, {
        method: 'GET',
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      
      const result = await response.json();
      const reservation = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(reservation);
      dispatch({ type: GET_RESERVATION, payload: reservation });
    } catch (error) {
        console.log(error.message);
    }
  };
};

export const removeReservation = (reservationID) => ({
  type: REMOVE_RESERVATION,
  reservationID,
}); 