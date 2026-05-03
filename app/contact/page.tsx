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
import { fadeInUp } from '@/lib/animations'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
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
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80"
            alt="Contact us"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream/90"
            >
              We&apos;d love to hear from you
            </motion.p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-dark-brown">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-6">
                  Send us a Message
                </h2>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                  >
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                    <Input
                      label="Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-white-dark mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-rich-black text-deep-charcoal dark:text-soft-white-dark focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-white to-light-beige dark:from-rich-black dark:to-dark-brown rounded-2xl p-8 shadow-card border border-gray-100 dark:border-gray-800">
                  <h3 className="font-serif text-2xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-deep-charcoal dark:text-soft-white-dark">Address</p>
                        <p className="text-gray-600 dark:text-gray-400">123 Coffee Street, Cafe City, CC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-deep-charcoal dark:text-soft-white-dark">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">+91 7828088755</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-deep-charcoal dark:text-soft-white-dark">Email</p>
                        <p className="text-gray-600 dark:text-gray-400">hello@cafeespresso.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-deep-charcoal dark:text-soft-white-dark">Hours</p>
                        <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 7am - 9pm</p>
                        <p className="text-gray-600 dark:text-gray-400">Sat: 8am - 10pm</p>
                        <p className="text-gray-600 dark:text-gray-400">Sun: 8am - 8pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919364!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959481000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      <CartButton />
      <CartWrapper />
      </main>
      <Footer />
    </PageTransition>
  )
}
