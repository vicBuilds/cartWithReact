import Cart from "./cart";
import Navbar from "./navbar";
import React from "react";
import TotalItems from "./totalPrice";
import { firestore } from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //     products:[

      //     {
      //         price:999,
      //         title: 'Phone',
      //         qty: 1,
      //         img: 'https://www.hilaptop.com/userdata/public/gfx/22150.jpg',
      //         id:1
      //     },

      //     {
      //         price:1999,
      //         title: 'Laptop',
      //         qty: 1,
      //         img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/K/6K9C3PA-1_T1656565304.png',
      //         id:2
      //     },

      //     {
      //         price:1800,
      //         title: 'LED TV',
      //         qty: 1,
      //         img: 'https://m.media-amazon.com/images/I/81I5oICiIzL._SX679_.jpg',
      //         id:3
      //     },

      //     {
      //         price:1100,
      //         title: 'Amazon Echo',
      //         qty: 1,
      //         img: 'https://m.media-amazon.com/images/I/61JhG2HKMCL._SX679_.jpg',
      //         id:4
      //     },
      // ]
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    //fetching all the products from the cloud firestore
    firestore
      //query for fecthing the product which we want as per our query
      .collection("products") //getting all the products
      //.where("price", "==", 850) // after fetching db we should write query
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false,
        });

        // this.getCartCount();
      });
  }

  handleIncrease = (product) => {
    const { products } = this.state;

    let index = products.indexOf(product);

    products[index].qty += 1;

    // this.setState({
    //   products: products,
    // });
    firestore
      .collection("products")
      .doc(product.id)
      .update({
        qty: products[index].qty,
      })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  handleDecrease = (product) => {
    // const { products } = this.state;
    // let index = products.indexOf(product);

    // if (products[index].qty === 0) {
    //   return;
    // }

    // products[index].qty -= 1;
    // this.setState({
    //   products: products,
    // });

    const { products } = this.state;

    let index = products.indexOf(product);

    products[index].qty -= 1;

    // this.setState({
    //   products: products,
    // });
    firestore
      .collection("products")
      .doc(product.id)
      .update({
        qty: products[index].qty,
      })
      .then(() => {
        console.log("Document Updated");
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  handleDelete = (id) => {
    // const { products } = this.state;
    // let newProducts = products.filter((item) => {
    //   return item.id !== id;
    // });
    // this.setState({
    //   products: newProducts,
    // });
    firestore
      .collection("products")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Item Deleted");
      })
      .catch((err) => {
        console.log("Error is ", err);
      });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((item) => {
      count += item.qty;
    });

    return count;
  };

  getTotalPrice = () => {
    const { products } = this.state;

    let total = 0;

    products.forEach((item) => {
      total += item.qty * item.price;
    });

    return total;
  };

  addProduct = () => {
    firestore
      .collection("products")
      .set({
        img: "https://apnidukaan.com/media/catalog/product/cache/884370dd4b836dd8ac85bf089b48bb84/f/x/fxrrfc.jpg",
        title: "Kitchen Chimney",
        qty: 1,
        price: 565,
      })
      .then((ret) => {
        console.log(ret);
      });
  };

  // componentDidMount() {
  //   let productsFromFirebase = [];

  //   let get = async () => {
  //     const querySnapshot = await getDocs(collection(db, "products"));

  //     productsFromFirebase = querySnapshot.docs.map((doc) => {
  //       // console.log(doc.data());
  //       let data = doc.data();
  //       data.id = doc.id;
  //       return data;
  //     });

  //     this.setState({
  //       products: productsFromFirebase,
  //       loading: false,
  //     });
  //   };

  //   get();
  // }

  render() {
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />

        <div className="main-container">
          <button
            onClick={() => {
              this.addProduct();
            }}
          >
            Add Products
          </button>

          <div className="left-block">
            <Cart
              products={this.state.products}
              handleIncrease={this.handleIncrease}
              handleDecrease={this.handleDecrease}
              handleDelete={this.handleDelete}
            />
          </div>

          {this.state.loading && <h1>Loading Products. . . .</h1>}

          <div className="right-block">
            <TotalItems total={this.getTotalPrice()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
