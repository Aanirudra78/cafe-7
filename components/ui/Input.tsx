'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> {
  label?: string
  error?: string
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2">
          {label}
        </label>
      )}
      <motion.input
        whileFocus={{ scale: 1.01 }}
        className={cn(
          'w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700',
          'bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark',
          'focus:border-accent focus:outline-none transition-all duration-300',
          'placeholder:text-gray-400',
          error && 'border-red-500',
          className
        )}
        {...props as any}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
