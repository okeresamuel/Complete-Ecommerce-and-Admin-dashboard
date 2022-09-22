import React from 'react'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import "../ApplyBtn/ApplyBtn.css"
function ApplyBtn() {
  return (
    <div  className="Apply__container">
    <a href="#Closed" className='Apply__Text'>Apply </a>
    <div className='delete__icon'>
    <DeleteIcon />  
    </div>
    </div> 
  )
}

export default ApplyBtn