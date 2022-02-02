import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './Global.Style';
import { productData, productDataTwo } from './components/Product/data'
import Products from './components/Product';
import Feature from './components/Feature';






function App() {
  return (
          <Router>
             <GlobalStyle />
             <Hero />
             <Sidebar />
             <Products heading = ' As melhores pizza de São Luís' data = {productData}/>
             <Feature />
             <Products heading = ' ' data = {productDataTwo}/>
          </Router>
  );
}

export default App;
