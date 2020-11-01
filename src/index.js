import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const initialState = {
  authentication: {},
  productlist: [],
  product: {},
  shop: {},
  cart: {}
};

const store = configureStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
