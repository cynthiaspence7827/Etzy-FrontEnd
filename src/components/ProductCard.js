import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, Fab } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
// import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 245,
  },
  focus: {
    boxShadow: theme.shadows[ 10 ]
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const loggedIn = useSelector();

  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <Fab size="small" style={{ position: "absolute", right: "4px", top: "2px" }} >
          <FavoriteIcon />
        </Fab>
        <CardMedia
          className={classes.media}
          position="relative"
          image="https://lh3.googleusercontent.com/proxy/aU9CpJNnhlvb6gFTbspnb3ITDg3dL757JQBldhT7xSU-j6EeHQ18GuPx-q8WdaDhBucVJ_k5mDAkC4kuqjlUIWTsAh9nU7zjwklQBR08UufPkweU5FbNE3_MUA31Lg"
          title="Test Image"
        />
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;