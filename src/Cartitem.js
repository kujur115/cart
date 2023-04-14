import React from "react";

class Cartitem extends React.Component {
  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //      ? setState acts as synchronus call
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log("state", this.state);
  //   });
  // }
  increaseQuantity = () => {
    // ? type 1
    // this.setState({ qty: this.state.qty + 1 });
    // ? type 2 - if previous State is required
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQuantity = () => {
    this.setState((prevState) => {
      if (prevState.qty > 0) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return {
          qty: 0,
        };
      }
    });
  };
  render() {
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
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
              // src="https://image.flaticon.com/icons/svg/992/992651.svg"
              src="./plus.png"
              onClick={this.increaseQuantity}
            />
            {/* <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a> */}
            {/* <i class="fa-light fa-circle-plus"></i> */}
            <img
              alt="decrease"
              className="action-icons"
              src="./minus-sign.png"
              onClick={this.decreaseQuantity}
            />
            <img alt="delete" className="action-icons" src="./delete.png" />
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
