import galleryImg from "../../assets/Attick_paintings.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>My Shop</h1>
        <div>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={galleryImg} alt="Dispaly of multiple pictures on chevalet" />
      </div>
    </>
  );
}

export default Header;
