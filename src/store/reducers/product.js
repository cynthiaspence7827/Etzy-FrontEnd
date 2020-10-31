import merge from 'lodash/merge';
import { LOAD_PRODUCTS, LOAD_PRODUCT } from '../actions/product';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_PRODUCT: {
      //load single product
      const product = action.product;
      return {
        ...state,
        [ action.product.id ]: product
      };
    }

    case LOAD_PRODUCTS: {
      //load all products
      const products = action.list.map(product => ({
        [ product.id ]: product
      }));
      return merge({}, state, ...products);
    }

    default:
      return state;
      break;
  }
}
