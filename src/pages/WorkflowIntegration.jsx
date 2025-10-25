import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle, Clock, Users, Database, Shield, Zap } from 'lucide-react'

const WorkflowIntegration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeStep, setActiveStep] = useState(0)

  const workflowSteps = [
    {
      id: 'call',
      title: 'Incoming Call',
      description: 'Customer calls your title company',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      description: 'Title Voice AI answers and identifies needs',
      icon: Zap,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'data',
      title: 'Data Sync',
      description: 'Pulls customer data from your title software',
      icon: Database,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'action',
      title: 'Smart Action',
      description: 'Schedules closing or routes to specialist',
      icon: CheckCircle,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'confirm',
      title: 'Confirmation',
      description: 'Sends confirmation and updates systems',
      icon: Clock,
      color: 'from-red-500 to-red-600'
    }
  ]

  const integrations = [
    {
      name: 'ResWare',
      description: 'Full integration with ResWare title production software',
      features: ['Real-time data sync', 'Customer profile access', 'Closing status updates'],
      logo: '🏢'
    },
    {
      name: 'RamQuest',
      description: 'Seamless RamQuest integration for title workflows',
      features: ['Order management', 'Status tracking', 'Document handling'],
      logo: '📋'
    },
    {
      name: 'CRM Systems',
      description: 'Connect with any CRM or customer management system',
      features: ['Customer profiles', 'Interaction history', 'Lead management'],
      logo: '👥'
    },
    {
      name: 'Email Systems',
      description: 'Automated email confirmations and notifications',
      features: ['Closing confirmations', 'Status updates', 'Document delivery'],
      logo: '📧'
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Workflow Integration for{' '}
              <span className="text-[#BBE1FA]">Title Companies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly integrate Title Voice with your existing title company software. 
              ResWare, RamQuest, and custom systems - we connect with everything.
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
                View Integration Demo
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1B262C] transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Workflow */}
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
              How Our{' '}
              <span className="text-[#0F4C75]">Workflow Integration</span>{' '}
              Works
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See how Title Voice integrates with your title company software 
              to create a seamless, automated workflow.
            </motion.p>
          </motion.div>

          {/* Interactive Workflow Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Steps List */}
              <div className="w-full lg:w-1/3 space-y-4">
                {workflowSteps.map((step, index) => (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-[#0F4C75] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm opacity-80">{step.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Visual Workflow */}
              <div className="w-full lg:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
                  >
                    <div className="text-center mb-8">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${workflowSteps[activeStep].color} flex items-center justify-center mb-4`}>
                        <workflowSteps[activeStep].icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {workflowSteps[activeStep].title}
                      </h3>
                      <p className="text-gray-600">
                        {workflowSteps[activeStep].description}
                      </p>
                    </div>

                    {/* Step-specific content */}
                    {activeStep === 0 && (
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Customer Call Example</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <p className="text-sm">"Hi, I need to check on my closing status for 123 Main Street."</p>
                          </div>
                          <div className="bg-green-100 p-3 rounded-lg">
                            <p className="text-sm">"I can help you with that. Let me look up your information..."</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">AI Processing</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Natural language processing</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Intent recognition</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Context understanding</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Data Integration</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Database className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs">ResWare</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Database className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs">RamQuest</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Smart Actions</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Schedule closing appointment</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Update closing status</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Route to specialist</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Confirmation & Updates</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-sm">✅ Email confirmation sent</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm">📱 SMS notification delivered</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="text-sm">🔄 CRM system updated</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Integrates with Your{' '}
              <span className="text-[#BBE1FA]">Title Software</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Connect Title Voice with your existing title company software 
              for a unified, automated workflow.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{integration.logo}</div>
                  <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
                  <ul className="space-y-1">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default WorkflowIntegration
