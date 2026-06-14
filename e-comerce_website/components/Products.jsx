import React, { useContext, useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartContext } from './cartContext';

function Products({item}) {
  const {cartItems, addItem } = useContext(cartContext)
  console.log(cartItems);
  return (

    <div className="product">
      <Link to={`/products/${item.id}`}>
        
        <div className="img_product">

           <img src={item.thumbnail} alt={item.title} />
        </div>
        <p className='name_product'>{item.title}</p>

        <div className="starts">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <FaRegStarHalfStroke />

        </div>

        <p className='price'>{item.price}</p>
      
      
      </Link>

        <div className="icons">
            <span><FaRegHeart /></span>
            <span  onClick={()=>addItem(item)}><FaShoppingCart /></span>
            <span><IoIosShareAlt /></span>


        </div>

    </div>
  )
}

export default Products