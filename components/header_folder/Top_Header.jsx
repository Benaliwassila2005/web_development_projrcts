import "./top_header.css"

// import react icons libraries

import { FaArrowRight } from "react-icons/fa6";
import { GiCandleLight } from "react-icons/gi";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";

//  import images

import pic1 from "../../components/pictures_folder/pic1.jpg";
import pic2 from "../../components/pictures_folder/pic2.jpg";
import pic3 from "../../components/pictures_folder/pic3.jpg";
import pic4 from "../../components/pictures_folder/pic4.jpg";
import pic5 from "../../components/pictures_folder/pic5.jpg";
import pic6 from "../../components/pictures_folder/pic6.jpg";
import pic7 from "../../components/pictures_folder/pic7.jpg";
import pic8 from "../../components/pictures_folder/pic8.jpg";
import pic9 from "../../components/pictures_folder/pic9.jpg";
import pic10 from "../../components/pictures_folder/pic10.jpg";
import pic11 from "../../components/pictures_folder/pic11.jpg";
import pic12 from "../../components/pictures_folder/pic12.jpg";
import pic13 from "../../components/pictures_folder/pic13.jpg";
import pic14 from "../../components/pictures_folder/pic14.jpg";
import pic15 from "../../components/pictures_folder/pic15.jpg";
import pic16 from "../../components/pictures_folder/pic16.jpg";
import pic17 from "../../components/pictures_folder/pic17.jpg";
import pic18 from "../../components/pictures_folder/pic18.jpg";
import pic19 from "../../components/pictures_folder/pic19.jpg";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'



function Top_Header() {
   
   // create text ref

   const textRef = useRef(null);

  return (

 
    <div
      className="container_image"
      style={{
        backgroundImage: `linear-gradient(rgba(15,15,15,.75),rgba(15,15,15,.45)), url(${pic19})`,
      }}  id="home" 
    >
      <div className="container_blur">
       
        <div className="nav_bar">
          <div className="logo">
            <img src="../components/pictures_folder/logo_changed_version.jpg" alt="" />
          </div>


          <div className="nav_list">
            <nav>
              <a href="#home" >الرئيسية</a>
              <a href="#services">الخدمات</a>
              <button id="contact_btn" onClick={()=>document.getElementById("footer")?.scrollIntoView({behavior:"smooth"})}>اتصل بنا</button>
              <button id="book_btn" onClick={()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"})}>احجز الآن</button>
            </nav>
          </div>
        </div>
            <div className="text_content">

  
         <h1 > ...امنح نفسك لحظات من الفخامة <br />
                  <span> دون مغادرة منزلك</span></h1>

      
         
        <p>
                 حوّل منزلك إلى مساحة حقيقية للاسترخاء والرفاهية
                 مع خدمة الجاكوزي المنزلي، واستمتع بتجربة فريدة
                 <br />
                  تجمع بين الراحة والهدوء و <span>الفخامة، في أجواء من الخصوصية التامة </span> 
                 لتعيش لحظات لا تُنسى مع العائلة أو الأصدقاء
       </p>
             
               
               <div className="start_now">
                 <button id="start_btn" onClick={()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth"})}>ابدأ الآن </button> <span><FaArrowRight /></span>
               </div>
             
 


        </div>
      </div>
    </div>


  
      
  


      )   
}


export default Top_Header