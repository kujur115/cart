import React from "react";

class Cartitem extends React.Component {
  // increaseQuantity = () => {
  //   // ? type 1
  //   // this.setState({ qty: this.state.qty + 1 });
  //   // ? type 2 - if previous State is required
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  // };
  // decreaseQuantity = () => {
  //   this.setState((prevState) => {
  //     if (prevState.qty > 0) {
  //       return {
  //         qty: prevState.qty - 1,
  //       };
  //     } else {
  //       return {
  //         qty: 0,
  //       };
  //     }
  //   });
  // };
  render() {
    const { price, title, qty, img } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      handleDeleteProduct,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" src={img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="./plus.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="./minus-sign.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="./delete.png"
              onClick={() => handleDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default Cartitem;
