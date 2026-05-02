'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Coffee } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { fadeInUp, slideIn } from '@/lib/animations'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { href: string; label: string }[]
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { x: '100%', opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } }
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-white to-light-beige dark:from-rich-black dark:to-dark-brown z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Coffee className="w-6 h-6 text-accent" />
                <h2 className="text-xl font-serif font-semibold text-deep-charcoal dark:text-soft-white-dark">
                  Café Espresso
                </h2>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-deep-charcoal dark:text-soft-white-dark" />
              </motion.button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'block text-base font-medium py-3 px-4 rounded-xl transition-all duration-300',
                        pathname === link.href
                          ? 'bg-gradient-to-r from-accent to-[#c49464] text-white shadow-md'
                          : 'text-deep-charcoal dark:text-soft-white-dark hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <Link href="/menu" onClick={onClose}>
                <button className="w-full py-3 bg-gradient-to-r from-accent to-[#c49464] text-white rounded-xl font-semibold hover:from-[#c49464] hover:to-accent transition-all duration-300 shadow-md hover:shadow-lg">
                  Order Now
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
