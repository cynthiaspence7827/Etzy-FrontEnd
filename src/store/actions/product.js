import { baseUrl } from '../../config';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';

export const load = list => ({ type: LOAD_PRODUCTS, list });
export const loadOne = product => ({ type: LOAD_PRODUCT, product });

export const getProducts = () => async (dispatch) => {
  const response = await fetch(`${baseUrl}/products`);
  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const getProduct = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  if (response.ok) {
    const product = await response.json();
    await dispatch(loadOne(product));
  }
};