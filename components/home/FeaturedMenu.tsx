'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { menuItems } from '@/lib/data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Plus, Star, Sparkles } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function FeaturedMenu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { addToCart } = useCart()

  const featuredItems = menuItems.slice(0, 6)

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-br from-light-beige via-white to-light-beige dark:from-dark-brown dark:via-rich-black dark:to-dark-brown relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-golden/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-golden/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Premium Selection</span>
          </motion.div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3 mb-4">
            Featured Items
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Discover our most popular items, crafted with love and the finest ingredients.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl cursor-pointer border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-rich-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden min-h-[300px] sm:min-h-[400px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Premium badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full p-2 shadow-xl"
                >
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-golden fill-golden" />
                </motion.div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-accent to-golden text-white text-[10px] sm:text-xs font-semibold rounded-full mb-3 capitalize shadow-lg"
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {item.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-base sm:text-xl drop-shadow-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(item)}
                      className="p-2 sm:p-2.5 bg-gradient-to-r from-accent to-golden rounded-full text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-16"
        >
          <Link href="/menu">
            <button className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-accent to-golden text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 text-sm sm:text-base hover:-translate-y-1 hover:scale-105">
              View Full Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
