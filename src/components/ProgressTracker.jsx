import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProgressTracker = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const sections = [
    { id: 'hero', label: 'Hero', ref: 'hero' },
    { id: 'integration', label: 'Integration', ref: 'integration' },
    { id: 'trust', label: 'Trust', ref: 'trust' },
    { id: 'metrics', label: 'Metrics', ref: 'metrics' },
    { id: 'features', label: 'Features', ref: 'features' },
    { id: 'demo', label: 'Demo', ref: 'demo' },
    { id: 'testimonials', label: 'Testimonials', ref: 'testimonials' },
    { id: 'results', label: 'Results', ref: 'results' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show tracker when scrolling down (for testing, let's make it visible earlier)
      setIsVisible(window.scrollY > 200)
      
      const scrollPosition = window.scrollY + 200
      let currentSection = 'hero'
      
      for (const section of sections) {
        const element = document.getElementById(section.ref)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full bg-[#1B262C] py-4 px-6 shadow-lg border-b border-[#0F4C75]/20"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center relative">
          {/* Sliding background indicator */}
          <motion.div
            layoutId="activeIndicator"
            className="absolute bg-white rounded-full shadow-sm"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
            style={{
              height: '40px',
              zIndex: 1
            }}
          />
          
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.ref)}
              className={`relative z-10 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-[#1B262C]'
                  : 'text-[#BBE1FA] hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProgressTracker
