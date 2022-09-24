import React from 'react'
import Checkbox from '../Checkbox/Checkbox';
import PaletteIcon from '@mui/icons-material/Palette';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ColorFilter() {
  return (
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
  )
}

export default ColorFilter