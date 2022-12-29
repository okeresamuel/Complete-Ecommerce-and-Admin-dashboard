import { Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import "./viewAproduct.css"
import moment from "moment"


function ViewAproduct() {
 let {id} = useParams()
 let {products} = useSelector((state)=> state.product)
 let foundproduct =  products?.find((product)=> product._id === id )

  return (
    <>
    <div className="product__container__viewpage">
        <img  className="product__img__viewpage" src={foundproduct?.image} alt="productImage"/>
        <div>
        <p>{foundproduct?.name}</p>
        <p>{`$${foundproduct?.price}`}</p>
        <p>{foundproduct?.tag}</p>
        <Link to="/Aparel/Admin/Products" className="Back__products__text">All products</Link>
        </div>
    </div>
    </>
  )
}

export default ViewAproduct
