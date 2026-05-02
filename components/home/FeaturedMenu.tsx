'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { menuItems } from '@/lib/data'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function FeaturedMenu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { addToCart } = useCart()

  const featuredItems = menuItems.slice(0, 6)

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 lg:px-24 bg-light-beige dark:bg-dark-brown bg-pattern-dots">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Our Menu
          </span>
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
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-gray-100 dark:border-gray-800"
            >
              <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 dark:bg-black/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="inline-block px-2 sm:px-3 py-1 bg-accent text-white text-[10px] sm:text-xs font-semibold rounded-full mb-2 capitalize"
                  >
                    {item.category}
                  </motion.span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-base sm:text-xl">
                      ${item.price.toFixed(2)}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(item)}
                      className="p-1.5 sm:p-2 bg-white rounded-full text-espresso hover:bg-accent hover:text-white transition-colors"
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
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 text-sm sm:text-base">
              View Full Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
