import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'

const DemoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const demoSteps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "See Title Voice in Action",
      description: "Watch how Title Voice handles real calls and schedules appointments automatically."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Learn About Real Results",
      description: "Discover how other title companies have improved their operations with Title Voice."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Get Your Questions Answered",
      description: "Our team will answer all your questions about implementation and integration."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="demo" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Schedule Your Demo Today
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            See firsthand how Title Voice can transform your title company operations
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Steps */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {demoSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(30, 58, 138, 0.1)"
                }}
              >
                <div className="w-12 h-12 bg-navy-100 text-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="bg-navy-50 border border-navy-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-navy-600" />
                <span className="font-semibold text-navy-800">
                  Integration Guarantee
                </span>
              </div>
              <p className="text-navy-700 text-sm">
                Integrates with all major title production software. Handles transfers and escalations seamlessly.
              </p>
            </motion.div>
          </motion.div>

          {/* Demo Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                  placeholder="ABC Title Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full gradient-bg text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(30, 58, 138, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
              </motion.button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection

