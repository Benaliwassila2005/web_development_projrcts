import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { IoIosShareAlt } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./productDetails.css"
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Slide_products from '../components/Slide_products'






function Products_Details() {
     const {id} = useParams()
     console.log(id)
     const [product , setProduct] = useState(null);
     const [loading , setLoading] = useState(true);
     const [relatedProduct , setRelatedProduct] = useState([]);
     const [loadingProduct , seLoadingProduct] = useState(true);
     
     useEffect(()=>{
        const fetchProduct = async() =>{
            try{

                 const res = await fetch(`https://dummyjson.com/products/${id}`) 
                const data = await res.json()
                setProduct(data)
            }catch(error){
                console.log(error);
            }
        }
        fetchProduct()
     },[id])
     
     useEffect(()=>{
      if(!product) return  
       fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then ((res)=>res.json()).then((data)=>{
        setRelatedProduct(data.products);

      }).catch((error)=>console.log(error)) 
      .finally(()=> seLoadingProduct(false))
      },[product?.category])


    console.log(product)
   console.log( relatedProduct )
    // if((loading)) return <p>Loading...</p>
    if(!product) return <p>Product Not Found</p>
  return (
      <div>
          <div className="item_details">
          <div className="container">
            <div className="img_item">
              <div className="big_img" >
                <img src={product.images[0]} id='big_image' alt={product.title} />
              </div>
              <div className="small_img" id='sm_img'>
               {product.images.map((img,index)=>(
                <img key={index} src={img} alt='' onClick={() => document.getElementById("big_image").src=img}/>
               ))}
              </div>
            </div>

          <div className="details_item">
            <h1 className="name">{product.title}</h1>
             <div className="stars">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <FaRegStarHalfStroke />
            
                    </div>
                    <p className='price'>{product.price}</p>
                    <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                    <h5>Brand: <span>{product.brand}</span></h5>
                    <p className='desc'>{product.description}</p>
                    <h5 className='stock'>Hurry Up only <span>{product.stock}</span> products left in the stock</h5>
                    <button className='btm'>Add to cart <FaShoppingCart></FaShoppingCart></button>
                    
                    
                    <div className="icons">
                                <span><FaRegHeart /></span>
                                <span><IoIosShareAlt /></span>
                    
                    
                    </div>


                    
          
          </div>


          </div>
        </div>
        
        {
          loadingProduct?(<p>Loading....</p>):(
            <Slide_products key={product.category} data={relatedProduct} title={product.category}/>
          )

        }



      </div>
        
  )
}

export default Products_Details