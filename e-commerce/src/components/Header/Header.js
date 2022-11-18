import SearchIcon from '@mui/icons-material/Search';
import GrainIcon from '@mui/icons-material/Grain';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitIcon from '@mui/icons-material/HighlightOff';
import {Link} from "react-router-dom"
import './Header.css';
import { useContext, useRef } from 'react';
import { useCart,useCartUpdate } from '../../context/CartContext';


const Header = () => {
  //access the global state of the cart
  const cart = useCart()
  //update the global state of the cart
  const cartUpdate = useCartUpdate()

  
    const languageConatainer__ref = useRef()
    const languageConatainerExiticon__ref = useRef()
    const  ShowChart = () => {
     languageConatainer__ref.current.classList.add("showLanguage__container")
     languageConatainerExiticon__ref.current.style.visibility = "visible"
    }
    const  HideChart = () => {
      languageConatainer__ref.current.classList.remove("showLanguage__container")
      languageConatainerExiticon__ref.current.style.visibility = "hidden"
    }
    
    return (<div id='header' className='greyBorder'>
      <div className="search__box">
      <SearchIcon className='search__Icon' />
      <input className='search__Input' type="search" placeholder='Search among 100+ products'></input>
      <GrainIcon className='Grain__Icon' />
      </div>
      
      <div className='profile__iconsection'>
        <div className='Language__container' ref={languageConatainer__ref}>
        <ExitIcon className="exitIcon" ref={languageConatainerExiticon__ref} onClick={HideChart}/>
        <select name="languages" className="Select__lang">
        <option value="Eng">Eng</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Ebonics">Ebonics</option>
        </select> 
        <LanguageIcon  className="Language__Icon" />         
        <a href="#closed" className="Nav__btn1">Wishlist <FavoriteBorderIcon className='love__icon'/></a>
        <Link to="/cart" className="Nav__btn2" onClick={cartUpdate}>Your Cart <ShoppingCartIcon className='Shopping__icon'/></Link>
        </div> 
      

         <div className="profile__iconDiv">
         <img  className="profile__icon" src='https://cdn-icons-png.flaticon.com/128/5349/5349022.png' alt='profile__pic'/>
        </div>
       </div> 
      <button className='opennav__menu' onClick={ShowChart}>Show Cart</button>
    </div>)
}


export default Header;