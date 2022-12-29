import "./Addproject.css"
import {useState} from "react"
import {useDispatch} from "react-redux"
import { toast } from "react-toastify"
import {post_product} from "../../features/Allproducts/productaction"
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
    tag:"",
    category:"",
    tipe: "",
    color: ""
}
const [form, setForm] = useState(formFields)
const {productname, price, tag, category, color, tipe} = form; 
const setFormFields = (e) => {
const {name, value} = e.target;
setForm({...form, [name]:value})
}

const dispatch =  useDispatch();
function postproduct (){
  if(!productname || !price || !tag || !category ||!tipe ||!color ||!image){
   toast.error("Some fields may be empty please check again")
  }else{
  const {productname, price, tag} = form
  const newProduct = {
    name:productname,
    price:price,
    tag:tag,
    image:image,
    category:category,
    tipe: tipe,
    color:color
  }
  toast.success("product Created")
  dispatch(post_product(newProduct))
  }
}
return (
  <>
  <div className="Add__productContainer">
  <div className="input__container">
  <input className='inputs__fieldAdmin' placeholder="Name: Enter product name here" name="productname" value={productname} onChange={((e)=>{setFormFields(e)})}/>
  <input className='inputs__fieldAdmin' placeholder="Price: Enter price without the doller symbol " name="price" value={price}  onChange={((e)=>{setFormFields(e)})}/>
  <input className='inputs__fieldAdmin' placeholder="Tag: Product Tag" name="tag" value={tag}   onChange={((e)=>{setFormFields(e)})}/>
  <input type="file" className='inputs__fieldAdmin' onChange={((e)=>{picdata(e.target.files[0])})}/> 
   
   {/* category selection */}
   <select className='select__category' name="category" value={category} onChange={((e)=>{setFormFields(e)})}>
    <option value="">category</option>
    <option value="T-Shirt">T-Shirt</option>
    <option value="Sweatshirt">Sweatshirt</option>
    <option value="Dress">Dress</option>
    <option value="Pants and Skirt">Pants and Skirt</option>
    <option value="Swimsuit">Swimsuit</option>
    <option value="Stuff and Accessories">Stuff and Accessories</option>
   </select>
   
   {/* color selection */}
   <select  className='select__color' name="color" value={color} onChange={((e)=>{setFormFields(e)})}>
    <option value="">Select a color</option>
    <option value="Black">Black</option>
    <option value="Red">Red</option>
    <option value="Brown">Brown</option>
    <option value="Multicolor">Multicolor</option>
    <option value="Grey">Grey</option>
    <option value="Blue">Blue</option>
   </select>

    {/* tipe selection */}
    <select  className='select__tipe' name="tipe" value={tipe} onChange={((e)=>{setFormFields(e)})}>
    <option value="">Select a tipe</option>
    <option value="Red">Basic</option>
    <option value="Brown">pattern</option>
    <option value="Multicolor">Zipper</option>
    <option value="Blue">Oversize</option>
   </select>

   <button className='createproduct__AdminBtn' onClick={(()=>{postproduct()})}>Create Product</button>
   </div>


   {/* product display container */}
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
            {`Price: $ ${form.price}`}
          </span>
        </div>
      </div>
  </div>
</>  
)
}
export default Admin