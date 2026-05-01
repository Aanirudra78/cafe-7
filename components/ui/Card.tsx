'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={cn(
        'bg-white dark:bg-dark-brown rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden border border-gray-100 dark:border-gray-800',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
