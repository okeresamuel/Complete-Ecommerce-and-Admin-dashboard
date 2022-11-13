import './SideBar.css'
import Category from '../Category-Sidebar/Category';
import TipeSelect from '../TipeSelect/TipeSelect';
import ColorFilter from '../ColorFilter/ColorFilter';
import SizeSelect from '../SizeSelect/SizeSelect';
import PriceSelect from '../PriceSelect/PriceSelect';
import ApplyBtn from '../ApplyBtn/ApplyBtn';
import MenuIcon from '@mui/icons-material/Menu';
import BackToTopIcon from '@mui/icons-material/VerticalAlignTop';
import {useState} from "react"

const SideBar = () => {

    const [openSideBar, setOpensidebar]  = useState(false)
     return (
     <>
     {openSideBar && 
     <div id='sideBar' className='greyBorder'>
     <Category />
     <TipeSelect />
     <ColorFilter />
     <SizeSelect size="Size"/>
     <PriceSelect />
     <ApplyBtn /> 
     </div>
    }
     <MenuIcon  className="sideBarShow__Icon" onClick={(()=>{setOpensidebar(!openSideBar)})}/>
     <a href='Home'><BackToTopIcon className="BackToTop__Icon" /></a>
     </>

    )
}

export default SideBar;