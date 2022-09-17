import './Main.css'
import Products from '../products/Products';
import Button from '../Button/Button.js';

const Main = () => {
    return (
        <>
            <div id='main' className='greyBorder'>
            <>
            <Button text="Hello"  width="20px" height="20px" backgroundColor="blue" textColor="white" fontWeight="bold" fontSize="10px" imageSource="https://cdn-icons-png.flaticon.com/128/5349/5349022.png" imageWidth="60px" imageLeftPadding="14px" />
            <Products></Products>
            </>
            </div>

        </>)
}
export default Main;