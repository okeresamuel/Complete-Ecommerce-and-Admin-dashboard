import SearchIcon from '@mui/icons-material/Search';
import GrainIcon from '@mui/icons-material/Grain';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitIcon from '@mui/icons-material/HighlightOff';
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import './Header.css';
import { useRef} from 'react';
import {useNavigate} from "react-router-dom"
import {useEffect } from 'react';
import {search} from "../../features/searchInput/searchInputSlice"


const Header = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {cart} = useSelector((state)=> state.cart)
  const {user} = useSelector((state)=> state.auth)

  useEffect(()=>{
   if(!user){
    // navigate("/Aparel/Login")
   }
},[user, navigate])

  
  
        
    // Hide and show cart for mobile view
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
      <input className='search__Input' type="search" placeholder='Search among 100+ products' onChange={(e) =>{dispatch(search(e.target.value))}}></input>
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
        <Link to={user ? "/cart" : "/Aparel/Login"} className="Nav__btn2">Your Cart <ShoppingCartIcon className='Shopping__icon'/></Link>
        <div className="Cart_Counter">{cart? cart.length : 0}</div>
        </div> 
      
      
         {/* check if use exist before redirecting to user profile  */}
         <div className="profile__iconDiv">
         <Link to={user ? "/Aparel/Userprofile" : "/Aparel/Login"}>
         <img  className="profile__icon" src='https://cdn-icons-png.flaticon.com/128/5349/5349022.png' alt='profile__pic'/>
         <span className='user__name'>{user && user.username.slice(0, 3)}</span>
         </Link>
        </div>
       </div> 
      <button className='opennav__menu' onClick={ShowChart}>Show Cart</button>
    </div>)
}
export default Header;