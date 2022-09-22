import React from 'react'
import PaletteIcon from '@mui/icons-material/Palette';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ColorFilter() {
  return (
    <>
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
       </>
  )
}

export default ColorFilter