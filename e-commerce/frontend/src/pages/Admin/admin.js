import "./admin.css"
import {useState} from "react"
import { toast } from "react-toastify"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import previewImage from "../../components/assets/previewImg.jpg"

function Admin(){

const [image, setImage] = useState()
function picdata (pic){
    const reader = new FileReader()
    reader.readAsDataURL(pic)
    reader.onloadend = () => {
        setImage(reader.result)
    }   
}

const formFields = {
    productname:"",
    price:"",
    tag:""
}
const [form, setForm] = useState(formFields)
const {productname, price, tag} = form; 
const setFormFields = (e) => {
const {name, value} = e.target;
setForm({...form, [name]:value})
}


return (
  <>
  <div className="Add__productContainer">

  <div className="input__container">
  <input className='inputs__Admin' placeholder="Name" name="productname" value={productname} onChange={((e)=>{setFormFields(e)})}/>
  <input className='inputs__Admin' placeholder="Price" name="price" value={price}  onChange={((e)=>{setFormFields(e)})}/>
  <input className='inputs__Admin' placeholder="Tag" name="tag" value={tag}   onChange={((e)=>{setFormFields(e)})}/>
  <input type="file" className='inputs__Admin' onChange={((e)=>{picdata(e.target.files[0])})}/>
  <button className='inputs__Admin'>Create Product</button>
  </div>


  <div className="shirt__container">
        <div className="Favorite_Icon">
         <FavoriteBorderIcon />
        </div>

        
          <div className="Promo_Iconz">
            <Button style={{ backgroundColor: "hsl(250deg 57% 97%)", opacity: "85%", color: "blue",  }} >
              {form.tag}
            </Button>
          </div>
      

        <img className="shirt__img" src={!image? previewImage : image} alt="shirts" />
        <div className="sub__shirtcontainer">
          <h3>productname: {form.productname}</h3>
           <span className="priceand__cartbtnContainer">
            {`Price: ${form.price}`}
          </span>
        </div>
      </div>
  </div>
  </>  
)
}
export default Admin