import './SideBar.css'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PaletteIcon from '@mui/icons-material/Palette';

const SideBar = () => {
    return (<div id='sideBar' className='greyBorder'>

       <h4 className='Header__text'>Category</h4>
       <div className='category__container'>
       <a href="#Closed"  className="link">T-Shirt</a>
       <a href="#Closed"  className="link">Sweatshirt</a>
       <a href="#Closed"  className="link">Dress</a>
       <a href="#Closed"  className="link">Pants and Skirt</a>
       <a href="#Closed"  className="link">Swinsuit</a>
       <a href="#Closed"  className="link">Stuff and Accessories</a>
       </div>
    
      {/* filter by tipe*/}
       <h4 className='Header__text'>Filter by:</h4>
 
       <h4 className='Tipe__text'>Tipe   <ArrowUpIcon /></h4>
       <div className='Filterbytype__container' >
       
       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Basic</label>
       </div>
       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Pattern</label>
       </div>
       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Hoodie</label>
       </div>
       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Zipper</label>
       </div>
       <div  className='checkbox__container'>
       <input type="checkbox" checked/>
       <label>Oversize</label>
       </div>
       </div>

       {/* filter by color*/}
       <h4 className='Tipe__text'>Color <ArrowUpIcon /></h4>
      
       <div className='FilterbyColor__container' >
       <div className='checkbox__container' >
       <input type="checkbox" />
       <label>Black</label>
       <PaletteIcon />
       </div>
  
       <div  className='checkbox__container' >
       <input type="checkbox" />
       <label>Red</label>
       <PaletteIcon style={{color:"red"}}/>
       </div>
 
       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Brown</label>
       <PaletteIcon style={{color:"brown"}}/>
       </div>
  
       <div  className='checkbox__container' >
       <input type="checkbox" checked />
       <label>Multicolor</label>
       <PaletteIcon style={{ borderRadius: "20px", color: "lightblue", background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"}}/>
       </div>

       <div  className='checkbox__container' >
       <input type="checkbox" />
       <label>Grey</label>
       <PaletteIcon style={{color:"Grey"}} />
       </div>

       <div  className='checkbox__container'>
       <input type="checkbox" />
       <label>Blue</label>
       <PaletteIcon style={{color:"Blue"}} />
       </div>
       </div>
        
       <div className='Size__container'>
       <h4 className="Size__Text" >Size <ArrowUpIcon /></h4> 
       </div>
       <div  className="Price__container">
       <h4  className='Price__Text'>Price <ArrowUpIcon /></h4>  
       </div>  
    </div>)
}

export default SideBar;