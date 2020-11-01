import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getProducts } from '../store/actions/productlist';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: 'none'
  },
  root: {
    flexGrow: 1,
    width: '60%',
    margin: '60px auto'
  }
}));

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector(state => state.productlist);

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {products.productList ?
            products.productList.map(product => (
              <Grid item key={product.id} xs={3}>
                <ProductCard product={product} />
              </Grid>
            )) : ''
          }
        </Grid>
      </div>
  );
};

export default Home;