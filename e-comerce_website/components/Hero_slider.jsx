
// import Hero_slider from '../components/Hero_slider'
import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Pagination, Navigation,Autoplay } from 'swiper/modules';


function Hero_slider() {
  return (
      <>
       
       <div className="hero">
          <div className="">

             <Swiper 
               autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
        }}
             pagination={true} navigation={true} autoplay={true} modules={[Pagination,Navigation,Autoplay]} className="mySwiper">
              <SwiperSlide> 
                <div className="content">
                    <h4>Introducing The new</h4>
                    <h3>Microsoft Xbox</h3>
                    <p>Winodws xp/11/10/7/8</p>
                    <Link to="/" className="btn">Shop Now</Link>
                </div>
                 <Link> <img src="../pic_ecomerce/pic1.jpg" alt="" /></Link>
              </SwiperSlide>
                  <SwiperSlide> 
                <div className="content">
                    <h4>Introducing The new</h4>
                    <h3>Microsoft Xbox</h3>
                    <p>Winodws xp/11/10/7/8</p>
                    <Link to="/" className="btn">Shop Now</Link>
                </div>
                
                <Link><img src="../pic_ecomerce/pic20.jpg" alt="" /></Link>

                
             
              </SwiperSlide>
               <SwiperSlide> 
                <div className="content">
                    <h4>Introducing The new</h4>
                    <h3>Microsoft Xbox</h3>
                    <p>Winodws xp/11/10/7/8</p>
                    <Link to="/" className="btn">Shop Now</Link>
                </div>
                 <img src="../pic_ecomerce/pic45.jpg" alt="" />

              </SwiperSlide>

             </Swiper>
          </div>
       </div>




    </>
    
  )
}

export default Hero_slider