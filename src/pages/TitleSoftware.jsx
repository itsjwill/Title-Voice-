import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Database, Shield, Zap, Users, Clock, CheckCircle } from 'lucide-react'

const TitleSoftware = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const softwareFeatures = [
    {
      icon: Database,
      title: "ResWare Integration",
      description: "Seamless integration with ResWare title production software for real-time data sync and workflow automation.",
      features: ["Real-time data sync", "Customer profile access", "Closing status updates", "Order management"]
    },
    {
      icon: Zap,
      title: "RamQuest Support",
      description: "Full compatibility with RamQuest title software including order processing and document management.",
      features: ["Order processing", "Document handling", "Status tracking", "Workflow automation"]
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Connect with any CRM system to maintain customer profiles and interaction history.",
      features: ["Customer profiles", "Interaction history", "Lead management", "Follow-up automation"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-level security with full compliance for title industry regulations and data protection.",
      features: ["Data encryption", "Compliance standards", "Secure APIs", "Audit trails"]
    }
  ]

  const benefits = [
    {
      title: "Automated Workflows",
      description: "Eliminate manual data entry with automated workflows that sync across all your title software.",
      icon: "⚡"
    },
    {
      title: "Real-time Updates",
      description: "Keep all systems synchronized with real-time updates across ResWare, RamQuest, and CRM systems.",
      icon: "🔄"
    },
    {
      title: "Reduced Errors",
      description: "Minimize human error with automated data validation and cross-system verification.",
      icon: "✅"
    },
    {
      title: "Cost Savings",
      description: "Reduce operational costs by automating routine tasks and improving efficiency.",
      icon: "💰"
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
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#1B262C] via-[#0F4C75] to-[#3282B8] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3282B8]/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Title Company Software{' '}
              <span className="text-[#BBE1FA]">Integration</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly integrate Title Voice with ResWare, RamQuest, and all major 
              title production software for unified workflows and automated processes.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button
                className="bg-white text-[#1B262C] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Software Integration
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B262C] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Custom Integration
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Software Features */}
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
              Integrates with All Major{' '}
              <span className="text-[#0F4C75]">Title Software</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our AI virtual assistant works seamlessly with your existing title company 
              software stack, creating a unified workflow experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-12"
          >
            {softwareFeatures.map((feature, index) => (
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
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F4C75] rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Title Companies Choose{' '}
              <span className="text-[#0F4C75]">Our Integration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of seamless software integration with 
              automated workflows and real-time data synchronization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-[#0F4C75] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3282B8] transition-colors duration-300">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Integrate Your{' '}
              <span className="text-[#BBE1FA]">Title Software?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get started with Title Voice integration for your title company software. 
              Our team will handle the technical setup while you focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-[#1B262C] px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
              >
                Schedule Integration Demo
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B262C] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Integration Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default TitleSoftware
