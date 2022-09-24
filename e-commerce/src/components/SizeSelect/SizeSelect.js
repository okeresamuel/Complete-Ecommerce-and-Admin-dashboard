import React from 'react'
import "../SizeSelect/SizeSelect.css"
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function SizeSelect({size}) {
  return (
    <div className='Size__container'>
    <h4 className="Size__Text" > {size} <ArrowUpIcon /></h4> 
    </div>
  )
}

export default SizeSelect