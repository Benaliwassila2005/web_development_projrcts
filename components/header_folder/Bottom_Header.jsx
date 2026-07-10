import React from 'react'
import './bottom_header.css'
import {Bath ,Flower2, Star, Sparkle, icons } from 'lucide-react';
import { MdArrowForwardIos } from "react-icons/md";
// react icons

import { HiArrowSmallRight } from "react-icons/hi2";

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
import pic20 from "../../components/pictures_folder/pic20.jpg";
import pic21 from "../../components/pictures_folder/pic21.jpg";
import pic22 from "../../components/pictures_folder/pic22.jpg";
import pic23 from "../../components/pictures_folder/pic23.jpg";
import pic24 from "../../components/pictures_folder/pic24.jpg";

import pic25 from "../../components/pictures_folder/pic25.jpg";
import pic26 from "../../components/pictures_folder/pic26.jpg";
import pic27 from "../../components/pictures_folder/pic27.jpg";
import pic28 from "../../components/pictures_folder/pic28.jpg";
import pic29 from "../../components/pictures_folder/pic29.jpg";
import pic30 from "../../components/pictures_folder/pic30.jpg";
import pic31 from "../../components/pictures_folder/pic31.jpg";
import pic32 from "../../components/pictures_folder/pic32.jpg";
import pic33 from "../../components/pictures_folder/pic33.jpg";
import pic34 from "../../components/pictures_folder/pic34.jpg";
import pic35 from "../../components/pictures_folder/pic35.jpg";
import pic36 from "../../components/pictures_folder/pic36.jpg";
import pic37 from "../../components/pictures_folder/pic37.jpg";
import pic38 from "../../components/pictures_folder/pic38.jpg";
import pic39 from "../../components/pictures_folder/pic39.jpg";
import pic40 from "../../components/pictures_folder/pic40.jpg";
import pic41 from "../../components/pictures_folder/pic41.jpg";
import pic42 from "../../components/pictures_folder/pic42.jpg";
import pic44 from "../../components/pictures_folder/pic44.jpg";
import pic45 from "../../components/pictures_folder/pic45.jpg";
import pic46 from "../../components/pictures_folder/pic46.jpg";
import pic47 from "../../components/pictures_folder/pic47.jpg";
import pic48 from "../../components/pictures_folder/pic48.jpg";
import pic49 from "../../components/pictures_folder/pic49.jpg";
import pic50 from "../../components/pictures_folder/pic50.jpg";
import pic51 from "../../components/pictures_folder/pic51.jpg";


//import dom ELements

import  {BrowserRouter,Link,Route,Routes} from "react-router-dom"


// react swiper 

import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination , Autoplay, Navigation } from 'swiper/modules';








