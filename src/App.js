import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Product from './components/Product';
import Shop from './components/Shop';
import Home from './components/Home';
import Purchases from './components/Purchases';
import MyShops from './components/MyShops';

function App(props) {

  return (
    <>
      <CssBaseline />
      <Theme>
        <Navbar />
        <Switch>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/shops/:id' component={Shop} />
          <Route exact path='/myshops' component={MyShops} />
          <Route exact path='/purchases' component={Navbar} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/purchases' component={Purchases} />
          <Route path='/' component={Home} />
        </Switch>
      </Theme>
    </>
  );
}

export default App;
