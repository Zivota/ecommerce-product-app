import React from "react";
import classes from "./Hero.module.css";
import AddToCart from "../cart/AddToCart";
import Gallery from "./gallery/Gallery";
import InfoHolder from "./info/InfoHolder";

const Hero = (props) => {
  return (
    <div className={classes.hero}>
      <div className={classes.holder}>
        <Gallery scWidth={props.scWidth} />
      </div>
      <div className={classes.holder}>
        <InfoHolder addInCart={props.addInCart} />
        <AddToCart
          cartItemAmount={props.cartItemAmount}
          onRemove={props.onRemove}
          onAdd={props.onAdd}
          addedInCart={props.addedInCart}
        />
      </div>
    </div>
  );
};

export default Hero;
