import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

function Checkout(props) {
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const isEmpty = (value) => value.trim() === "";
  const isFiveCharLong = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = isFiveCharLong(enteredPostal);

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formValidity.city && <p>Please enter a valid city name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
