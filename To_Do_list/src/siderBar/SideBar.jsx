import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RiHomeHeartLine } from "react-icons/ri";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { FaSquareCheck } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { LuBookHeart } from "react-icons/lu";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { TbSettingsFilled } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import Toggle from './Toggle';
import "./SideBar.css";


function SideBar() {

  return (

    <div className='sideBar_container'>

      <div className="sideBar_header">

        <div className="icon_logo">
             <span className='menu_icon'><TiThMenu /></span>
              <h2>Tickify</h2>   
     
       </div> 
      </div>

      <div className="menu"> 

        <nav>

          <ul> 
          
            <li><a href="" className='active'><RiHomeHeartLine />Today</a></li>
            <li><a href=""><FaSquareCheck  className='icon_menu'/>Tasks</a></li>
            <li><a href=""><LuBookHeart /> Categories</a></li>
            <li><a href=""><BsFillCalendar2HeartFill /> Calendar</a></li>
            <li><a href=""><FaLink /> Habits</a></li>
            <li><a href=""><TbNotes /> Notes</a></li>
            <li><a href=""><AiOutlineStock />Statistics</a></li>
            <li><a href=""><TbSettingsFilled />Setting</a></li>
            <li><a href=""><LuLogOut />Log out</a></li> 
            
          </ul> 

        </nav>

      </div>


      <div className="qoute">

      </div>
       

       <div className='sidebar'>
        <Toggle/>
       </div>



    </div>
  )
}

export default SideBar