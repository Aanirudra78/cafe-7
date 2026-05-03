'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartButton from '@/components/ordering/CartButton'
import CartWrapper from '@/components/ordering/CartWrapper'
import PageTransition from '@/components/animations/PageTransition'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Calendar, Clock, Users } from 'lucide-react'

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const timeSlots = []
  for (let hour = 9; hour <= 21; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const time = `${hour > 12 ? hour - 12 : hour}:${min === 0 ? '00' : min} ${hour >= 12 ? 'PM' : 'AM'}`
      timeSlots.push(time)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      partySize: '',
      specialRequests: '',
    })
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-light-beige dark:bg-rich-black">
        {/* Hero */}
        <div className="relative h-[400px] bg-gradient-coffee flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-espresso/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80"
            alt="Reservations"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4"
            >
              Reservations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream/90"
            >
              Reserve your table for a memorable experience
            </motion.p>
          </div>
        </div>

        {/* Reservation Form */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-dark-brown">
          <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  We&apos;ve received your reservation request. You&apos;ll receive a confirmation email shortly.
                </p>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={fadeInUp}
                  className="text-center mb-12"
                >
                  <h2 className="font-serif text-4xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-4">
                    Make a Reservation
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Fill out the form below and we&apos;ll confirm your reservation
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Full Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Input
                      label="Phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-accent" />
                        Time
                      </label>
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-accent" />
                      Party Size
                    </label>
                    <select
                      required
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select party size</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Any special requests or dietary requirements?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-soft-white dark:bg-rich-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-6"
            >
              Reservation Policy
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            >
              <div className="bg-gradient-to-br from-white to-light-beige dark:from-dark-brown dark:to-rich-black p-6 rounded-xl shadow-card border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-deep-charcoal dark:text-soft-white-dark mb-2">Cancellation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Please cancel at least 2 hours before your reservation time.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-light-beige dark:from-dark-brown dark:to-rich-black p-6 rounded-xl shadow-card border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-deep-charcoal dark:text-soft-white-dark mb-2">Late Arrival</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We hold reservations for 15 minutes past the scheduled time.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-light-beige dark:from-dark-brown dark:to-rich-black p-6 rounded-xl shadow-card border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-deep-charcoal dark:text-soft-white-dark mb-2">Large Parties</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">For parties of 8 or more, please call us directly.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <CartButton />
      <CartWrapper />
    </PageTransition>
  )
}
