import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from  "react-redux"
import { toast } from 'react-hot-toast'
import { useRef } from 'react'
import {get_product, delete_product, update_product} from "../../../features/Allproducts/productaction"
import "../Products/products.css"
import previewImage from "../../../components/assets/previewImg.jpg"
import ExitIcon from '@mui/icons-material/HighlightOff';
import Loader from "../../components/Loader/loader"
import {Link} from "react-router-dom"

  const Products = () => {  
  const dispatch = useDispatch() 
  const {products} = useSelector((state)=> state.product)

  useEffect(()=>{
   dispatch(get_product())
  }, [])

  const deleteProduct = (id, name) => {
   dispatch(delete_product(id))
   toast.success(`${name} was deleted successfully`)
  }

 const [form, setFormFields] = useState( { id: "",name: "", price:" ", tag: "",image: ""})
 const {name, price, tag,} = form
 const updateFields = (e) => {
 const {name, value} = e.target
   setFormFields({...form, [name]:value})
 }

  // update product
  const callupdate_product = (product) =>{
    if(!form.name || !form.price || !form.tag){
      toast.error("Empty fields please check Again")
    }else{
      dispatch(update_product(product))
      toast.success(`${product.name} has been updated`)
      update_formContainer.current.classList.add("hideUpdate_container")
    }
  }

  // Hide and show updateContauiner function
  let update_formContainer = useRef("")
  useEffect(()=>{
    update_formContainer.current.classList.add("hideUpdate_container")
  }, [])
  const HideUpdate_container = () =>{
    update_formContainer.current.classList.add("hideUpdate_container")
  }
  const ShowUpdate_container = () =>{
    update_formContainer.current.classList.remove("hideUpdate_container")
  }


  return (
    <>
    <div className='productOuter_container' >
    {/* <h3 className='Admin_pagetitle_product'>Shop Products</h3>
       */}
     {/* update form fields for Admin page*/}
     <div className='update_formContainer'  ref={update_formContainer}>
     <ExitIcon onClick={(()=>{HideUpdate_container()})}/>
      
     <div className='updating_textContainer'>
     <h1>updating {form.name}</h1> 
     <img className="productImage__Admin" src={!form.image ? previewImage : form.image} alt="productImage"/>
     </div>
      
      {/* update input fields  */}
     <input className="update_input" name="name" value={name} onChange={((e)=>{updateFields(e)})}></input>
     <input className="update_input" name="price" value={price} onChange={((e)=>{updateFields(e)})}></input>
     <input className="update_input" name="tag" value={tag} onChange={((e)=>{updateFields(e)})}></input>
     <button className="update_Productbtn" onClick={(()=>{callupdate_product(form)})}>Update</button>
     </div>
     
     {products?.map((product)=>
     <div className='productInner_container'>
     <div>
     <img className="productImage__Admin" src={product.image} alt="A product" />
     </div>
     <p className='product_nameAdmin'>{product.name}</p>
     <p className='product_priceAdmin'>${product.price}</p>
     <p className='product_tagAdmin'>Tag as <span className='tag'>{product.tag}</span></p>
     <button className='delete_btn' onClick={(()=>{deleteProduct(product._id, product.name)})}>Delete</button>
     <Link to={`/${product.name}/${product._id}`}>
     <button className='view_btn'>View</button>
     </Link>
     <button className='update_btn' onClick={(()=>{setFormFields({...form, id:product._id, name:product.name, price:product.price,  tag:product.tag, image:product.image}); ShowUpdate_container() })}>Update</button>
    </div>
  )}
   </div>
   </>
  )
}

export default Products