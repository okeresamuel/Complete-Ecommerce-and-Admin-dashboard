import React from 'react'
import "./Checkbox.css"

function Checkbox({type, label, attr, icon}) {
  return (
    <div  className='checkbox__container'>
    <input type={type} checked={attr}/>
    <label>{label}</label>
    {icon}
    </div>
  )
}

export default Checkbox