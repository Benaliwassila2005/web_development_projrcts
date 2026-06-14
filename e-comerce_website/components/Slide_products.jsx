import Products from './Products'
import './product_sliders.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';


function Slide_products({data,title}) {
  if (!data || data.length === 0) return null;
  return (

    <div className='slide_products slide'>
        <div className="container">
            <div className="topSlide" >
                {/* <h2 >Always <span>with</span> High Quality</h2> */}
                <p>{title}</p>
            </div>
            <Swiper 
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true} modules={[Navigation]}
                  loop={true} 
                  autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                              }}
                  pagination={true} navigation={true} autoplay={true} modules={[Pagination,Navigation,Autoplay]}      
                    className="mySwiper">

               
                    {data.map((item)=>{
                      return (

                       <SwiperSlide><Products item={item} /></SwiperSlide>
                         
                      )
                    })}

        
            </Swiper>

            

     
        </div>

    </div>
  )
}

export default Slide_products