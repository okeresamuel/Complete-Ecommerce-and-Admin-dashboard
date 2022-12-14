import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from '../src/components/SideBar/SideBar';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Cart, Errorpage, SignUp, Login, Userprofile} from "./pages/pageexporter"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Context } from './context/CartContext';
import SearchContext  from "./context/SearchContext"

function App() {
return (
    <div id="app">
        <Context>
        <SearchContext>
       
          <Router>            
          <Logo />
          <Header/>
          <SideBar />
          <Routes>
            <>
              <Route path="/" element={<Main/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Aparel/Signup" element={<SignUp />} />
              <Route path="/Aparel/Login" element={<Login />} />
              <Route path="/Aparel/Userprofile" element={<Userprofile />} />
              <Route path="*" element={<Errorpage />} />
            </>
          </Routes>
        </Router>
       
       
        </SearchContext>
       </Context>
      <ToastContainer />
    </div>
  );
}
export default App;
