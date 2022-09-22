import './SideBar.css'
import Category from '../Category-Sidebar/Category';
import TipeSelect from '../TipeSelect/TipeSelect';
import ColorFilter from '../ColorFilter/ColorFilter';
import SizeSelect from '../SizeSelect/SizeSelect';
import PriceSelect from '../PriceSelect/PriceSelect';
import ApplyBtn from '../ApplyBtn/ApplyBtn';
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
   
     return (
     <>
     <div id='sideBar' className='greyBorder'>
     <Category />
     <TipeSelect />
     <ColorFilter />
     <SizeSelect />
     <PriceSelect />
     <ApplyBtn />
     <MenuIcon className="sidebar__Icon" /> 
     </div>
     </>
    )
}

export default SideBar;