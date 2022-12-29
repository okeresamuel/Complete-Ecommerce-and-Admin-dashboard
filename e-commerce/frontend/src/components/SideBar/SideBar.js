import './SideBar.css'
import { useSelector, useDispatch } from "react-redux"
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PaletteIcon from '@mui/icons-material/Palette';
import Checkbox from '../../../src/components/Checkbox/Checkbox';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import BackToTopIcon from '@mui/icons-material/VerticalAlignTop';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import {sortedproducts} from "../../features/Allproducts/productslice"
import {useEffect, useRef} from "react"
import {Link, useNavigate, NavLink} from "react-router-dom"

const SideBar = () => {

    const sideBar__Ref = useRef()
    const toggleSideBar = () => {
     sideBar__Ref.current.classList.toggle("hide__sidebar")
    }


    const {user} = useSelector((state)=> state.auth)
    const {products}  = useSelector((state)=> state.product)
    const dispatch = useDispatch();
  
    const HandleSort__category = (category) =>{
    let sortedItem  = products?.filter((item)=> { 
     return item.category === category
    })
      dispatch(sortedproducts(sortedItem))
    }

    const navigate = useNavigate()
    useEffect(()=>{
    !user?.Admin ? navigate("/") : <></>
    },[])

     return (
     <>
     <div className='sideBar greyBorder' ref={sideBar__Ref}>    
      {/* category */}
      <>
      <h4 className='Header__text'>Category</h4>
      <div className='category__container'>
      <NavLink className="link" onClick={(()=>{HandleSort__category("T-Shirt")})}>T-Shirt</NavLink>
      <NavLink className="link" onClick={(()=>{HandleSort__category("Sweatshirt")})}>Sweatshirt</NavLink>
      <NavLink className="link" onClick={(()=>{HandleSort__category("Dress")})}>Dress</NavLink>
      <NavLink className="link" onClick={(()=>{HandleSort__category("Pants and Skirt")})}>Pants and Skirt</NavLink>
      <NavLink className="link" onClick={(()=>{HandleSort__category("Swimsuit")})}>Swimsuit</NavLink>
      <NavLink className="link" onClick={(()=>{HandleSort__category("Stuff and Accessories")})}>Stuff and Accessories</NavLink>
      </div>
      </>

       {/* filter by type */}
       <>
       <h4 className='Header__text'>Filter by:</h4>
       <h4 className='Tipe__text'>Tipe   <ArrowUpIcon /></h4>
       <div className='Filterbytype__container'>
       <Checkbox type="checkbox" label="Basic"/>
       <Checkbox type="checkbox" label="pattern"/>
       <Checkbox type="checkbox" label="Zipper"/>
       <Checkbox type="checkbox" label="Oversize" attr={true}/>
       </div>
       </>
      
      {/* filter by color */}
       <>
       <h4 className='Tipe__text'>Color <ArrowUpIcon /></h4>
       <div className='FilterbyColor__container' >
       <Checkbox type="checkbox" label="Black" icon={ <PaletteIcon />  } />  
       <Checkbox type="checkbox" label="Red" icon={ <PaletteIcon style={{color:"red"}}/> } />  
       <Checkbox type="checkbox" label="Brown" icon={ <PaletteIcon style={{color:"brown"}} /> } />  
       <Checkbox type="checkbox" label="Multicolor" icon={ <PaletteIcon style={{ borderRadius: "20px", color: "lightblue", background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"}}/> } />  
       <Checkbox type="checkbox" label="Gray" icon={ <PaletteIcon style={{color:"Grey"}} /> } />      
       <Checkbox type="checkbox" label="Blue" icon={  <PaletteIcon style={{color:"Blue"}} /> } />      
       </div>
       </>
      
     {/* filter by size */}
       <div className='Size__container'>
       <h4 className="Size__Text" > Size <ArrowUpIcon /></h4> 
       </div>
    
    {/* filter by price. */}
       <div  className="Price__container">
       <h4  className='Price__Text'>Price <ArrowUpIcon /></h4>  
       </div>  
     
     {/* apply btn */}
      <div  className="Apply__container">
      <a href="#Closed" className='Apply__Text'>Apply </a>
      <div className='delete__icon'>
      <DeleteIcon />  
      </div>
      </div> 
      </div>
     
     {/* open and close menu icon and refresh icon */}
     <MenuIcon  className="sideBarShow__Icon" onClick={toggleSideBar}/>
     <Link to='/'><BackToTopIcon className="BackToTop__Icon" /></Link>
     {user?.Admin ? <Link to='/Aparel/Admin/Createproduct'><AdminIcon  className="Admin__Icon"/></Link> : ""}
     </>
    )
}

export default SideBar;