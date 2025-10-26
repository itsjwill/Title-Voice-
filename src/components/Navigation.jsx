import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Workflow', href: '/workflows' },
    { name: 'Pricing', href: '/pricing' }
  ]

  const isActive = (href) => {
    return location.pathname === href
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <Link to="/">
                      <Logo showText={true} size="default" />
                    </Link>
                  </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <Link
                  to={item.href}
                  className={`font-medium transition-colors duration-200 font-['Urbanist'] ${
                    isActive(item.href)
                      ? 'text-[#0080FF]'
                      : 'text-white hover:text-[#0080FF]'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 font-['Urbanist']"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 128, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
          >
            Get in Touch
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block font-medium transition-colors duration-200 font-['Urbanist'] ${
                        isActive(item.href)
                          ? 'text-[#0080FF]'
                          : 'text-[#C5C5D0] hover:text-[#0080FF]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="block bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-6 py-3 rounded-xl font-semibold text-center w-full font-['Urbanist']"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation