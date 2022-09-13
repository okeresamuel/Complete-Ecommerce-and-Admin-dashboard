import './Header.css'
import Button from '../Button/Button.js'

const Header = () => {
    return (<div id='header' className='greyBorder'>
        Header
        <Button text="Button" width="100px" backgroundColor="#d3cede" textColor="#2a01d3" fontWeight="600" imageSource="https://www.freeiconspng.com/uploads/shopping-cart-icon-2.png" imageWidth="20px" imageLeftPadding="14px" fontSize="15px" />
    </div>)
}

export default Header;