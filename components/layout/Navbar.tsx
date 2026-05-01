'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Coffee } from 'lucide-react'
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
          scrolled
            ? 'bg-white/95 dark:bg-rich-black/95 shadow-lg h-16'
            : 'bg-transparent h-20'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Coffee
              className={cn(
                'w-8 h-8 transition-colors duration-300',
                scrolled
                  ? 'text-espresso dark:text-cream'
                  : 'text-white'
              )}
            />
            <span
              className={cn(
                'font-serif text-xl font-semibold transition-colors duration-300',
                scrolled
                  ? 'text-espresso dark:text-cream'
                  : 'text-white'
              )}
            >
              Café Espresso
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    'relative font-medium transition-colors duration-300 py-2',
                    isActive(link.href)
                      ? 'text-accent'
                      : scrolled
                      ? 'text-deep-charcoal dark:text-soft-white-dark hover:text-accent'
                      : 'text-white hover:text-accent'
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </span>
              </Link>
            ))}
            <DarkModeToggle />
            <Link href="/menu">
              <button
                className={cn(
                  'px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg',
                  scrolled
                    ? 'bg-gradient-to-r from-accent to-[#c49464] text-white hover:from-[#c49464] hover:to-accent'
                    : 'bg-white text-espresso hover:bg-cream'
                )}
              >
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'p-2 rounded-lg transition-colors duration-300',
                scrolled
                  ? 'text-espresso dark:text-cream'
                  : 'text-white'
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
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
