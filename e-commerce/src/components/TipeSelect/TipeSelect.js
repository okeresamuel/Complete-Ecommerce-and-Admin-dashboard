import React from 'react'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import "../TipeSelect/TipeSelect.css"
function TipeSelect() {
  return (
    <>
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
    </>
  )
}

export default TipeSelect