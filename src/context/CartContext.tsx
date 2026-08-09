'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { MenuItemData } from '@/sanity/lib/client'

export interface CartItem {
  dish: MenuItemData
  quantity: number
  notes?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (dish: MenuItemData, quantity?: number) => void
  removeFromCart: (dishId: string) => void
  updateQuantity: (dishId: string, delta: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  isCheckoutOpen: boolean
  setIsCheckoutOpen: (open: boolean) => void
  openCheckout: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false)

  // Load saved cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('resto_cart')
      if (saved) {
        setCart(JSON.parse(saved))
      }
    } catch (e) {
      console.error('Failed to parse cart state:', e)
    }
  }, [])

  // Save cart to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem('resto_cart', JSON.stringify(cart))
    } catch (e) {
      console.error('Failed to save cart state:', e)
    }
  }, [cart])

  const addToCart = (dish: MenuItemData, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.dish._id === dish._id)
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }
      return [...prev, { dish, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (dishId: string) => {
    setCart((prev) => prev.filter((ci) => ci.dish._id !== dishId))
  }

  const updateQuantity = (dishId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.dish._id === dishId) {
            const newQty = ci.quantity + delta
            return newQty > 0 ? { ...ci, quantity: newQty } : null
          }
          return ci
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = cart.reduce((acc, item) => acc + item.dish.price * item.quantity, 0)

  const openCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        openCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
