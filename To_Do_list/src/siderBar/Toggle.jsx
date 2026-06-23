import React from 'react'
import {useState,useEffect} from "react";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";


import './toogle.css'



function Toggle() {
  
     const [isDark,setDark] = useState(false);
     
    

     //create a function when a user click

     function handleToggle(){
        setDark(!isDark);
     };

    useEffect(() => {
        (isDark ? document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"))
       
      },[isDark]);
     
  
    return (

        <div className='toggle_container'>

            <div className="icon sun">
            <IoMdSunny />
            </div>
            
            <div className={isDark ? `toggle dark-mode`: "toggle"} onClick={handleToggle}>
            <div className={isDark? "circle move" : "circle" }></div>
        
        </div>
        
             <div className="icon moon">
                 <BsMoonStarsFill />
            </div>

        </div>
         
    
   
  )
}

export default Toggle