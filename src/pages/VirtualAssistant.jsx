import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Clock, Users, Zap, Shield, Brain } from 'lucide-react'

const VirtualAssistant = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Phone,
      title: "24/7 Call Handling",
      description: "Never miss a call again. Our AI virtual assistant answers every call with professional service, even after hours and on weekends."
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Immediate answers to customer inquiries about closing status, office hours, and property information."
    },
    {
      icon: Users,
      title: "Customer Profile Management",
      description: "Maintains detailed customer profiles with CRM integration for personalized service and better relationships."
    },
    {
      icon: Zap,
      title: "Smart Call Routing",
      description: "Intelligent routing to the right department with context about customer needs and closing status."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with compliance for title industry regulations and data protection standards."
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing that understands context and provides accurate, helpful responses."
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
    hidden: { y: 50, opacity: 0 },
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#1B262C] via-[#0F4C75] to-[#3282B8] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              AI Virtual Assistant for{' '}
              <span className="text-[#BBE1FA]">Title Companies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Never miss a call again. Our title company virtual assistant handles calls 24/7, 
              schedules closings, and manages customer inquiries with AI-powered intelligence.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="#demo"
                className="bg-white text-[#1B262C] px-8 py-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.a>
              <motion.a
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-[#1B262C] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Title Companies Choose Our{' '}
              <span className="text-[#0F4C75]">Virtual Assistant</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our AI virtual assistant is specifically designed for title companies, 
              integrating seamlessly with your existing workflow and software.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 bg-[#0F4C75] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Seamless Integration with Your{' '}
              <span className="text-[#BBE1FA]">Title Software</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our virtual assistant integrates with ResWare, RamQuest, and all major 
              title company software for a unified workflow experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">ResWare Integration</h3>
                <p className="text-gray-300">Direct sync with ResWare for real-time closing data and customer information.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">RamQuest Support</h3>
                <p className="text-gray-300">Full compatibility with RamQuest title production software and workflows.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Custom APIs</h3>
                <p className="text-gray-300">Flexible API integration for any title company software or CRM system.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default VirtualAssistant
