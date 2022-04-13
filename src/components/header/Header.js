import React, { useState } from "react";
import classes from "./Header.module.css";
import Menu from "./Menu";
import CartIcon from "../cart/CartIcon";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.png";
import Backdrop from "../../UI/Backdrop";
import Cart from "../cart/Cart";

const Header = (props) => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);

  const [cartOpened, setCartOpened] = useState(false);

  const onCartClick = () => {
    setCartOpened(!cartOpened);
  };

  const onHamburgerClick = () => {
    setHamburgerOpened(!hamburgerOpened);
  };

  return (
    <div className={classes.header}>
      {hamburgerOpened && <Backdrop onClick={onHamburgerClick} />}
      <div>
        <Menu
          scWidth={props.scWidth}
          onHamburgerClick={onHamburgerClick}
          hamburgerOpened={hamburgerOpened}
        />
        <img src={Logo} alt="Logo" className={classes.logo} />
      </div>
      <div>
        <CartIcon
          onClick={onCartClick}
          cartItemAmount={props.cartItemAmount}
          addInCart={props.addInCart}
        />
        <img src={Avatar} alt="avatar" className={classes.avatar} />
      </div>
      {cartOpened && (
        <Cart
          addInCart={props.addInCart}
          removeFromCart={props.removeFromCart}
        />
      )}
    </div>
  );
};

export default Header;
