import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../pic_ecomerce/pic27.jpg'
import { IoMdSearch } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './header.css'

function Top_header() {
  return (
    <div className='top_header'>

        <div className="container">
          <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>
          <form action="" className='search_box'>
            <input type="text" id='search' name='search' placeholder='Search for item' />
            <button type='submit'><IoMdSearch /></button>

        </form>


        <div className="header_icons">
          <div className="icon">
               <FaRegHeart />
               <span className='count'>0</span>
          </div>
             <div className="icon">
               <FaShoppingCart />
               <span className='count'>0</span>
             </div>
        </div>
       
        </div>

    </div>
  )
}

export default Top_header