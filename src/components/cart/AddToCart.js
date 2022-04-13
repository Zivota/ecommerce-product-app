import React from "react";

import Button from "../../UI/Button";
import classes from "./AddToCart.module.css";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import cartIcon from "../../assets/icon-cart-btn.svg";

const AddToCart = (props) => {
  return (
    <div className={classes.addToCart}>
      <div className={classes.addToCartCounter}>
        <Button onClick={props.onRemove} className={classes.mathBtn}>
          <img src={minusIcon} alt="minus operand" />
        </Button>
        <p> {props.cartItemAmount} </p>
        <Button onClick={props.onAdd} className={classes.mathBtn}>
          <img src={plusIcon} alt="plus operand" />
        </Button>
      </div>
      <Button className={classes.btn} onClick={props.addedInCart}>
        <img src={cartIcon} alt="cart icon" /> Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
