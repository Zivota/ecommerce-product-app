import React from "react/cjs/react.production.min";
import classes from "./CartIcon.module.css";
import IconCart from "../../assets/icon-cart.svg";

const CartIcon = (props) => {
  const amount = <span>{props.addInCart.amount}</span>;

  return (
    <div className={classes.cart} onClick={props.onClick}>
      <img src={IconCart} alt="Cart Icon" />
      {props.addInCart.amount > 0 ? amount : null}
    </div>
  );
};

export default CartIcon;
