import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App(props) {
  return (
    <>
      <CssBaseline />
      <Theme>
        <Navbar />
        <ProductCard />
      </Theme>
    </>
  );
}

export default App;
