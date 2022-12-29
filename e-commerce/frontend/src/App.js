import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import SideBar from '../src/components/SideBar/SideBar';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { Cart, Errorpage, SignUp, Login, Userprofile, Admin, AdminProducts, AdminUsers, AdminNavbar, ViewAproduct} from "./pages/pageexporter"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App(){
return (
    <div id="app">
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
        
              {/* Admin */}
              <Route path="/Aparel/Admin" element={<AdminNavbar />}>
              <Route path="Createproduct" element={<Admin/>} />
              <Route path="Products" element={<AdminProducts />} />
              <Route path="Users" element={<AdminUsers />} /> 
              </Route>
              <Route path="/:name/:id" element={<ViewAproduct />} />
              <Route path="*" element={<Errorpage />} />
            </>
          </Routes>
        </Router>
      <ToastContainer />
      <Toaster />
    </div>
  );
}
export default App;
