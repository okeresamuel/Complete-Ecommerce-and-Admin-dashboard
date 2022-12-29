import WidgetsIcon from '@mui/icons-material/Widgets';
import ExitIcon from '@mui/icons-material/ClearTwoTone';
import {useSelector} from "react-redux"
import "./itemLable.css"

function ItemLable() {
   const { sortedproducts,} = useSelector((state)=>  state.product)
   return (
      <>
         <div className="ItemLabel__Container">
           <h1>{sortedproducts[0] ? sortedproducts[0].category : "Allproducts"}</h1>
         </div>

         <div id="btn__General__container">
            <div style={{display:"flex"}}>
            <div className='btn__container'>
               <button className='btn__oversize'>Oversize</button>
               <ExitIcon style={{ width: "15px" }} />
            </div>
            <div className='btn__container'>
               <button className='btn__multicolor'>Multicolor</button>
               <ExitIcon style={{ width: "15px" }} />
            </div>
            <div className='btn__container'>
               <button className='btn__xxl'>XXL</button>
               <ExitIcon style={{ width: "15px" }} />
            </div>
            </div>
            <div className="Input__Container">
               <input type="search" placeholder="Sort by: Most Popular" className="Input__sortby"></input>
               <WidgetsIcon style={{ width: "25px", color: "blue"}} />
            </div>
         </div>
      </>
   )
}
export default ItemLable;