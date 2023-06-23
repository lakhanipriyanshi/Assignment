import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Api from './Api';
import Crud from './Crud';
import Product from './Product';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Header/>
    <Crud/>
    <Routes>
      <Route path='/Header' element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/Api/:id" element={<Api/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
