export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

export const addToCart = (item) => {
  return (dispatch, getState) => {
    const alreadyExists = (cartItem) => cartItem.id === item.id;
    const reduxState = getState();

    const exists = reduxState.shoppingCart.filter(alreadyExists);

    if (exists.length === 0) {
      dispatch({
        type: ADD_TO_CART,
        payload: item
      })
    }
  }
};

export const removeFromCart = (id) => ({
  type: REMOVE_TO_CART,
  payload: id
});
