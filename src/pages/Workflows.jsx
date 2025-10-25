import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Check,
  BarChart3,
  Bell,
  Mic,
  Target,
  Volume2,
  Headphones,
  Database,
  Settings,
  Bot,
  Brain,
  Cpu,
  Sparkles,
  ArrowDown,
  ArrowUp,
  RotateCcw
} from 'lucide-react'

const Workflows = () => {
  const [activeStep, setActiveStep] = useState(0)

  const workflowSteps = [
    {
      title: 'Call Received',
      description: 'AI answers the phone instantly, 24/7',
      icon: Phone,
      color: 'from-[#0080FF] to-[#4F1AD6]',
      details: [
        'Professional greeting',
        'Caller identification',
        'Intent recognition',
        'Context gathering'
      ]
    },
    {
      title: 'AI Processing',
      description: 'Natural language understanding and response generation',
      icon: Brain,
      color: 'from-[#4F1AD6] to-[#0080FF]',
      details: [
        'Intent analysis',
        'CRM lookup',
        'Response generation',
        'Context preservation'
      ]
    },
    {
      title: 'Data Integration',
      description: 'Seamless connection with your existing systems',
      icon: Database,
      color: 'from-[#0080FF] to-[#4F1AD6]',
      details: [
        'ResWare integration',
        'RamQuest sync',
        'Custom CRM support',
        'Real-time updates'
      ]
    },
    {
      title: 'Action Execution',
      description: 'Automated task completion and follow-up',
      icon: Zap,
      color: 'from-[#4F1AD6] to-[#0080FF]',
      details: [
        'Appointment scheduling',
        'Status updates',
        'Email notifications',
        'Task assignments'
      ]
    },
    {
      title: 'Team Handoff',
      description: 'Seamless transfer to human agents when needed',
      icon: Users,
      color: 'from-[#0080FF] to-[#4F1AD6]',
      details: [
        'Context transfer',
        'Priority routing',
        'Escalation management',
        'Follow-up scheduling'
      ]
    }
  ]

  const workflowTypes = [
    {
      title: 'Inquiry Handling',
      description: 'Automatically handle common questions about deal status, closing dates, and requirements.',
      icon: MessageSquare,
      features: ['Status inquiries', 'Closing date questions', 'Document requests', 'Process explanations']
    },
    {
      title: 'Appointment Scheduling',
      description: 'Intelligent calendar management that coordinates with all parties and handles conflicts.',
      icon: Calendar,
      features: ['Multi-party coordination', 'Conflict resolution', 'Reminder system', 'Rescheduling automation']
    },
    {
      title: 'Status Updates',
      description: 'Proactive communication to keep clients informed throughout the closing process.',
      icon: Bell,
      features: ['Progress notifications', 'Milestone updates', 'Delay alerts', 'Completion confirmations']
    },
    {
      title: 'Document Management',
      description: 'Streamline document collection and verification with AI-powered assistance.',
      icon: Shield,
      features: ['Document requests', 'Verification assistance', 'Compliance checking', 'Digital signatures']
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-white font-['Urbanist']">
                Intelligent Workflows for Title Companies
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white font-['Urbanist']">
                Streamline operations with AI-powered automation.
              </h2>
            </div>
            <motion.p 
              className="text-xl text-white mb-12 max-w-4xl mx-auto font-['Urbanist']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See how Title Voice transforms your title company operations with intelligent workflows that handle every aspect of the closing process.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 128, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Try Interactive Demo
              <Play className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Workflow Demo */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Experience the complete workflow from call to completion
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Workflow Steps */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`flex flex-col items-center cursor-pointer ${
                    activeStep === index ? 'scale-110' : 'scale-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(0, 128, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Urbanist']">{step.title}</h3>
                  <p className="text-sm text-white text-center font-['Urbanist']">{step.description}</p>
                  
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block w-8 h-0.5 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Active Step Details */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#080808] rounded-2xl p-8 border border-white/10"
              style={{
                boxSizing: 'border-box',
                width: '100%',
                flex: 1,
                height: 'min-content',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#080808',
                overflow: 'hidden',
                alignContent: 'center',
                flexWrap: 'nowrap',
                gap: '0px',
                position: 'relative',
                borderRadius: '12px'
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-['Urbanist']">
                    {workflowSteps[activeStep].title}
                  </h3>
                  <p className="text-lg text-white mb-6 font-['Urbanist']">
                    {workflowSteps[activeStep].description}
                  </p>
                  <div className="space-y-3">
                    {workflowSteps[activeStep].details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0080FF] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white font-['Urbanist']">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
                  <div className="text-center">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${workflowSteps[activeStep].color} flex items-center justify-center mx-auto mb-4`}>
                      {React.createElement(workflowSteps[activeStep].icon, { className: "w-12 h-12 text-white" })}
                    </div>
                    <p className="text-white font-['Urbanist']">Interactive Demo</p>
                    <p className="text-sm text-white font-['Urbanist']">Click to experience this step</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Types */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Workflow Types
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Specialized workflows for every aspect of title operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-[#0080FF]/50 transition-all duration-300"
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  flex: 1,
                  height: 'min-content',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '20px',
                  backgroundColor: '#080808',
                  overflow: 'hidden',
                  alignContent: 'center',
                  flexWrap: 'nowrap',
                  gap: '0px',
                  position: 'relative',
                  borderRadius: '12px'
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)"
                }}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-['Urbanist']">{type.title}</h3>
                <p className="text-white mb-6 leading-relaxed font-['Urbanist']">{type.description}</p>
                
                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0080FF] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white text-sm font-['Urbanist']">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Ready to Automate Your Workflows?
              </span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto font-['Urbanist']">
              See how Title Voice can transform your title company operations with intelligent automation.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 128, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Workflows