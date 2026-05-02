'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg'
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent to-[#c49464] text-white hover:from-[#c49464] hover:to-accent focus:ring-accent shadow-glow',
    secondary: 'bg-gradient-to-r from-espresso to-[#5D4037] text-cream hover:from-[#5D4037] hover:to-espresso focus:ring-espresso',
    outline: 'border-2 border-accent text-accent hover:bg-gradient-to-r hover:from-accent hover:to-[#c49464] hover:text-white hover:border-transparent focus:ring-accent',
    ghost: 'text-accent hover:bg-accent/10 focus:ring-accent shadow-none',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props as any}
    >
      {children}
    </motion.button>
  )
}
