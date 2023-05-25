// import { officeSupplies } from "./dummyProducts.js";
import Card from "../UI/Card.js";
import Item from "./Item/Item.js";
import classes from "./AvailableProducts.module.css";
import { useEffect, useState } from "react";

function AvailableProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(
        "https://orderapp-88822-default-rtdb.europe-west1.firebasedatabase.app/Products.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        });
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      console.log(error.message);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.productLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.productLoadingError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const productList = products.map((el, id) => {
    return (
      <Item
        id={id}
        key={id}
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
