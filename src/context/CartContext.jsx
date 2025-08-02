// context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    total: 0
  })

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    setCart(prev => {
      const existingItem = prev.items.find(i => i.id === item.id)
      let updatedItems
      
      if (existingItem) {
        updatedItems = prev.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else {
        updatedItems = [...prev.items, { ...item, quantity: 1 }]
      }

      const total = calculateTotal(updatedItems)
      return { items: updatedItems, total }
    })
  }

  const removeFromCart = (id, removeAll = false) => {
    setCart(prev => {
      const existingItem = prev.items.find(i => i.id === id)
      let updatedItems

      if (existingItem.quantity > 1 && !removeAll) {
        updatedItems = prev.items.map(i => 
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
      } else {
        updatedItems = prev.items.filter(i => i.id !== id)
      }

      const total = calculateTotal(updatedItems)
      return { items: updatedItems, total }
    })
  }

  const clearCart = () => {
    setCart({ items: [], total: 0 })
  }

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
      return sum + (price * item.quantity)
    }, 0)
  }

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}