import './Main.css'
import ItemLable from '../Item-Lable/itemLable';
import Products from '../products/Products';
import Button from '../Button/Button.js';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Main = () => {
    return (
            <div id='main' className='greyBorder'>
            <Breadcrumb />
            <ItemLable />
            <Products />
            </div>
            )
}
export default Main;