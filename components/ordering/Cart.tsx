'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import OrderModal from './OrderModal'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()
  const [showOrderModal, setShowOrderModal] = React.useState(false)

  const variants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-gradient-to-br from-white to-light-beige dark:from-rich-black dark:to-dark-brown z-50 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-2xl font-serif font-semibold text-deep-charcoal dark:text-soft-white-dark">
                  Your Cart
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-deep-charcoal dark:text-soft-white-dark" />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ShoppingBag className="w-16 h-16 mb-4" />
                    <p className="text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-deep-charcoal dark:text-soft-white-dark truncate">
                              {item.name}
                            </h3>
                            <p className="text-accent font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2 mt-2">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="w-8 text-center font-semibold text-deep-charcoal dark:text-soft-white-dark">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center hover:bg-accent/90 transition-colors shadow-md"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-deep-charcoal dark:text-soft-white-dark">Subtotal</span>
                    <span className="text-xl font-bold text-deep-charcoal dark:text-soft-white-dark">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  
                  <Button
                    onClick={() => {
                      onClose()
                      setShowOrderModal(true)
                    }}
                    className="w-full"
                    size="lg"
                  >
                    Checkout via WhatsApp
                  </Button>
                  
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (confirm('Are you sure you want to clear your cart?')) {
                        clearCart()
                        onClose()
                      }
                    }}
                    className="w-full text-center text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Clear Cart
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderModal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)} />
    </>
  )
}