function Bottom_Header() {
  return (
     <div className="global_container">
         <div className="features_container">
            
             <div className="features_content">
               <div className="icons"><Sparkle /> </div>
               <div className="content">
                  <h2>حمام جاكوزي</h2>
                  <p>استرخِ في مياه دافئة تمنح جسمك الراحة وتجدد نشاطك</p>
               </div>
            </div>
             <div className="features_content middle_div">
               <div className="icons"> <Flower2 /></div>
               <div className="content">
                  <h2>أجواء هادئة</h2>
                  <p>إضاءة دافئة وروائح عطرية مريحة</p>
               </div>
            </div>
            
            <div className="features_content">
               <div className="icons"> <Star /></div>
               <div className="content">
                  <h2>خدمة احترافية</h2>
                  <p>فريق متخصص يحرص على تقديم تجربة استثنائية بكل احترافية</p>
               </div>
            </div>
         </div>





         {/* services section  */}

   
         <div className="services_section" id='services'>

               
   
        
           <h2 id='service_tit'>خدماتنا</h2>
           <hr  id='line'/>

           <div className="services_container">

          
        
            <Swiper

            spaceBetween={30}
            slidesPerView={3}
            loop={true}
              
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
                  }}
              pagination={{
              clickable: true,
                  }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
            <div className="service_cont">

            <div className="div_image">
            <img src={pic23} alt="الخدمات الرئيسية" />
            </div>

          <div className="content_service">
          <h2>الخدمات الرئيسية</h2>

           <p>
            اختر من بين باقاتنا الأساسية المصممة لتمنحك تجربة استرخاء
            فاخرة تجمع بين الراحة والخصوصية وأجواء الاستجمام المميزة
            
            

            </p>
                 </div>
               
               
            <button className='book_now' >ابدأ الآن<MdArrowForwardIos /></button>
            

               </div> 




               </SwiperSlide>


              <SwiperSlide> 
                 <div className="service_cont">

                    <div className="div_image">
                     <img src={pic51} alt="" />
                    </div>
                    <div className="content_service">
                       <h2>جاكوزي بسيط</h2>
                       <p>استمتع بلحظات من الاسترخاء والراحة في أجواء هادئة</p>

                         <div className="price"><span>15,000 DA</span></div>

                       
                    </div>
                     
                  <Link to="/book" className='book_link'> <button className='book_now'>احجز الآن<MdArrowForwardIos /></button></Link>
                  
                  
                  </div>

              </SwiperSlide>
{/*  
              <SwiperSlide>
     
                      <div className="service_cont">

                        <div className="div_image"><img src={pic28} alt="" /></div>
                        <div className="content_service">
                        <h2>جاكوزي مع ديكور مميز</h2>
                        <p>تجربة أكثر فخامة مع لمسات ديكورية تضيف جمالاً وراحة</p>
                        <div className="price"><span>20,000 DA</span></div>

                       </div>

                       <button className='book_now'>احجز الآن<MdArrowForwardIos /></button>
                    
                  
                  
                    </div> 

              </SwiperSlide> */}
   
              <SwiperSlide>
               <div className="service_cont">

                    <div className="div_image"><img src={pic31} alt="" /></div>

                    <div className="content_service">


                       <h2>باقة الجاكوزي مع ديكور الغرفة</h2>
                       <p>تجربة متكاملة تشمل تزيين الجاكوزي والغرفة لخلق أجواء رومانسية وفاخرة.</p>
                       <div className="price"><span>2,000 DA</span></div>

                    </div>


                   
                  <Link to="/book"   className='book_link'> <button className='book_now'>احجز الآن<MdArrowForwardIos /></button></Link>
                    
                    
                  
                  
               </div>  

              </SwiperSlide>

              {/* additional services  */}
            
            <SwiperSlide>
      <div className="service_cont">

      <div className="div_image">
      <img src={pic5} alt="الخدمات الإضافية" />
     </div>

     <div className="content_service">
      <h2>الخدمات الإضافية</h2>

      <p>
        أضف لمسة من الفخامة إلى تجربتك مع مجموعتنا المختارة من الخدمات
        الإضافية، المصممة بعناية لتجعل لحظات الاسترخاء أكثر تميزًا
        وخصوصية.
      </p>
    </div>

    <button className="book_now">
      اكتشف المزيد <MdArrowForwardIos />
    </button>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="service_cont">

    <div className="div_image">
      <img src={pic27} alt="طبق فواكه طازجة" />
    </div>

    <div className="content_service">
      <h2>طبق فواكه طازجة</h2>

      <p>
        تشكيلة من الفواكه الطازجة والمنعشة، تم اختيارها بعناية لتكمل
        لحظات الاسترخاء وتمنحك تجربة فاخرة ومليئة بالحيوية.
      </p>

      <div className="price">
        <span>4,000 DA</span>
      </div>
    </div>
         
          <Link to="/book"  className='book_link'> <button className='book_now'>احجز الآن<MdArrowForwardIos /></button></Link>

  </div>
</SwiperSlide>
{/* 
<SwiperSlide>
  <div className="service_cont">

    <div className="div_image">
      <img src={pic7} alt="طبق فواكه جافة" />
    </div>

    <div className="content_service"> 
      <h2> طبق فواكه جافة</h2>

      <p>
        مزيج فاخر من الفواكه الجافة والمكسرات المختارة بعناية، ليضيف
        لمسة راقية إلى جلسة الاسترخاء الخاصة بك.
      </p>

      <div className="price">
        <span>2,000 DA</span>
      </div>
    </div>

    <button className="book_now">
      احجز الآن <MdArrowForwardIos />
    </button>

  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="service_cont">

    <div className="div_image">
      <img src={pic7} alt="حلويات مخصصة" />
    </div>

    <div className="content_service">
      <h2> حلويات مخصصة</h2>

      <p>
        تشكيلة من الحلويات المصممة حسب الطلب، لإضافة لمسة مميزة
        وأنيقة إلى مناسبتك وجعل التجربة أكثر تميزاً.
      </p>

      <div className="price">
        <span>4,000 DA</span>
      </div>
    </div>

    <button className="book_now">
      احجز الآن <MdArrowForwardIos />
    </button>

  </div>
</SwiperSlide>

 */}
        
            </Swiper> 


            
               



              
                 


            </div>


         </div>


     </div>

  )
}

export default Bottom_Header