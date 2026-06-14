import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import {Link, useLocation} from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";


function Bottom_header() {

  const location = useLocation();
  const [categories,setCategories] = useState([]);
  const [isCategoryOpen,setCategoryOpen] = useState(false);

  const NavLinks =[
     
    {title:"Home",link:"/"},
    {title:"About",link:"/about"},
    {title:"Accessories",link:"/"},
    {title:"Bolg",link:"/blog"},
    {title:"Contact",link:"/contact"},
    

  ]
  
  useEffect(()=>{
    fetch("https://dummyjson.com/products/categories")
    .then((res)=>res.json())
    .then((data)=>setCategories(data))
  },[]

  )
  console.log(categories)
  return (
       <div className="btm_header">
         <div className="container">
          <nav className='nav'>
           <div className="category_nav">
               <div className="ctegory_btm" onClick={()=>setCategoryOpen(!isCategoryOpen)}>
                 <IoMdMenu />
                 <p>Browse Category</p>
                 <IoMdArrowDropdown />
               </div>
               <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
                  {categories.map((category)=>(
                   <Link to={category.slug} className='list_nav_name'>{category.name} </Link>
                  ) )}
              </div>

           </div>
           <div className="nav_links">
            {NavLinks.map((item)=>(
            <li className={location.pathname===item.link ? "active" :""}><Link to={item.link}>{item.title}</Link></li>
            ))}
          
           </div>
          </nav>


          <div className="sign_regs_icon">
            <Link to="/"><PiSignInBold /></Link>
            <Link to="/"><FaUserPlus /></Link>
          </div>


         </div>


       </div>

  )
}

export default Bottom_header

