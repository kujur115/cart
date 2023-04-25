import React from "react";
import Cartitem from "./Cartitem";

// class Cart extends React.Component {
//   render() {
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <Cartitem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            handleDeleteProduct={props.handleDeleteProduct}
          />
        );
      })}
    </div>
  );
};
// }

export default Cart;
