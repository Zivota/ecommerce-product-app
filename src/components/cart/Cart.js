import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <h4> Cart </h4>
      <div className={classes.cartItems}>
        <CartItem
          addInCart={props.addInCart}
          removeFromCart={props.removeFromCart}
        />
      </div>
    </div>
  );
};

export default Cart;
