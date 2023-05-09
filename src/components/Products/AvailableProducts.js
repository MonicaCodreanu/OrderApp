import { officeSupplies } from "./dummyProducts.js";
import Card from "../UI/Card.js";
import Item from "./Item/Item.js";
import classes from "./AvailableProducts.module.css";
function AvailableProducts() {
  const productList = officeSupplies.map((el) => {
    return (
      <Item
        id={el.id}
        key={el.id}
        name={el.name}
        description={el.description}
        price={el.price}
      />
    );
  });

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;
