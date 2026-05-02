'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Loader2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { whatsappNumber } from '@/lib/data'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { cart, cartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: 'takeaway' as 'takeaway' | 'dine-in',
    tableNumber: '',
    specialRequests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the WhatsApp message
    let message = `*NEW ORDER - CAFÉ ESPRESSO*%0A%0A`
    message += `*Customer Details*%0A`
    message += `Name: ${formData.name}%0A`
    message += `Phone: ${formData.phone}%0A`
    message += `Order Type: ${formData.orderType.toUpperCase()}%0A`
    if (formData.orderType === 'dine-in' && formData.tableNumber) {
      message += `Table Number: ${formData.tableNumber}%0A`
    }
    if (formData.specialRequests) {
      message += `Special Requests: ${formData.specialRequests}%0A`
    }
    message += `%0A*Order Items*%0A`
    message += `-------------------%0A`
    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}%0A`
    })
    message += `-------------------%0A`
    message += `*Total: ${formatPrice(cartTotal)}*`

    // Open WhatsApp with the formatted message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')

    // Show success state
    setIsSuccess(true)
    clearCart()
    setIsSubmitting(false)

    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setFormData({
        name: '',
        phone: '',
        orderType: 'takeaway',
        tableNumber: '',
        specialRequests: '',
      })
    }, 2000)
  }

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-white to-light-beige dark:from-rich-black dark:to-dark-brown rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-gray-800">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <h2 className="text-2xl font-serif font-semibold text-deep-charcoal dark:text-soft-white-dark">
                  Complete Your Order
                </h2>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-deep-charcoal dark:text-soft-white-dark" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-deep-charcoal dark:text-soft-white-dark mb-2">
                      Order Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your order has been sent via WhatsApp. We&apos;ll confirm it shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <Input
                      label="Full Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />

                    {/* Phone */}
                    <Input
                      label="Phone Number"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />

                    {/* Order Type */}
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-3">
                        Order Type
                      </label>
                      <div className="flex space-x-4">
                        {['takeaway', 'dine-in'].map((type) => (
                          <motion.label
                            key={type}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name="orderType"
                              value={type}
                              checked={formData.orderType === type}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  orderType: e.target.value as 'takeaway' | 'dine-in',
                                })
                              }
                              className="sr-only"
                            />
                            <div
                              className={`p-4 rounded-lg border-2 text-center transition-all ${
                                formData.orderType === type
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-gray-200 dark:border-gray-700 text-deep-charcoal dark:text-soft-white-dark'
                              }`}
                            >
                              <span className="font-semibold capitalize">{type}</span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    {/* Table Number (conditional) */}
                    {formData.orderType === 'dine-in' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Input
                          label="Table Number"
                          type="text"
                          value={formData.tableNumber}
                          onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                          placeholder="Enter your table number"
                        />
                      </motion.div>
                    )}

                    {/* Special Requests */}
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Any special requests or dietary requirements?"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                      <h3 className="font-semibold text-deep-charcoal dark:text-soft-white-dark mb-3">
                        Order Summary
                      </h3>
                      <div className="space-y-2 text-sm">
                        {cart.map((item) => (
                          <div key={item.id} className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.quantity}x {item.name}
                            </span>
                            <span className="font-medium text-deep-charcoal dark:text-soft-white-dark">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                          <div className="flex justify-between font-bold text-lg">
                            <span className="text-deep-charcoal dark:text-soft-white-dark">Total</span>
                            <span className="text-accent">{formatPrice(cartTotal)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Order via WhatsApp'
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
