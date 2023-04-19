import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
// import "./App.css";
// import * as firebase from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { firebase } from "./firebase";
// import { onSnapshot } from "firebase/firestore";
// import { useEffect } from "react";
// import { firebase } from "./firebaseConfig";
import firebase from 'firebase/compat/app'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      products: [
        // {
        //   price: 999,
        //   title: "Camera",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1621985499238-698dfd45b017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbWVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //   id: 1,
        // },
        // {
        //   price: 999,
        //   title: "Smart Watch",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //   id: 2,
        // },
        // {
        //   price: 999,
        //   title: "Keyboard",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        //   id: 4,
        // },
        // {
        //   price: 999,
        //   title: "iPhone",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        //   id: 3,
        // },
        // {
        //   price: 999,
        //   title: "MacBook",
        //   qty: 1,
        //   img: "https://images.unsplash.com/photo-1595683213102-db302aa70c0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1hY2Jvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        //   id: 5,
        // },
      ],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }
  // componentDidMount() {
  //   // firebase.collection("products").docs.onSnapshot((snapshot) => {
  //   //   const products = snapshot.docs.map((doc) => {
  //   //     const data = doc.data();
  //   //     data["id"] = doc.id;
  //   //     return data;
  //   //   });
  //   //   this.setState({ products: products, loading: false });
  //   // });
  //   async function getProducts(db) {
  //     const productsCol = collection(db, "products");
  //     // console.log("productsCol", productsCol);
  //     const productSnapshot = await getDocs(productsCol);
  //     // const unsub = onSnapshot(productSnapshot, (doc) => {
  //     //   console.log("Current data: ", doc.data());
  //     // });
  //     // console.log("productSnapshot", productSnapshot);
  //     const products = productSnapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       data["id"] = doc.id;
  //       return data;
  //     });
  //     // console.log("products", products);
  //     return products;
  //   }

  //   getProducts(firebase).then((product) => {
  //     // console.log(product);
  //     this.setState({ products: product, loading: false });
  //   });

  //   // const col=collection(db, "products");

  //   // db.collection("products").doc()
  //   // .onSnapshot((doc) => {
  //   //     console.log("Current data: ", doc.data());
  //   // });
  //   // setInterval(() => {
  //   //   console.log(product);
  //   //   this.setState({ products: product });
  //   // }, 1000);

  //   // collection(db, "products")
  //   //   .get()
  //   //   .then((snapshot) => {
  //   //     const product = snapshot.docs.map((doc) => doc.data());
  //   //     this.setState = { products: product };
  //   //   });
  //   // firebase
  //   //   .firestore()
  //   //   .collection("products")
  //   //   .get()
  //   //   .then((snapshot) => {
  //   //     console.log("snapshot", snapshot);

  //   //     snapshot.docs.map((doc) => {
  //   //       console.log(doc.data());
  //   //     });

  //   //     const products = snapshot.docs.map((doc) => doc.data());
  //   // const products =
  //   // console.log("products", products);

  //   // });
  // }

  handleIncreaseQuantity = (product) => {
    // console.log("Hey,please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey,please inc the qty of", product);
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
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;
    products.forEach(function (product) {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products ...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
