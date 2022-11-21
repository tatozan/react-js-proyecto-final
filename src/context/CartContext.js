import React, { createContext, useState } from 'react'


export const CartContext = createContext();


export default function CartProvider ({children}) {

    
    const [cart, setCart] = useState([]) 


    const cartQuantity = cart.reduce((acc, product) => acc + product.qty, 0); 
    
    const cartTotal = cart.reduce((acc, product) => acc + (product.qty * product.price), 0); 


    const addToCart = (item, qty) => { 
        setCart(prevItems => {
                if (!isInCart(item.id)) return [...prevItems, {...item, qty}]  
                else {  return prevItems.map( product => {
                            if(product.id === item.id) return {...product, qty}
                            else return product;
                        })
                }
        })
    }




    const isInCart = (id) => cart.find(product => product.id === id)


    const clearCart = () => setCart([]);


    const removeItemFromCart = (id) => setCart(cart.filter(product => product.id !== id))    

    
   
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItemFromCart, cartQuantity, isInCart, cartTotal}}>
            {children}
        </CartContext.Provider>

    )
}






