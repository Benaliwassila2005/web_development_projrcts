import React, { createContext, useEffect, useState } from 'react'

export const cartContext = createContext()

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() =>

   {
     const saveCart = localStorage.getItem('cartItems');
      console.log('saveCart from localStorage:', saveCart) 
     return saveCart ? JSON.parse(saveCart) : [];

   }

)

  const addItem = (item) => {
    setCartItems((prevItem) => [...prevItem, item])
  }

   useEffect(()=> {
      if (cartItems.length > 0) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }
   },[cartItems])



  return (
    <cartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider