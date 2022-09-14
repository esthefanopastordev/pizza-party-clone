export const toppingsReducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.topping];
  }
  if (action.type === "REMOVE") {
    return state.filter((topping) => topping.name !== action.name);
  }
  if (action.type === "ADD_ALL") {
    return action.toppings;
  }
  if (action.type === "REMOVE_ALL") {
    return [];
  }
  return state;
};
