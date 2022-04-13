import React, { Fragment } from "react";
import classes from "./Menu.module.css";
import Icon from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";
import Button from "../../UI/Button";
import MenuItems from "./MenuItems";

const Menu = (props) => {
  const hamburgerImg = `${props.hamburgerOpened ? IconClose : Icon}`;

  return (
    <Fragment>
      <Button onClick={props.onHamburgerClick} className={classes.btn}>
        <img src={hamburgerImg} alt="hamburger icon" />
      </Button>
      {(props.hamburgerOpened && <MenuItems />) ||
        (props.scWidth.width > 1024 && <MenuItems />)}
    </Fragment>
  );
};

export default Menu;
