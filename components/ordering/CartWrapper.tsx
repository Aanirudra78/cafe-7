'use client'

import dynamic from 'next/dynamic'
import { useCart } from '@/context/CartContext'

const Cart = dynamic(() => import('./Cart'), { ssr: false })

export default function CartWrapper() {
  const { isCartOpen, setIsCartOpen } = useCart()
  return <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
}
