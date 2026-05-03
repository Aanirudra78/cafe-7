'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartButton from '@/components/ordering/CartButton'
import CartWrapper from '@/components/ordering/CartWrapper'
import PageTransition from '@/components/animations/PageTransition'
import { menuItems } from '@/lib/data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useCart } from '@/context/CartContext'
import { Plus, Minus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'

type Category = 'all' | 'coffee' | 'food' | 'desserts'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const { addToCart, cart } = useCart()

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'food', label: 'Food' },
    { id: 'desserts', label: 'Desserts' },
  ]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  const getQuantity = (itemId: string) => {
    const item = cart.find(i => i.id === itemId)
    return item ? item.quantity : 0
  }

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-light-beige dark:bg-rich-black">
        {/* Hero */}
        <div className="relative h-[400px] bg-gradient-coffee flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-espresso/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
            alt="Menu background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream/90"
            >
              Crafted with passion, served with love
            </motion.p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-16 z-30 bg-soft-white/95 dark:bg-rich-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-2 overflow-x-auto hide-scrollbar">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'text-accent'
                      : 'text-deep-charcoal dark:text-soft-white-dark hover:text-accent'
                  }`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-brown rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-gray-100 dark:border-gray-800"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full capitalize"
                    >
                      {item.category}
                    </motion.span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">
                        {formatPrice(item.price)}
                      </span>

                      {getQuantity(item.id) > 0 ? (
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              const cartItem = cart.find(i => i.id === item.id)
                              if (cartItem && cartItem.quantity > 1) {
                                // Decrease quantity logic would go here
                              } else {
                                // Remove from cart logic would go here
                              }
                            }}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-8 text-center font-bold text-deep-charcoal dark:text-soft-white-dark">
                            {getQuantity(item.id)}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => addToCart(item)}
                            className="p-2 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(item)}
                          className="px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                        >
                          Add to Cart
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
      <CartWrapper />
      <CartButton />
    </PageTransition>
  )
}
