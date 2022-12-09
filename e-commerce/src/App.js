import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import {useState} from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Cart, Errorpage, SignUp, Login, Userprofile} from "./pages/pageexporter"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './context/CartContext';
import './App.css';




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
              <Route path="/Aparel/Userprofile" element={<Userprofile />} />
              <Route path="*" element={<Errorpage />} />
            </>
          </Routes>
        </Router>
      <ToastContainer />
      </Context>
    </div>
  );
}

export default App;
