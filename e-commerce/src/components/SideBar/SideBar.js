import './SideBar.css'

const SideBar = () => {
    return (<div id='sideBar' className='greyBorder'>
       <h4 className='Category__text'>Category</h4>
       <div className='link__container'>
       <a href="#Closed"  className="link">T-Shirt</a>
       <a href="#Closed"  className="link">Sweatshirt</a>
       <a href="#Closed"  className="link">Dress</a>
       <a href="#Closed"  className="link">Pants and Skirt</a>
       <a href="#Closed"  className="link">Swinsuit</a>
       <a href="#Closed"  className="link">Stuff and Accessories</a>
       </div>
    </div>)
}

export default SideBar;