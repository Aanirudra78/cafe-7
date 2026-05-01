'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Cart from './Cart'

export default function CartButton() {
  const { cartCount } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open cart"
      >
        <ShoppingBag className="w-6 h-6" />
        {cartCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-espresso text-cream text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {cartCount}
          </motion.span>
        )}
      </motion.button>

      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
