import React from "react";
import classes from "./CartItem.module.css";
import sneakersImg from "../../assets/image-product-1-thumbnail.jpg";
import trashBtn from "../../assets/icon-delete.svg";
import Button from "../../UI/Button";
import { Fragment } from "react/cjs/react.production.min";

const CartItem = (props) => {
  const onCheckOut = () => {
    console.log("Checking out ...");
  };

  const amount = props.addInCart.amount;
  const price = amount * 125;

  const cartItem = (
    <Fragment>
      <div className={classes.infoHolder}>
        <img src={sneakersImg} alt="sneakers thumbnail" />
        <div>
          <p> Fall Limited Edition...</p>
          <p>
            $125.00 x {amount} <span> ${price}.00</span>
          </p>
        </div>
        <Button className={classes.trashBtn} onClick={props.removeFromCart}>
          <img src={trashBtn} alt="delete" />
        </Button>
      </div>
      <Button className={classes.checkoutBtn} onClick={onCheckOut}>
        Checkout
      </Button>
    </Fragment>
  );

  const message = <p>Your cart is empty.</p>;

  return (
    <div className={classes.cartItem}>
      {props.addInCart.isInCart === true ? cartItem : message}
    </div>
  );
};

export default CartItem;
