import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import ExitIcon from '@mui/icons-material/ClearTwoTone';
import "../Item-Lable/itemLable.css"
function ItemLable(){
    return(
        <>
     <div className="ItemLabel__Container">
        <h1>SweatShirt</h1>
        <div className="Input__Container">
        <input type="search" placeholder="Sort by: Most Popular" className="Input__sortby"></input>
        <ListTwoToneIcon />
        </div>
     </div>

     <div id="btn__General__container">
        <div    className='btn__container'>
        <button className='btn__oversize'>Oversize</button>
        <ExitIcon style={{width: "15px"}}/>
        </div>
        <div     className='btn__container'>
        <button  className='btn__multicolor'>Multicolor</button>
        <ExitIcon style={{width: "15px"}}/>
        </div>
        <div     className='btn__container'>
        <button  className='btn__xxl'>XXL</button>
        <ExitIcon style={{width: "15px"}}/>
        </div>
     </div>
     </>
    )
}
export default ItemLable;