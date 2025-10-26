import React from 'react'
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
  Sparkles
} from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      title: 'AI Voice Receptionist',
      description: 'Never miss a call with our 24/7 AI receptionist that handles inquiries, schedules appointments, and provides real-time updates.',
      icon: Phone,
      features: ['24/7 Availability', 'Natural Conversations', 'Call Routing', 'Appointment Scheduling']
    },
    {
      title: 'Deal Status Automation',
      description: 'Automatically track and update deal statuses, send notifications to clients, and maintain real-time visibility into all transactions.',
      icon: BarChart3,
      features: ['Real-time Updates', 'Client Notifications', 'Status Tracking', 'Progress Monitoring']
    },
    {
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that coordinates with all parties, sends reminders, and handles rescheduling automatically.',
      icon: Calendar,
      features: ['Auto-scheduling', 'Reminder System', 'Conflict Resolution', 'Multi-party Coordination']
    },
    {
      title: 'Warm Transfer System',
      description: 'Seamlessly transfer complex inquiries to the right team member with full context and conversation history.',
      icon: Users,
      features: ['Context Preservation', 'Smart Routing', 'Team Handoffs', 'Escalation Management']
    },
    {
      title: 'CRM Integration',
      description: 'Connect with all major title production software including ResWare, RamQuest, and custom CRM systems.',
      icon: Database,
      features: ['Multi-platform Support', 'Data Synchronization', 'Custom Workflows', 'API Access']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting and analytics to optimize your operations and improve client satisfaction.',
      icon: TrendingUp,
      features: ['Performance Metrics', 'Client Insights', 'Operational Reports', 'Trend Analysis']
    }
  ]

  const benefits = [
    {
      title: 'Reduce Call Handling Time',
      value: '25%',
      description: 'Automate routine inquiries and focus on complex transactions'
    },
    {
      title: 'Increase Client Satisfaction',
      value: '3x',
      description: 'Never miss a call and provide instant responses'
    },
    {
      title: 'Lower Operational Costs',
      value: '70%',
      description: 'Reduce staffing needs for basic inquiries'
    },
    {
      title: 'Improve Efficiency',
      value: '50%',
      description: 'Streamline workflows and eliminate manual processes'
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
                AI Solutions for Title Companies
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white font-['Urbanist']">
                Transform your title operations with intelligent automation.
              </h2>
            </div>
            <motion.p 
              className="text-xl text-white mb-12 max-w-4xl mx-auto font-['Urbanist']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover how Title Voice can revolutionize your title company with AI-powered solutions designed specifically for the real estate industry.
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
              Get Started
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
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
                Our Solutions
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Comprehensive AI solutions designed specifically for title companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
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
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 font-['Urbanist']">{solution.title}</h3>
                <p className="text-white mb-6 leading-relaxed font-['Urbanist']">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
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

      {/* Benefits Section */}
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
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              See the measurable impact Title Voice has on title company operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                className="text-center p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-[#0080FF]/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)"
                }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent mb-4 font-['Urbanist']">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Urbanist']">{benefit.title}</h3>
                <p className="text-white font-['Urbanist']">{benefit.description}</p>
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
                Ready to Transform Your Title Operations?
              </span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto font-['Urbanist']">
              Join leading title companies who have already revolutionized their operations with Title Voice.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
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

export default Solutions