import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: "70%" // 16:9
  },
  favFab: {
    position: "absolute",
    top: "5px",
    right: "5px",
    background: 'rgba(255, 255, 255, 0.5)'
  },
  favFabFav: {
    color: '#000'
  }
}));

const ProductCard = (props) => {
  const product = { ...props.product };
  const classes = useStyles();
  const loggedIn = useSelector(state => state.loggedIn);

  const handleFavorite = e => {
    if (e.target.classList.contains(classes.favFabFav)) {
      e.target.classList.remove(classes.favFabFav);
    }
    else {
      e.target.classList.add(classes.favFabFav);
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        {loggedIn ?
          <IconButton className={classes.favFab} onClick={handleFavorite}>
            <FavoriteBorderIcon />
          </IconButton> : ''
        }
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;