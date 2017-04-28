import { ADD_TO_CART } from '../actions';
import { REMOVE_TO_CART } from '../actions';

const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_TO_CART:
      const keepItem = (item) => { return item.id !== action.payload};
      return state.filter(keepItem);

    default:
      return state
  }
}
