'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/animations/PageTransition'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Heart, Users, Coffee as CoffeeIcon } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: CoffeeIcon,
      title: 'Our Coffee',
      description: 'We source the finest beans from sustainable farms around the world, roasted in small batches to perfection.',
    },
    {
      icon: Heart,
      title: 'Our People',
      description: 'Our passionate baristas are trained in the art of coffee-making, ensuring every cup is a masterpiece.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'We believe in creating a warm, welcoming space where people can connect, work, and relax.',
    },
  ]

  const team = [
    { name: 'Alex Martinez', role: 'Head Barista', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Sarah Johnson', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    { name: 'Michael Chen', role: 'Coffee Roaster', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Emily Davis', role: 'Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen bg-light-beige dark:bg-rich-black">
        {/* Hero */}
        <div className="relative h-[500px] bg-gradient-coffee flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-espresso/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
            alt="About us"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cream/90 max-w-2xl mx-auto"
            >
              From a small dream to a beloved community gathering place
            </motion.p>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-dark-brown">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
                  alt="Our story"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                  Since 2010
                </span>
                <h2 className="font-serif text-4xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3 mb-6">
                  A Passion for Excellence
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  Café Espresso was born from a simple dream: to create a space where exceptional coffee meets genuine hospitality. What started as a small corner café has grown into a beloved destination for coffee enthusiasts and community members alike.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Our journey has been guided by an unwavering commitment to quality. We partner directly with farmers who share our values, roast our beans in-house, and train our baristas to be true artisans of their craft.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-soft-white dark:bg-rich-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                What We Stand For
              </span>
              <h2 className="font-serif text-4xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3">
                Our Values
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-white to-light-beige dark:from-dark-brown dark:to-rich-black p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-deep-charcoal dark:text-soft-white-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-dark-brown">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                The Team
              </span>
              <h2 className="font-serif text-4xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3">
                Meet Our Experts
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-accent">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  )
}
