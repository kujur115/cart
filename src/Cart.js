import React from "react";
import Cartitem from "./Cartitem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Smart Watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "iPhone",
          qty: 1,
          img: "",
          id: 3,
        },
        {
          price: 999,
          title: "MacBook",
          qty: 1,
          img: "",
          id: 5,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <Cartitem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;
