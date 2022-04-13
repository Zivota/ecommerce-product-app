import React from "react";
import classes from "./InfoHolder.module.css";

const InfoHolder = () => {
  return (
    <div className={classes.infoHolder}>
      <h3> SNEAKER COMPANY</h3>
      <h1> Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={classes.priceInfo}>
        <h1>
          $125.00 <span> 50%</span>
        </h1>
        <p> $250.00</p>
      </div>
    </div>
  );
};

export default InfoHolder;
