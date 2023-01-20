export const SELECTED_HOUSE = "SELEC_HOUSE";
export const FILTERED_HOUSE = "FILTERED_HOUSE";

export const selectHouse = (id) => ({
  type: SELECTED_HOUSE,
  houseID: id,
});

export const filteredHouse = (id) => ({
  type: FILTERED_HOUSE,
  categoryID: id,
});