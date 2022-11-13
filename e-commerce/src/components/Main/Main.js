import './Main.css'
import ItemLable from '../Item-Lable/itemLable';
import Products from '../products/Products';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PageButton from '../PageButtons/PageButton';


const Main = () => {
    return (
            <div id='main' className='greyBorder'>
            <Breadcrumb />
            <ItemLable />
            <Products />
            <PageButton />
            </div>
            )
}
export default Main;