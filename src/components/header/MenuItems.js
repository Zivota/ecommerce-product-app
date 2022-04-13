import classes from "./MenuItems.module.css";

const MenuItems = (props) => {
  const menuClasses = `${classes.menuUl} ${
    props.hamburgerOpened ? classes.closed : ""
  }`;

  return (
    <ul className={menuClasses}>
      <li>
        <a href="/">Collections </a>
      </li>
      <li>
        <a href="/">Men </a>
      </li>
      <li>
        <a href="/">Women</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/"> Contact</a>
      </li>
    </ul>
  );
};

export default MenuItems;
