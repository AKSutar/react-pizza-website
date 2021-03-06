import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyles.js";
import Hero from "./components/Hero/index.js";
import Products from "./components/Products/index.js";
import {productData, productDataTwo} from "./components/Products/data.js"
import Feature from "./components/Feature/index.js";
import Footer from "./components/Footer/index.js";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
