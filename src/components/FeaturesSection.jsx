import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, ChevronDown, ChevronUp } from 'lucide-react'

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeTab, setActiveTab] = useState('receptionist')
  const [expandedDetails, setExpandedDetails] = useState(['general'])

  const tabs = [
    { id: 'receptionist', label: 'Receptionist' },
    { id: 'scheduler', label: 'Scheduler' },
    { id: 'sales', label: 'Sales AI' },
    { id: 'console', label: 'Title Voice Console' },
    { id: 'outbound', label: 'Outbound' }
  ]

  const features = {
    receptionist: {
      title: 'Title Company Virtual Assistant',
      headline: 'Never miss a call again',
      details: [
        {
          id: 'general',
          title: '24/7 Call Handling',
          description: 'Title Voice AI virtual assistant answers calls 24/7, handles customer inquiries, and provides information about closing processes. Our title company virtual assistant integrates with your existing title software to provide seamless service.',
          expanded: true
        },
        {
          id: 'transfer',
          title: 'Smart Call Routing',
          description: 'Intelligent call routing to the right department with context about customer needs and closing status.',
          expanded: false
        },
        {
          id: 'routing',
          title: 'Customer Profile Management',
          description: 'Maintains detailed customer profiles and CRM integration for personalized service and better customer relationships.',
          expanded: false
        }
      ],
      chatDemo: [
        { user: "I need to check on my closing status", ai: "I can help you with that. Let me look up your closing information. What's your property address?" },
        { user: "123 Main Street, Nashville", ai: "Perfect! I can see your closing is scheduled for next Wednesday at 2 PM. You'll receive a confirmation email shortly. Is there anything else I can help you with?" }
      ]
    },
    scheduler: {
      title: 'Virtual Closing Assistant',
      headline: 'Schedule closings automatically',
      details: [
        {
          id: 'realtime',
          title: 'Real-time Closing Scheduling',
          description: 'Automated scheduling for title closings with RON notary support and virtual closing capabilities. Integrates with title production software for seamless workflow.',
          expanded: true
        },
        {
          id: 'mapping',
          title: 'Title Software Integration',
          description: 'Seamless integration with ResWare, RamQuest, and other title company software for automated data sync and workflow management.',
          expanded: false
        },
        {
          id: 'confirmations',
          title: 'RON Notary Support',
          description: 'Remote Online Notarization (RON) support for virtual closings with proper notary authentication and compliance.',
          expanded: false
        }
      ],
      chatDemo: [
        { user: "I need to schedule a closing for next week", ai: "I'd be happy to help schedule your closing. What date works best for you?" },
        { user: "Wednesday afternoon would be perfect", ai: "Great! I have Wednesday at 2 PM available. I'll send you a confirmation with all the details." },
        { user: "Perfect, thank you!", ai: "You're all set! You'll receive an email confirmation shortly." }
      ]
    }
  }

  const currentFeature = features[activeTab] || features.receptionist

  const toggleDetail = (detailId) => {
    setExpandedDetails(prev => 
      prev.includes(detailId) 
        ? prev.filter(id => id !== detailId)
        : [...prev, detailId]
    )
  }

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
    <section id="features" ref={ref} className="py-20 bg-white">
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
            How We Build Intelligence - The Title Voice Suite
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600"
          >
            Virtual closing assistant for title companies that integrates with ResWare, RamQuest, and all major title software.
          </motion.p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-900 rounded-lg p-1 flex gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Feature Content */}
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">
                {currentFeature.title}
              </h3>
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                {currentFeature.headline}
              </h4>
            </div>

            <div className="space-y-4">
              {currentFeature.details.map((detail) => (
                <motion.div
                  key={detail.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => toggleDetail(detail.id)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">
                      {detail.title}
                    </span>
                    {expandedDetails.includes(detail.id) ? (
                      <ChevronUp size={20} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedDetails.includes(detail.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-3"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {detail.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <motion.button
                className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play size={20} />
              </motion.button>
              <div>
                <div className="font-semibold text-gray-900">Listen to Title Voice</div>
                <div className="text-sm text-gray-500">General Questions</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Chat Demo */}
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-6">
            <div className="space-y-4">
              {currentFeature.chatDemo.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                    index % 2 === 0 
                      ? 'bg-navy-600 text-white rounded-br-md' 
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                  }`}>
                    <p className="text-sm">{message.user || message.ai}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection

