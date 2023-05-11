import { useContext } from "react";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";
import CartContext from "../../../store/cartContext";

function Item(props) {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}€`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default Item;
