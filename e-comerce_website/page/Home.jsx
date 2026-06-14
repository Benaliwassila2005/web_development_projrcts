import React, { useEffect, useState } from 'react'
import './home.css'
import Hero_slider from '../components/Hero_slider'
import Slide_products from '../components/Slide_products'


const  categories =[


   "smartphones",
    "laptops",
   "tablets",
]




function Home() {

  const [products,setProducts] = useState({})
   const [loading,setLoading] = useState(true)
 
  useEffect(()=>{
    const fetchProducts = async () =>{
      try{
        const results = await Promise.all(
          categories.map(async (category)=>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return {[category]:data.products}
          })
        )
        const productsData = Object.assign({},...results);
        setProducts(productsData);

      }catch(error){
        console.error("Error Fetching",error);
      }finally{
        setLoading(false)
      }
    }
    fetchProducts()
},[]);

console.log(products)




  return (
   <>
    
     <Hero_slider/>
     {
      loading? (
        <p>Loading......</p>
      ) : (
        categories.map((category)=>
       <Slide_products key={category} data={products[category]} title={category}/>
          
    )  
          
      )
     }
     
    
   </>
  )
}

export default Home