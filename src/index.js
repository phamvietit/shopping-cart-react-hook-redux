import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Product = props => {
  const { product, children } = props;
  return (
    <div className="products">
      {product.name} ${product.price}
      {children}
    </div>
  );
};

function App() {
  const [products] = useState([
    { name: "Superman Poster", price: 10 },
    { name: "Spider Poster", price: 20 },
    { name: "Bat Poster", price: 30 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = index => {
    setCart(cart.concat(products[index]));
  };

  const calculatePrice = () => {
    return cart.reduce((price, product) => price + product.price, 0);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Shopping cart example using React Hooks</h2>
      <hr />
      {products.map((product, index) => (
        <Product key={index} product={product}>
          <button onClick={() => addToCart(index)}>Add to cart</button>
        </Product>
      ))}
      YOUR CART TOTAL: ${calculatePrice()}
      {cart.map((product, index) => (
        <Product key={index} product={product}>
          {" "}
        </Product>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
