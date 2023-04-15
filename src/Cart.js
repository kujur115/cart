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

  handleIncreaseQuantity = (product) => {
    console.log("Hey,please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Hey,please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) return;
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <Cartitem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              handleDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;