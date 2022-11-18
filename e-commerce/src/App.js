import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import {Cart, Errorpage} from "./pages/pageexporter"
import { createContext, useState } from 'react';
import './App.css';
import CartProvider from './context/CartContext';



function App() {
  return (
    <div id="app">
    <Router>
    <Logo /> 
    <Header />
    <SideBar />
    <Routes>
      <>
      <Route path="/"  element={<Main />}/>
      <Route path="/cart"  element={<Cart/>}/>
      <Route path="*"  element={<Errorpage />}/>
      </>
    </Routes>
    </Router>
    </div>    
);
}

export default App;
