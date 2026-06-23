import React from 'react'
import { BsSearchHeart } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { BsFlower1 } from "react-icons/bs";
import Polar_image from '../../../pics/polar.jpg'
import './header_right.css'
import { GoHeartFill } from "react-icons/go";

function Right_header() {
    const date = new Date();
    const hours = date.getHours();

    function toGreet(hours){
        if(hours<12)
              return  `Good morning`;

        else if (hours >= 12 && hours <= 17)
                return 'Good Afternoon';

        else if (hours > 17 && hours <= 24)
               return 'Good Evening';
        
     
    }
  return (
      <div className="header_right_conatainer">
       <div className="message">
        <div className="message_icon">
            <h1>{toGreet(hours)}</h1>
            <span> {<GoHeartFill />}</span>
        </div>
        <h3>you have <span className='count'>0</span> Tasks Today</h3>
       </div>

       <div className="input_profile">
       
        <div className="input">
            <input type="text" placeholder='Search Tasks....' />
            <div className='div_serach_icon'><span className='serach_icon_span'><BsSearchHeart /></span>
              </div>
        </div>
        <span className='bell' ><CiBellOn /></span>
        <div className="profile_image"><img src={Polar_image} alt="" /></div>
       </div>

      </div>
  )
}

export default Right_header