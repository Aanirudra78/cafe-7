'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Coffee, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/reservations', label: 'Reservations' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl',
          scrolled
            ? 'bg-white/90 dark:bg-rich-black/90 shadow-2xl shadow-black/10 h-16 border-b border-gray-100 dark:border-gray-800'
            : 'bg-transparent h-20'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Coffee
                className={cn(
                  'w-8 h-8 transition-colors duration-300',
                  scrolled
                    ? 'text-espresso dark:text-cream'
                    : 'text-white drop-shadow-lg'
                )}
              />
            </motion.div>
            <span
              className={cn(
                'font-serif text-xl font-semibold transition-colors duration-300',
                scrolled
                  ? 'text-espresso dark:text-cream'
                  : 'text-white drop-shadow-lg'
              )}
            >
              Café Espresso
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'relative font-medium transition-colors duration-300 py-2 px-4 rounded-xl',
                    isActive(link.href)
                      ? 'text-accent bg-accent/10'
                      : scrolled
                      ? 'text-deep-charcoal dark:text-soft-white-dark hover:text-accent hover:bg-accent/5'
                      : 'text-white hover:text-accent hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-golden rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            <DarkModeToggle />
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(194, 148, 100, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-xl',
                  scrolled
                    ? 'bg-gradient-to-r from-accent to-golden text-white hover:shadow-2xl hover:shadow-accent/30'
                    : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:border-white/50'
                )}
              >
                Order Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'p-2 rounded-xl transition-colors duration-300 backdrop-blur-md',
                scrolled
                  ? 'text-espresso dark:text-cream bg-gray-100 dark:bg-gray-800'
                  : 'text-white bg-white/10 border border-white/20'
              )}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  )
}
