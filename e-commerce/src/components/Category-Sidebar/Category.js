import React from 'react'
import "../Category-Sidebar/Category.css"
function Category() {
  return (
   <>
    <h4 className='Header__text'>Category</h4>
    <div className='category__container'>
    <a href="#Closed"  className="link">T-Shirt</a>
    <a href="#Closed"  className="link">Sweatshirt</a>
    <a href="#Closed"  className="link">Dress</a>
    <a href="#Closed"  className="link">Pants and Skirt</a>
    <a href="#Closed"  className="link">Swinsuit</a>
    <a href="#Closed"  className="link">Stuff and Accessories</a>
    </div>
    </>
  )
}

export default Category