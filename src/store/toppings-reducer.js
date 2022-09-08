export const toppingsReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    return action.toppings;
  }
  return state;
};
