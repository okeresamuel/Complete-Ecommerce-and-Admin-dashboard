import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart.js'
import { createContext, useState } from 'react';
import './App.css';
import CartProvider from './context/CartContext';



function App() {
  return (
    <div id="app">
      <Logo />
      <Header />
      <SideBar />
      <Main />
    </div>
);
}

export default App;
