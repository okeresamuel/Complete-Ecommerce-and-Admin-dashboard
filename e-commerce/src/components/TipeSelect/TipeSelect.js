import React from 'react'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import "../TipeSelect/TipeSelect.css"
import Checkbox from '../Checkbox/Checkbox';
function TipeSelect() {
  return (
    <>
    <h4 className='Header__text'>Filter by:</h4>
    <h4 className='Tipe__text'>Tipe   <ArrowUpIcon /></h4>
    <div className='Filterbytype__container'>
    <Checkbox type="checkbox" label="Basic"/>
    <Checkbox type="checkbox" label="pattern"/>
    <Checkbox type="checkbox" label="Zipper"/>
    <Checkbox type="checkbox" label="Oversize" attr={true}/>
    </div>
    </>
  )
}

export default TipeSelect