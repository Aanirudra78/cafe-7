'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartButton() {
  const { cart, setIsCartOpen } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-8 sm:bottom-8 right-4 sm:right-8 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-accent to-[#c49464] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-glow flex items-center justify-center"
      aria-label="Open cart"
    >
      <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-espresso text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white"
          >
            {itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
