import React, {useState} from "react";

function Item({ name, category }) {

  function handleButton() {
    console.log('clicked')
    cartStatusSwitcher(!inCart)
  }

  const [inCart, cartStatusSwitcher] = useState(false)
  const cartStatus = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  console.log(cartStatus)

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButton}>{buttonText}</button>
    </li>
  );
}

export default Item;
