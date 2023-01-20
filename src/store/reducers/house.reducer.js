import { FILTERED_HOUSE, SELECTED_HOUSE } from "../actions/house.action";

import { HOUSE } from "../../data/house";

const initialState = {
  houses: HOUSE,
  filteredHouse: [],
  selected: null,
};

const HouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_HOUSE:
      return {
        ...state,
        selected: state.houses.find((house) => house.id === action.houseID),
      };
    case FILTERED_HOUSE:
      return {
        ...state,
        filteredHouse: state.houses.filter(
          (house) => house.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default HouseReducer;