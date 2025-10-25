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
  Crown,
  Award,
  Rocket
} from 'lucide-react'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/ Month',
      description: 'Perfect for small title companies getting started with AI automation.',
      badge: 'Most Pick',
      icon: Rocket,
      projects: 'Unlimited Calls',
      revisions: 'Single Location',
      features: [
        '24/7 AI Title Receptionist',
        'Deal status inquiries',
        'Appointment scheduling',
        'Basic CRM integration',
        'Call transcripts & summaries',
        'Email support',
        'Cancel anytime',
        '$0 setup fee'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/ Month',
      description: 'Ideal for growing title companies with multiple locations.',
      badge: 'Advanced',
      icon: Bell,
      projects: 'Unlimited Calls',
      revisions: 'Multi-location',
      features: [
        'Everything in Basic',
        'Multi-location team management',
        'Escalation to live agent (optional)',
        'Multilingual intake support',
        'Custom script & workflows',
        'Advanced CRM integrations',
        'Priority support (email + phone)',
        'Volume discounts available'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/ Month',
      description: 'Advanced solutions for large title companies and enterprises.',
      badge: 'Recommended',
      icon: Crown,
      projects: 'Unlimited Calls',
      revisions: 'Unlimited Locations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'Advanced analytics & reporting',
        'HIPAA & compliance features',
        'Secure storage + redaction',
        '24/7 dedicated support'
      ],
      highlight: false
    }
  ]

  const addOns = [
    {
      title: 'ResWare Integration',
      description: 'Direct integration with ResWare title production software',
      price: '$99/month',
      icon: Database
    },
    {
      title: 'RamQuest Integration',
      description: 'Seamless connection with RamQuest title software',
      price: '$99/month',
      icon: Database
    },
    {
      title: 'Custom CRM Integration',
      description: 'Connect with your existing CRM and title software',
      price: '$199/month',
      icon: Settings
    },
    {
      title: 'White-label Solution',
      description: 'Custom branding and deployment for your company',
      price: '$299/month',
      icon: Shield
    }
  ]

  const faqs = [
    {
      question: 'How does the pricing work?',
      answer: 'Our pricing is based on the number of voice agents and features you need. You can start with our Basic plan and upgrade as your business grows.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.'
    },
    {
      question: 'What happens if I exceed my limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade to a higher plan. No service interruptions.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team for a personalized quote.'
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
                Simple, Transparent Pricing
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white font-['Urbanist']">
                Choose the perfect plan for your title company.
              </h2>
            </div>
            <motion.p 
              className="text-xl text-white mb-12 max-w-4xl mx-auto font-['Urbanist']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Start with our Basic plan and scale as your business grows. All plans include our core AI features with no hidden fees.
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
        </div>
      </section>

      {/* Pricing Plans */}
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
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              All plans include our core AI features with no setup fees
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
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
                className="relative p-8 rounded-2xl bg-[#080808] border border-white/10 transition-all duration-300 hover:border-[#4F1AD6]/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(79, 26, 214, 0.1)"
                }}
              >
                {/* Square Boxes Grid Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-20 grid-rows-20 h-full w-full gap-0.5">
                    {Array.from({ length: 400 }, (_, i) => (
                      <div key={i} className="w-1 h-1 bg-white/50"></div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#4F1AD6] flex items-center justify-center">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="bg-gray-800 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium font-['Urbanist']">{plan.badge}</span>
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Urbanist']">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white font-['Urbanist']">{plan.price}</span>
                    <span className="text-white ml-2 font-['Urbanist']">{plan.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white mb-6 text-sm leading-relaxed font-['Urbanist']">{plan.description}</p>

                  {/* Key Metrics */}
                  <div className="flex gap-3 mb-6">
                    <div className="bg-gray-800 px-3 py-2 rounded-full">
                      <span className="text-white text-sm font-['Urbanist']">{plan.projects}</span>
                    </div>
                    <div className="bg-gray-800 px-3 py-2 rounded-full">
                      <span className="text-white text-sm font-['Urbanist']">{plan.revisions}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#4F1AD6] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white text-sm font-['Urbanist']">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full py-4 rounded-xl font-semibold text-lg bg-[#4F1AD6] text-white hover:bg-[#4F1AD6]/90 transition-all duration-300 font-['Urbanist']"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book an Appointment
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
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
                Add-ons & Extensions
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Enhance your plan with additional features and integrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
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
                  <addon.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-['Urbanist']">{addon.title}</h3>
                <p className="text-white mb-4 font-['Urbanist']">{addon.description}</p>
                <div className="text-2xl font-bold text-[#0080FF] font-['Urbanist']">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1
                  }}
                  className="p-6 rounded-2xl bg-[#080808] border border-white/10"
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
                >
                  <h3 className="text-xl font-bold text-white mb-3 font-['Urbanist']">{faq.question}</h3>
                  <p className="text-white font-['Urbanist']">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
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
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto font-['Urbanist']">
              Join thousands of title companies who have transformed their operations with Title Voice.
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

export default Pricing