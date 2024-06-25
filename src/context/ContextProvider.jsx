import React, { useState } from 'react'
import MyContext from './myContext'

const ContextProvider = ({children}) => {
    // const [loading, setLoading]=useState(false)
    const [cart,setCart]=useState([])

    const increment=(productId)=>{
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }
    const decrement=(productId)=>{
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
        )
}

    const addToCart=(product)=>{
        setCart((prevCart)=>{
            const existingProduct=prevCart.find((item)=> item.id === product.id)

            if(existingProduct){
                return prevCart.map((item)=> item.id===product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prevCart, { ...product, quantity: 1 }];
        })
    }
  return (
    <MyContext.Provider value={{cart,addToCart,increment,decrement}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider