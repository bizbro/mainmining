import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Link } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({route, product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);
  var loc = route+product.name;
  var prodLink = route+product.name.replace(" ","");
  console.log("products: ", loc);
  console.log("products2: ", prodLink);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image.url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
        <Link href={prodLink} underline="none" color='inherit'>
          <Typography href={prodLink} gutterBottom variant="h5" component="h2">
            {product.name}
         </Typography>
         </Link>
         <Link href={prodLink} underline="none" color='inherit'>
          <Typography href={prodLink} gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
          </Link>
        </div>
        <Link href={prodLink} underline="none" color='inherit'>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </Link>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

