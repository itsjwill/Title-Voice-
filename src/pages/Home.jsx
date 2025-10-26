import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SphereMotion from '../components/SphereMotion'
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  ArrowDown,
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
  Settings
} from 'lucide-react'

const Home = () => {
  const [activeTab, setActiveTab] = useState('receptionist')
  const [activeSection, setActiveSection] = useState('receptionist')
  const [showMiniNav, setShowMiniNav] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeCategory, setActiveCategory] = useState('ai-answering-service')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Mini navbar sections
  const miniNavSections = [
    { id: 'receptionist', title: 'Receptionist AI', icon: Phone },
    { id: 'deal-status', title: 'Deal Status', icon: BarChart3 },
    { id: 'scheduler', title: 'Scheduler', icon: Calendar },
    { id: 'warm-transfers', title: 'Warm Transfers', icon: Users },
    { id: 'outbound-campaigns', title: 'Outbound Campaigns', icon: Target }
  ]

  // Categories for the systems section
  const categories = [
    {
      id: 'call-handling',
      title: 'CALL HANDLING',
      items: ['24/7 Call Answering', 'Client Inquiry Handling', 'Emergency Response'],
      content: {
        title: 'CALL HANDLING',
        description: 'Professional call management for title companies',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'Call Processing',
            description: 'Advanced call routing and queue management for seamless client communication.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'Call Management System',
            description: 'Implement robust call handling with automated responses and human escalation.',
            code: `const callHandling = new TitleVoiceAI();
callHandling.configure({
  mode: "call_management",
  features: ["queue_management", "call_routing", "escalation"],
  hours: "24/7"
});`
          }
        ],
        integrations: ['Phone Systems', 'CRM Integration', 'Call Recording'],
        capabilities: ['Queue Management', 'Call Routing', 'Escalation Handling']
      }
    },
    {
      id: 'ai-answering-service',
      title: 'AI ANSWERING SERVICE',
      items: ['Smart Call Routing', 'Client Information Access', 'Appointment Scheduling'],
      content: {
        title: 'AI ANSWERING SERVICE',
        description: 'Intelligent AI-powered answering service for title companies',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'Smart Call Handling',
            description: 'AI answers calls with human-like intelligence, understanding client needs and providing accurate responses.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'AI Answering Service',
            description: 'Deploy AI answering service with natural language processing and client database integration.',
            code: `const titleVoice = new TitleVoiceAI();
titleVoice.configure({
  mode: "answering_service",
  integrations: [ClientDatabase, TitleSoftware],
  features: ["call_routing", "appointment_scheduling"]
});`
          }
        ],
        integrations: ['Client Database', 'Title Software', 'Calendar Systems'],
        capabilities: ['24/7 Availability', 'Natural Conversations', 'Instant Responses']
      }
    },
    {
      id: 'title-company-integrations',
      title: 'TITLE COMPANY INTEGRATIONS',
      items: ['Title software integration', 'Client database access', 'Document management'],
      content: {
        title: 'TITLE COMPANY INTEGRATIONS',
        description: 'Seamless integration with title company software and workflows',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'System Integration',
            description: 'Connect with existing title company software and databases for comprehensive workflow automation.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'Integration Setup',
            description: 'Configure integrations with title software, document management, and client databases.',
            code: `const integrations = new TitleVoiceAI();
integrations.configure({
  mode: "system_integration",
  connections: [TitleSoftware, DocumentManagement, ClientDatabase],
  automation: ["workflow_automation", "data_sync"]
});`
          }
        ],
        integrations: ['Title Software', 'Document Management', 'Client Database'],
        capabilities: ['Workflow Automation', 'Data Synchronization', 'API Connectivity']
      }
    }
  ]

  // Handle scroll to show/hide following nav and track active section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      const miniNavSection = document.getElementById('mini-nav-section')
      const outboundSection = document.getElementById('outbound-campaigns-section')
      
      if (heroSection && miniNavSection && outboundSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const miniNavBottom = miniNavSection.offsetTop + miniNavSection.offsetHeight
        const outboundBottom = outboundSection.offsetTop + outboundSection.offsetHeight
        const scrollY = window.scrollY
        
        // Show following nav when we're in the feature sections area
        const shouldShow = scrollY > heroBottom - 200 && scrollY < outboundBottom
        setShowMiniNav(shouldShow)
        
        // Check if following navbar should be sticky (when scrolled past original navbar)
        const shouldBeSticky = scrollY > miniNavBottom - 100 && shouldShow
        setIsSticky(shouldBeSticky)
        
        // Track active section
        const sections = miniNavSections.map(section => document.getElementById(`${section.id}-section`))
        const currentSection = sections.find(section => {
          if (section) {
            const rect = section.getBoundingClientRect()
            return rect.top <= 200 && rect.bottom >= 200
          }
          return false
        })
        
        if (currentSection) {
          setActiveSection(currentSection.id.replace('-section', ''))
        }
      }
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // No need for complex script loading - using iframe approach

  // Enhanced smooth scroll function with spring animation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      const offset = 120 // Account for sticky navbar
      const elementPosition = element.offsetTop - offset
      
      // Smooth scroll with easing
      const startPosition = window.pageYOffset
      const distance = elementPosition - startPosition
      const duration = Math.min(Math.abs(distance) / 2, 1000) // Max 1 second
      let startTime = null
      
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)
        
        window.scrollTo(0, startPosition + distance * ease)
        
        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }
      
      requestAnimationFrame(animation)
    }
  }

  const tabs = [
    {
      id: 'receptionist',
      title: 'Receptionist AI',
      icon: Phone,
      content: {
        title: 'Never Miss a Call',
        description: 'AI handles incoming calls with human-like conversations, understanding context and providing accurate responses.',
        demo: {
          customer: "What's the status of file 25-9783-PET?",
          ai: "Sure — that's the Foreman Avenue deal. It's currently in underwriting. Would you like me to email your processor's contact details?"
        }
      }
    },
    {
      id: 'status',
      title: 'Deal Status',
      icon: BarChart3,
      content: {
        title: 'Real-time Updates',
        description: 'Instantly access deal information, closing dates, and status updates from your CRM.',
        demo: {
          customer: "When is my closing scheduled?",
          ai: "Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before."
        }
      }
    },
    {
      id: 'scheduler',
      title: 'Scheduler',
      icon: Calendar,
      content: {
        title: 'Smart Scheduling',
        description: 'Automatically schedule appointments, send reminders, and manage your calendar.',
        demo: {
          customer: "I need to reschedule my closing",
          ai: "I can help you with that. What's your preferred date and time? I'll check availability and update your appointment."
        }
      }
    },
    {
      id: 'transfers',
      title: 'Warm Transfers',
      icon: Users,
      content: {
        title: 'Seamless Handoffs',
        description: 'Transfer complex inquiries to the right team member with full context and notes.',
        demo: {
          customer: "I have a complex title issue",
          ai: "I understand this requires specialized attention. Let me transfer you to our senior title officer, Sarah, who can help with this specific situation."
        }
      }
    },
    {
      id: 'outbound',
      title: 'Outbound Campaigns',
      icon: Target,
      content: {
        title: 'Reach More Clients',
        description: 'Title Voice runs outbound campaigns that keep clients engaged and closings on track.',
        demo: {
          customer: "Hi, this is Title Voice calling about your upcoming closing.",
          ai: "Hello! I'm calling to confirm your closing appointment and ensure all documents are ready. Is this a good time to discuss your closing details?"
        }
      }
    }
  ]

  const workflowSteps = [
    {
      title: 'Integrate',
      description: 'Connect Airtable, Retell, or your CRM',
      icon: Database,
      color: 'from-[#3B82F6] to-[#60A5FA]'
    },
    {
      title: 'Train',
      description: 'Upload title scripts, FAQs, and file schema',
      icon: Settings,
      color: 'from-[#60A5FA] to-[#3B82F6]'
    },
    {
      title: 'Automate',
      description: 'Let AI answer calls, check file details, or transfer warm leads',
      icon: Zap,
      color: 'from-[#3B82F6] to-[#00F6FF]'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$1,500',
      period: '/ Month',
      description: 'Perfect for small title companies getting started with AI automation.',
      badge: 'Most Pick',
      icon: '🚀',
      projects: '1,500 Free Minutes',
      revisions: 'Single Location',
      features: ['24/7 AI Title Receptionist', 'Deal status inquiries', 'Appointment scheduling', 'Basic CRM integration', 'Call transcripts & summaries', 'Email support', 'Cancel anytime', '$0 setup fee'],
      highlight: false
    },
    {
      name: 'Professional',
      price: '$2,000',
      period: '/ Month',
      description: 'Ideal for growing title companies with multiple locations.',
      badge: 'Advanced',
      icon: '🔔',
      projects: '2,000 Free Minutes',
      revisions: 'Multi-location',
      features: ['Everything in Basic', 'Multi-location team management', 'Escalation to live agent (optional)', 'Multilingual intake support', 'Custom script & workflows', 'Advanced CRM integrations', 'Priority support (email + phone)', 'Volume discounts available'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '$3,500',
      period: '/ Month',
      description: 'Advanced solutions for large title companies and enterprises.',
      badge: 'Recommended',
      icon: '👑',
      projects: '3,500 Free Minutes',
      revisions: 'Unlimited Locations',
      features: ['Everything in Professional', 'Dedicated account manager', 'Custom integrations', 'White-label solution', 'Advanced analytics & reporting', 'HIPAA & compliance features', 'Secure storage + redaction', '24/7 dedicated support'],
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Cinematic Animated Orb */}
      <section id="hero-section" className="relative flex flex-col justify-center items-center text-center min-h-screen bg-black overflow-hidden">
        {/* Sphere Motion GIF Animation - Full Cover */}
        <div className="absolute inset-0">
          <img 
            src="/spheremotion.gif" 
            alt="Sphere Motion Animation"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />


        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white font-['Urbanist']">
                Never miss a call again.
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-['Urbanist']">
                Human-like Conversations. Real-time Deal Support.
              </h2>
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto font-['Urbanist']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              Title Voice connects your clients directly to live deal updates — automating call handling and support with voice AI trained for title companies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 font-['Urbanist']"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 128, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Title Companies Need An AI Answering Service Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-['Urbanist'] text-white">
              Why Title Companies Need An AI Answering Service
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-900">
                <h3 className="text-sm font-semibold text-[#0080FF] mb-4 font-['Urbanist'] flex items-center gap-2 uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full"></div>
                  SYSTEMS
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-['Urbanist']">
                    Never miss a call with AI-powered answering services.
                  </h4>
                  <p className="text-gray-500 text-xs font-['Urbanist']">
                    Title companies need reliable answering services to handle client calls 24/7.
                </p>
              </div>
                
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-md p-2 border border-transparent'
                          : 'hover:bg-gray-800 rounded-md p-2'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <h5 className={`text-xs font-semibold mb-1 font-['Urbanist'] uppercase tracking-wide flex items-center gap-1 ${
                        activeCategory === category.id ? 'text-white' : 'text-gray-400'
                      }`}>
                        {activeCategory === category.id && (
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        )}
                        {category.title}
                      </h5>
                      <ul className={`text-xs space-y-0.5 font-['Urbanist'] ${
                        activeCategory === category.id ? 'text-white' : 'text-gray-500'
                      }`}>
                        {category.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side View */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-900">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 font-['Urbanist'] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full"></div>
                    {categories.find(cat => cat.id === activeCategory)?.content.title || 'AI ANSWERING SERVICE'}
                  </h3>
              </div>

                {/* Dynamic Content Based on Selected Category */}
                {(() => {
                  const currentCategory = categories.find(cat => cat.id === activeCategory);
                  if (!currentCategory) return null;
                  
                  return (
                    <>
                      {/* Animation and Implementation Side by Side */}
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        {/* Animation Card */}
                        <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                          <h4 className="text-xs font-semibold text-gray-300 mb-2 font-['Urbanist'] uppercase tracking-wide">
                            {currentCategory.content.features[0].title}
                          </h4>
                          <div className="flex justify-center mb-2">
                            {activeCategory === 'call-handling' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* Phone icon animation */}
                <motion.div
                                  className="w-6 h-6 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-sm"
                                  animate={{
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Call waves */}
                                <motion.div
                                  className="absolute w-8 h-8 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.8, 1.5, 0.8],
                                    opacity: [0.8, 0.2, 0.8]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                <motion.div
                                  className="absolute w-12 h-12 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.6, 1.8, 0.6],
                                    opacity: [0.6, 0.1, 0.6]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                />
              </div>
                            )}

                            {activeCategory === 'ai-answering-service' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* AI brain animation */}
            <motion.div
                                  className="w-4 h-4 bg-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.8, 1, 0.8]
                                  }}
              transition={{ 
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Neural network connections */}
                                <motion.div
                                  className="absolute w-8 h-8 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.5, 1.2, 0.5],
                                    opacity: [0.6, 0.2, 0.6]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                  }}
                                />
                <motion.div
                                  className="absolute w-12 h-12 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.3, 1.4, 0.3],
                                    opacity: [0.4, 0.1, 0.4]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4
                                  }}
                                />
                                <motion.div
                                  className="absolute w-16 h-16 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.2, 1.6, 0.2],
                                    opacity: [0.3, 0.05, 0.3]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6
                                  }}
                                />
              </div>
                            )}

                            {activeCategory === 'title-company-integrations' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* Database/Integration animation */}
            <motion.div
                                  className="w-5 h-3 bg-[#0080FF] rounded-sm"
                                  animate={{
                                    y: [0, -2, 0],
                                    scale: [1, 1.05, 1]
                                  }}
              transition={{ 
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Data flow lines */}
                                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  animate={{
                                    scaleY: [0.5, 1.2, 0.5],
                                    opacity: [0.7, 1, 0.7]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  style={{ left: '8px' }}
                                  animate={{
                                    scaleY: [0.3, 1.4, 0.3],
                                    opacity: [0.5, 0.8, 0.5]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                />
                                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  style={{ right: '8px' }}
                                  animate={{
                                    scaleY: [0.4, 1.1, 0.4],
                                    opacity: [0.6, 0.9, 0.6]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6
                                  }}
                                />
                              </div>
                            )}
                          </div>
              <div className="text-center">
                            <h5 className="text-[#0080FF] font-medium mb-1 text-xs font-['Urbanist']">
                              {currentCategory.content.features[0].subtitle}
                            </h5>
                            <p className="text-gray-500 text-xs font-['Urbanist']">
                              {currentCategory.content.features[0].description}
                            </p>
                          </div>
                        </div>

                        {/* Implementation Card */}
                        <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xs font-semibold text-gray-300 font-['Urbanist'] uppercase tracking-wide">
                              {currentCategory.content.features[1].title}
                            </h4>
                            <motion.button
                              className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-2 py-1 rounded text-xs font-medium font-['Urbanist']"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              RUN
                            </motion.button>
                          </div>
                          <div className="bg-black rounded p-2 font-mono text-xs overflow-x-auto">
                            <pre className="text-gray-400 whitespace-pre-wrap break-words">
                              {currentCategory.content.features[1].code}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}

                {/* Dynamic Integrations & Capabilities */}
                {(() => {
                  const currentCategory = categories.find(cat => cat.id === activeCategory);
                  if (!currentCategory) return null;
                  
                  return (
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                        <h4 className="text-xs font-semibold text-gray-300 mb-2 font-['Urbanist'] uppercase tracking-wide">INTEGRATIONS</h4>
                        <ul className="space-y-0.5">
                          {currentCategory.content.integrations.map((item, index) => (
                            <li key={index} className="text-gray-500 text-xs font-['Urbanist'] flex items-center gap-1">
                              <div className="w-0.5 h-0.5 bg-[#0080FF] rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                        <h4 className="text-xs font-semibold text-gray-300 mb-2 font-['Urbanist'] uppercase tracking-wide">CAPABILITIES</h4>
                        <ul className="space-y-0.5">
                          {currentCategory.content.capabilities.map((item, index) => (
                            <li key={index} className="text-gray-500 text-xs font-['Urbanist'] flex items-center gap-1">
                              <div className="w-0.5 h-0.5 bg-[#0080FF] rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              className="border-2 border-[#0080FF] text-[#0080FF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0080FF] hover:text-white transition-all duration-300 flex items-center gap-2 justify-center font-['Urbanist']"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 128, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
            >
              Book A Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Title Voice Operations Heading Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Urbanist']">
              Title Voice keeps your operations always-on.
            </h2>
            <p className="text-3xl text-white/80 font-['Urbanist']">
              Answer every call. Update every deal. Instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mini Navigation Tracker - ALWAYS VISIBLE in Original Position */}
      <motion.section
        id="mini-nav-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="py-8 px-4 bg-black"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <div className="bg-black/95 backdrop-blur-lg border border-white/30 rounded-full px-8 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                {miniNavSections.map((section, index) => {
                  const Icon = section.icon
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-['Urbanist'] ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white shadow-lg'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Following Mini Navigation - Advanced Sticky Following Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ 
          opacity: isSticky ? 1 : 0, 
          y: isSticky ? 0 : -20,
          scale: isSticky ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
          isSticky ? 'block' : 'hidden'
        }`}
      >
        <motion.div
          className="bg-black/90 backdrop-blur-2xl border border-[#8B5CF6]/40 rounded-full px-6 py-3 shadow-2xl"
          animate={{
            boxShadow: isSticky 
              ? [
                  "0 20px 40px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.3)",
                  "0 25px 50px rgba(139, 92, 246, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.4)",
                  "0 20px 40px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.3)"
                ]
              : "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}
          transition={{
            duration: 2,
            repeat: isSticky ? Infinity : 0,
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 30px 60px rgba(139, 92, 246, 0.6), 0 0 0 1px rgba(139, 92, 246, 0.5)"
          }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            {miniNavSections.map((section, index) => {
              const Icon = section.icon
              const isActive = activeSection === section.id
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full transition-all duration-300 font-['Urbanist'] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    boxShadow: isActive 
                      ? "0 8px 25px rgba(0, 128, 255, 0.4)" 
                      : "0 0 0 rgba(0, 128, 255, 0)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">{section.title}</span>
                  <span className="text-xs font-medium sm:hidden">{section.title.split(' ')[0]}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Receptionist AI Section */}
      <section id="receptionist-section" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-['Urbanist']">Receptionist AI</h3>
              </div>
              
              <h4 className="text-4xl font-bold text-white font-['Urbanist']">Never miss a call</h4>
              
              <p className="text-lg text-white leading-relaxed font-['Urbanist']">
                AI handles incoming calls with human-like conversations, understanding context and providing accurate responses.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">24/7 automated reception with natural language understanding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Intelligent call routing to the right department or agent</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Multilingual support for diverse client base</p>
                </div>
              </div>
              
              {/* Listen Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
                <div>
                  <p className="text-white font-semibold font-['Urbanist']">Listen to Title Voice</p>
                  <p className="text-white/70 text-sm font-['Urbanist']">Receptionist AI</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Call Transcript Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Urbanist']">Live Call</h4>
                    <p className="text-white/70 text-sm font-['Urbanist']">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Seamless Loop Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{ 
                      duration: 12, 
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    {/* First set of messages */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">Hi, I'm calling about the status of my closing at 123 Main St.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">Thank you for calling Title Voice. I can help you with that. Can you please provide the property address or file number?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">The address is 123 Main Street, file number 25-9783-PET</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">Perfect! I can see your Foreman Avenue deal is currently in underwriting. Would you like me to email your processor's contact details?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">Yes, that would be great. Thank you!</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">I've sent the details to your email. Is there anything else I can help you with today?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    {/* Duplicate set of messages for seamless loop */}
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">Hi, I'm calling about the status of my closing at 123 Main St.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">Thank you for calling Title Voice. I can help you with that. Can you please provide the property address or file number?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">The address is 123 Main Street, file number 25-9783-PET</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">Perfect! I can see your Foreman Avenue deal is currently in underwriting. Would you like me to email your processor's contact details?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">Yes, that would be great. Thank you!</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">I've sent the details to your email. Is there anything else I can help you with today?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deal Status Section */}
      <section id="deal-status-section" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-['Urbanist']">Deal Status</h3>
              </div>
              
              <h4 className="text-4xl font-bold text-white font-['Urbanist']">Real-time updates</h4>
              
              <p className="text-lg text-white leading-relaxed font-['Urbanist']">
                Instantly access deal information, closing dates, and status updates from your CRM.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Live deal status tracking and updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Automated client notifications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Seamless CRM integration</p>
                </div>
              </div>
              
              {/* Listen Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
                <div>
                  <p className="text-white font-semibold font-['Urbanist']">Listen to Title Voice</p>
                  <p className="text-white/70 text-sm font-['Urbanist']">Deal Status</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Deal Status Call Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Urbanist']">Status Update Call</h4>
                    <p className="text-white/70 text-sm font-['Urbanist']">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Auto-scroll Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{ 
                      duration: 12, 
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">What's the current status of my closing?</p>
                      </div>
                    </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">What documents do I need to bring?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">You'll need a valid photo ID and proof of funds. I can also send you a detailed checklist via email.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">Perfect, please send that checklist. Thank you!</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Done! I've sent the checklist to your email. You're all set for Friday at 2 PM.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  {/* Duplicate messages for seamless loop */}
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">What's the current status of my closing?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">What documents do I need to bring?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">You'll need a valid photo ID and proof of funds. I can also send you a detailed checklist via email.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">Perfect, please send that checklist. Thank you!</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Done! I've sent the checklist to your email. You're all set for Friday at 2 PM.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scheduler Section */}
      <section id="scheduler-section" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-['Urbanist']">Scheduler</h3>
              </div>
              
              <h4 className="text-4xl font-bold text-white font-['Urbanist']">Smart scheduling</h4>
              
              <p className="text-lg text-white leading-relaxed font-['Urbanist']">
                Automatically schedule appointments, send reminders, and manage your calendar.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Automated appointment booking</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Smart reminder notifications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Calendar integration and management</p>
                </div>
              </div>
              
              {/* Listen Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
                <div>
                  <p className="text-white font-semibold font-['Urbanist']">Listen to Title Voice</p>
                  <p className="text-white/70 text-sm font-['Urbanist']">Scheduler</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Scheduler Call Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Urbanist']">Scheduling Call</h4>
                    <p className="text-white/70 text-sm font-['Urbanist']">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Auto-scroll Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{ 
                      duration: 12, 
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">I need to schedule a time to sign my closing documents.</p>
                      </div>
                    </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">I can help you with that. What's your preferred date and time? I'll check availability and update your appointment.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">How about Tuesday at 10 AM or Wednesday at 2 PM?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Perfect! I can see available slots on Tuesday at 10 AM or Wednesday at 2 PM. Which one works best for you?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">Tuesday at 10 AM works perfect for me.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Excellent! I've scheduled your closing for Tuesday at 10 AM. I'll send you a confirmation email and reminder.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warm Transfers Section */}
      <section id="warm-transfers-section" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-['Urbanist']">Warm Transfers</h3>
              </div>
              
              <h4 className="text-4xl font-bold text-white font-['Urbanist']">Seamless handoffs</h4>
              
              <p className="text-lg text-white leading-relaxed font-['Urbanist']">
                Transfer complex inquiries to the right team member with full context and notes.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Intelligent call routing to specialists</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Full context transfer with conversation history</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Seamless handoff experience</p>
                </div>
              </div>
              
              {/* Listen Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
                <div>
                  <p className="text-white font-semibold font-['Urbanist']">Listen to Title Voice</p>
                  <p className="text-white/70 text-sm font-['Urbanist']">Warm Transfers</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Warm Transfer Call Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Urbanist']">Transfer Call</h4>
                    <p className="text-white/70 text-sm font-['Urbanist']">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Auto-scroll Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{ 
                      duration: 12, 
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm font-['Urbanist']">I have a complex title issue that needs human attention.</p>
                      </div>
                    </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">I understand this requires specialized attention. Let me transfer you to our senior title officer, Sarah, who can help with this specific situation.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">That would be great, thank you.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Perfect! I'm connecting you now. Sarah has all the context from our conversation and will be able to help you immediately.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">Hello Sarah, I was just transferred from the AI assistant about my title issue...</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Hi! I'm Sarah, your senior title officer. I can see from the AI's notes that you have a complex title issue. How can I help you today?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outbound Campaigns Section */}
      <section id="outbound-campaigns-section" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white font-['Urbanist']">Outbound Campaigns</h3>
              </div>
              
              <h4 className="text-4xl font-bold text-white font-['Urbanist']">Reach more clients</h4>
              
              <p className="text-lg text-white leading-relaxed font-['Urbanist']">
                Title Voice runs outbound campaigns that keep clients engaged and closings on track.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Automated follow-up and retention campaigns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">24/7 proactive client outreach</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0080FF] mt-2"></div>
                  <p className="text-white font-['Urbanist']">Targeted marketing and appointment booking</p>
                </div>
              </div>
              
              {/* Listen Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
                <div>
                  <p className="text-white font-semibold font-['Urbanist']">Listen to Title Voice</p>
                  <p className="text-white/70 text-sm font-['Urbanist']">Outbound Service</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Outbound Campaign Call Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-['Urbanist']">Outbound Call</h4>
                    <p className="text-white/70 text-sm font-['Urbanist']">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Auto-scroll Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{ 
                      duration: 12, 
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm font-['Urbanist']">Hello! This is Title Voice calling about your upcoming closing. Is this a good time to discuss your closing details?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">Yes, I have a few questions about my closing next week.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Perfect! I'm here to help. Your closing is scheduled for Friday at 2 PM. What specific questions do you have?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">What documents do I need to bring and is there anything I should prepare?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">You'll need a valid photo ID and proof of funds. I can send you a detailed checklist and also set up a reminder call for Thursday.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-white text-sm font-['Urbanist']">That would be very helpful, thank you!</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 justify-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 3.5 }}
                  >
                    <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-gray-800 text-sm font-['Urbanist']">Excellent! I've sent the checklist to your email and scheduled a reminder call for Thursday. You're all set for Friday at 2 PM!</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F6FF] to-[#0080FF] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* How It Works Section - Dark Minimalist Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Get started in three simple steps and transform your title company operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                {/* Main Card */}
                <motion.div
                  className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "rgba(0, 128, 255, 0.3)",
                    boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/5 via-transparent to-[#4F1AD6]/5 rounded-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center mx-auto mb-6 relative z-10"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 128, 255, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 128, 255, 0.2)",
                        "0 0 30px rgba(0, 128, 255, 0.3)",
                        "0 0 20px rgba(0, 128, 255, 0.2)"
                      ]
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-['Urbanist'] text-white relative z-10">{step.title}</h3>
                  <p className="text-white/80 font-['Urbanist'] leading-relaxed relative z-10">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Book a Demo Section - Enhanced with Calendly */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                See Title Voice in action
              </span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto font-['Urbanist']">
              Book a personalized demo and see how Title Voice can transform your title company operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Demo Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Urbanist']">Live Demo</h3>
                    <p className="text-white/80 font-['Urbanist']">Watch Title Voice handle real calls and see the AI in action with your specific use cases.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4F1AD6] to-[#0080FF] flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Urbanist']">Personalized Setup</h3>
                    <p className="text-white/80 font-['Urbanist']">Get a custom integration plan tailored to your title company's specific needs and workflows.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-['Urbanist']">ROI Analysis</h3>
                    <p className="text-white/80 font-['Urbanist']">Understand the potential savings and efficiency gains for your specific operation.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Calendly Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Urbanist']">Schedule Your Demo</h3>
                <p className="text-white/80 font-['Urbanist']">Choose a time that works for you</p>
              </div>

              {/* Cal.com Widget Container */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <iframe
                  src="https://cal.com/title-voice-ai-tsigyx/30min?embed=true&embedType=inline"
                  style={{
                    width: '100%',
                    height: '630px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="Cal.com Booking Widget"
                  loading="lazy"
                />
              </div>

              {/* Fallback Button if Cal.com doesn't load */}
              <motion.div className="mt-6 text-center">
                <motion.button
                  className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center mx-auto font-['Urbanist']"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 128, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                >
                  <Calendar className="w-5 h-5" />
                  Book Demo on Cal.com
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home