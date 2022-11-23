import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import {useState} from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Cart, Errorpage, SignUp, Login } from "./pages/pageexporter"
import './App.css';
import { Context } from './context/CartContext';



function App() {

 const [searchValue, setSearchValue] = useState("")
 
 return (
    <div id="app">
        <Context>
          <Router>
          <Logo />
          <Header setSearchValue={setSearchValue}/>
          <SideBar />
          <Routes>
            <>
              <Route path="/" element={<Main searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Aparel/Signup" element={<SignUp />} />
              <Route path="/Aparel/Login" element={<Login />} />
              <Route path="*" element={<Errorpage />} />
            </>
          </Routes>
        </Router>
      </Context>
    </div>
  );
}

export default App;
